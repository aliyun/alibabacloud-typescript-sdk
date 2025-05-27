// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCourseResponseBodyCourseChaptersUnitLessons } from "./DescribeCourseResponseBodyCourseChaptersUnitLessons";


export class DescribeCourseResponseBodyCourseChaptersUnit extends $dara.Model {
  lessons?: DescribeCourseResponseBodyCourseChaptersUnitLessons[];
  number?: number;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      lessons: 'Lessons',
      number: 'Number',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lessons: { 'type': 'array', 'itemType': DescribeCourseResponseBodyCourseChaptersUnitLessons },
      number: 'number',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lessons)) {
      $dara.Model.validateArray(this.lessons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

