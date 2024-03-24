const ResumeCard = ({ title, subTitle, des, result, logo }) => {
  return (
    <div className="flex w-full h-1/3 group">
      <div className="w-10 h-[6px] bgOpacity mt-16 relative">
        <span className="absolute flex justify-center items-center w-5 h-5 rounded-full -top-2 -left-3 bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
        </span>
      </div>
      <div className="w-full dark:bg-gray bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-8 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowTwo dark:shadow-shadowOne">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-designColor group-hover:text-gray-800 dark:group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-400 dark:group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>

          <div>
            { result &&
              <p className="px-4 py-2 text-white  bg-designColor dark:bg-gray dark:bg-opacity-25 rounded-lg flex justify-center items-center dark:shadow-shadowOne text-sm font-medium">
                {result}
              </p>
            }
            {logo && (
              <img className="w-36  object-cover" src={logo} alt={logo} />
            )}
          </div>
        </div>

        <p className="text-sm md:text-base font-medium text-gray-400 dark:group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
