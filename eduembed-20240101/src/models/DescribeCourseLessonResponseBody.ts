// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCourseLessonResponseBodyCourseLesson } from "./DescribeCourseLessonResponseBodyCourseLesson";


export class DescribeCourseLessonResponseBody extends $dara.Model {
  code?: string;
  courseLesson?: DescribeCourseLessonResponseBodyCourseLesson;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      courseLesson: 'CourseLesson',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      courseLesson: DescribeCourseLessonResponseBodyCourseLesson,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.courseLesson && typeof (this.courseLesson as any).validate === 'function') {
      (this.courseLesson as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

