import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
	bio: {
	  type: String,
	  required: true
	}
});

export const About = mongoose.models.abouts || mongoose.model('abouts', aboutSchema);