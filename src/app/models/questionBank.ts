import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        required: true
    },
    options: {
        type: [String],
        required: true,
        validate: {
            validator: function(optArr: string[]) {
                return optArr.length >= 2;
            },
            message: "A question must have at least 2 options.",
        },
    },
    correctAnswer: {
        type: String,
        required: true,
        enum: {
            values: ["i", "ii", "iii", "iv"],
            message: "Correct answer must be one of the options."
        },
    },
    subject: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Question = mongoose.model("Question", QuestionSchema);

export default Question;