// Import the data modules for each of the Big Five personality traits
import Agreeableness from './agreeableness'
import Extraversion from './extraversion'
import Neuroticism from './neuroticism'
import Conscientiousness from './conscientiousness'
import OpennessToExperience from './openness_to_experience'

// Combine all the imported domains into a single array called 'domains'
const domains = [Agreeableness, Extraversion, Neuroticism, Conscientiousness, OpennessToExperience]

// Export the 'domains' array as the default export of this module
export default domains
