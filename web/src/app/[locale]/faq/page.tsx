'use client';
import { title } from '@/components/primitives';
import { Accordion, AccordionItem } from '@nextui-org/accordion';

export default function FaqPage() {
  const faq = [
    {
      question: 'I got an error on this website',
      answer:
        'send us an e-mail at zenlearn.tech@gmail.com'
    },
    {
      question: 'What is ZenLearn, and how does it help with professional development?',
      answer: 'ZenLearn is a learning platform that offers customized learning paths designed by industry experts. Our platform focuses on providing practical knowledge that can be applied directly to your career, helping you grow professionally.'
    },
    {
      question: 'Can I use the questions for Commercial Purposes?',
      answer:
        'Yes, the questions and translations are licensed under the MIT license.'
    },
    {
      question: 'How do I print my test results?',
      answer:
        'Try to print the results-page from your browser or save it as a PDF-document and print that instead.'
    },
    {
      question: 'I want to translate the questions to my language',
      answer:
        "Use this website to translate the questions. Select the language you want to translate from.Translate the questions and click 'generate'. This will generate a file and download it to your computer. Send the downloaded file to bigfive- test@rubynor.com and tell us which language you have translated. If you want to translate it directly on github instead, you can follow the description here."
    },
    {
      question: 'What kind of courses and training programs does ZenLearn offer?',
      answer:
        'ZenLearn offers a wide range of courses across various industries, focusing on skills development, leadership training, and specialized knowledge in niche areas.'
    },
    {
      question:
        'Who are the industry experts involved in creating ZenLearn’s content?',
      answer: 'ZenLearn partners with top professionals from various industries to develop content that is both relevant and practical. These experts bring their real-world experience and insights to every course.'
    },
    {
      question: 'Is ZenLearn suitable for individuals at all career levels?',
      answer:
        ' Yes, ZenLearn offers courses and programs designed for professionals at all stages of their careers, from entry-level to senior executives.'
    },
    {
      question: 'How does ZenLearn ensure the privacy and security of my personal data?',
      answer:
        ' ZenLearn takes your privacy seriously. We use advanced security measures to protect your data and comply with all relevant data protection regulations.'
    },
  ];
  return (
    <div>
      <h1 className={title()}>Frequently asked questions.</h1>
      <Accordion className='mt-10'>
        {faq.map((item, index) => (
          <AccordionItem
            key={index}
            textValue={item.question}
            title={
              <span className='text-foreground text-large font-medium'>
                {item.question}
              </span>
            }
          >
            <div className='py-2 pt-0 pb-6 text-base text-default-500'>
              {item.answer}
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
