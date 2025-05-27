// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCourseResponseBodyCourse } from "./DescribeCourseResponseBodyCourse";


export class DescribeCourseResponseBody extends $dara.Model {
  code?: string;
  course?: DescribeCourseResponseBodyCourse;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      course: 'Course',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      course: DescribeCourseResponseBodyCourse,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.course && typeof (this.course as any).validate === 'function') {
      (this.course as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

