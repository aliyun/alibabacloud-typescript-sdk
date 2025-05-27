// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCourseResponseBodyCourseChaptersLessons } from "./DescribeCourseResponseBodyCourseChaptersLessons";
import { DescribeCourseResponseBodyCourseChaptersUnit } from "./DescribeCourseResponseBodyCourseChaptersUnit";


export class DescribeCourseResponseBodyCourseChapters extends $dara.Model {
  lessons?: DescribeCourseResponseBodyCourseChaptersLessons[];
  number?: number;
  title?: string;
  unit?: DescribeCourseResponseBodyCourseChaptersUnit[];
  static names(): { [key: string]: string } {
    return {
      lessons: 'Lessons',
      number: 'Number',
      title: 'Title',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lessons: { 'type': 'array', 'itemType': DescribeCourseResponseBodyCourseChaptersLessons },
      number: 'number',
      title: 'string',
      unit: { 'type': 'array', 'itemType': DescribeCourseResponseBodyCourseChaptersUnit },
    };
  }

  validate() {
    if(Array.isArray(this.lessons)) {
      $dara.Model.validateArray(this.lessons);
    }
    if(Array.isArray(this.unit)) {
      $dara.Model.validateArray(this.unit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

