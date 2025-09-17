"use client";

import { motion } from "motion/react";

interface QuestionPageProps {
    question: {
        question: string;
        options: string[];
    };
    onAnswer: (answer: string) => void;
}

export default function QuestionPage({
    question,
    onAnswer,
}: QuestionPageProps) {
    return (
        <div className="w-full max-w-2xl px-4">
            <motion.h2 className="mb-8 text-center text-2xl font-bold"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}>
                {question.question}
            </motion.h2>
            <div className="space-y-4">
                {question.options.map((option, index) => (
                    <motion.button
                        key={index}
                        onClick={() => onAnswer(option)}
                        className="w-full rounded-lg bg-white p-4 text-left shadow"
                        initial={{y:100,opacity:0,}}
                        animate={{y:0,opacity:1}}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:0.95}}
                        transition={{duration:0.5,
                            delay:0.1*index
                        }}
                    >
                        {option}
                    </motion.button>
                ))}
            </div>
        </div>
    );
}