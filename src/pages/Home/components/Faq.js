import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs =[
        {
            "id" : 1,
            "question" : "Why should I use CodeBook?",
            "answer" : "CodeBook is easy solution for your preparation. You can use CodeBook to learn codes and other is to crack interviews."
        },
        {
            "id" : 2,
            "question" : "Can I access my eBook on mobile?",
            "answer" : "Yes, you can use CodeBook on your mobile. Just go to our page and Login with your id and password, you will get access in your mobile."
        },
        {
            "id" : 3,
            "question" : "Do you offer refunds?",
            "answer" : "Yes, we offer refunds, if there is you purchase any book and you dont get access for that book."
        },
        {
            "id" : 4,
            "question" : "Do you support internation payments?",
            "answer" : "Yes, we can accept internation payments."
        }
    ]
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>
        <div className="" id="accordion-flush" data-accordian="collapse" data-active-classes="bg-white dark:bg-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
            { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} />
            ))}
        </div>
    </section>
  )
}
