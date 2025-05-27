// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCourseLessonResponseBodyCourseLesson extends $dara.Model {
  content?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

