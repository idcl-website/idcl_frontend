import Link from 'next/link';

export default function SkillUpAd() {
  return (
    <div className="bg-blue-600 p-6 md:p-8 text-white shadow-lg">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-3 flex-1">
            <h3 className="text-2xl md:text-3xl font-bold">SkillUp Imo Cohort 4 Registration Now Open!</h3>
            <p className="text-blue-100">
              We're excited to announce that registration for SkillUp Imo Cohort 4 is now open! This program empowers Imo youths with in-demand digital skills for the modern workforce. Don't miss this opportunity!
            </p>
          </div>
          <div className="block">
            <div className="bg-white p-4 rounded-lg border border-white/20 flex flex-col items-center">
              <img src="/images/skillup/myimoapp.svg" alt="myimoapp" />
              <div className="pt-2">
                <button className=" text-blue-600 bg-blue-50 font-semibold cursor-pointer p-1 rounded-xl">
                  <Link href="https://www.myimoapp.com" target="_blank" rel="noopener noreferrer" className='cursor-pointer'>
                    Register today in myimoapp
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
