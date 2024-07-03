import CourseData from "../data/music_courses.json";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course{
    id: number,
    title: string,
    slug: string,
    description:string,
    price: number,
    instructor: string,
    isFeatured: boolean,
   
}

function FeaturedCourses(){
   const FeaturedCourses =  CourseData.courses.filter((course:Course) => course.isFeatured)
    return(
  <div className="py-12 bg-gray-900">
    <div className="text-center">
      <h2 className="text-base font-semibold tracking-wide text-green-800">FEATURED COURSES</h2>
      <p className="text-2xl font-medium text-white ">Learn With the Best</p>
    </div>
    <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mx-3">
            {FeaturedCourses.map((course:Course)=>(
              <div key = {course.id} className="flex justify-center">
                  <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link  href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
               
              </div>
            ))}

        </div>

    </div>
    <div className="text-center mt-20 ">
        <Link href={"/Courses"}>
        <Button>
         View All Courses 
        </Button>
        </Link>

    </div>

  </div>
    )
}
export default FeaturedCourses;
