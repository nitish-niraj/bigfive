import { HeartBoldIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Feedback from './feedback';
import { Link } from '@/navigation';

interface Props {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: t('seo.title'),
    description: t('seo.description')
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <div className='text-center justify-center mt-10'>
        <h1 className={title()}>About</h1>
      </div>
      <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
            <p>
              Welcome to ZenLearn, your trusted partner in unlocking expertise and unleashing potential through personalized and practical learning. Our platform is designed to provide deep insights and tailored learning experiences, guided by industry professionals and powered by cutting-edge AI technology.
            </p>
            <br />
            <p>
              At ZenLearn, we believe in the transformative power of knowledge. Our approach is built on the foundation of the Big Five personality traits—Openness, Conscientiousness, Extraversion, Agreeableness, and Neuroticism—delivering a unique and comprehensive understanding of your learning needs.
            </p>
            <p>
              Our mission is to empower you with the tools and insights necessary for personal and professional growth. By combining expert knowledge with innovative AI, we create a learning journey that is as practical as it is profound. Discover the future of learning with Unlearn ZenLearn, where your growth is our priority.
            </p>
            <br />
            <p>
              Should you have any questions, we encourage you to explore our{' '}
              <Link href='/faq' className='underline'>
                FAQ
              </Link>{' '}
              section. For further assistance, please feel free to reach out to us at <a href="mailto:zenlearn.tech@gmail.com" className='underline'>zenlearn.tech@gmail.com</a>.
            </p>
      </div>
      <section>
        <div className='text-center justify-center mt-20'>
          <h2 className={title()}>We love feedback!&nbsp;</h2>
          <div className='flex md:inline-flex flex-col md:flex-row items-center'>
            <HeartBoldIcon
              className='text-pink-500 animate-heartbeat'
              size={50}
              style={{
                animationDuration: '2.5s'
              }}
            />
          </div>
          <div className='mt-2 text-medium lg:mt-4 lg:text-large'>
            Send us feedback about how our features can be improved or specific
            issues.
          </div>
        </div>
        <Feedback />
      </section>
    </>
  );
}
