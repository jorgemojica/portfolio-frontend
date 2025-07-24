import Achievement from '@/modules/common/components/achievement.component'
import Percentages from '@/modules/common/components/percentages.component'
import Layout from '@/modules/common/layouts/layout'
import React from 'react'

export default function ResumePage() {
    return (
        <Layout>
            <section className="mt-10">
                <article className="flex items-center gap-5 mb-10">
                    <div className="bg-gradient-to-br  from-neutral-800 to-neutral-900 rounded-xl p-3 relative flex items-center justify-center">
                        <span className="border-r  border-neutral-700 w-[1px] h-12 absolute  -bottom-12"></span>
                        
                    </div>
                    <h2 className="text-2xl text-white font-semibold">Education</h2>
                </article>
                <Achievement />
                <Achievement />
                <Achievement isLast={true} />
            </section>

            <section className="mt-10">
                <article className="flex items-center gap-5">
                    <div className="bg-gradient-to-br  from-neutral-800 to-neutral-900 rounded-xl p-3 relative flex items-center justify-center">
                        <span className="border-r  border-neutral-700 w-[1px] h-8 absolute  -bottom-8"></span>
                        
                    </div>
                    <h2 className="text-2xl text-white font-semibold">Experience</h2>
                </article>
                <Achievement />
                <Achievement />
                <Achievement isLast={true} />
            </section>

            <section className="mt-10">
                <h2 className="text-2xl text-white font-semibold">Languages</h2>

                <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl  px-8 py-8 gap-8   flex flex-col mt-5">
                    <Percentages />
                    <Percentages />
                </article>
            </section>
            <section className="mt-10">
                <h2 className="text-2xl text-white font-semibold">My Skills</h2>
                <article className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl px-8 py-8 gap-8  flex flex-col mt-5">
                    <Percentages />
                    <Percentages />
                    <Percentages />
                </article>
            </section>
        </Layout>
    )
}