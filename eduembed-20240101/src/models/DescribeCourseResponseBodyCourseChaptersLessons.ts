// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCourseResponseBodyCourseChaptersLessons extends $dara.Model {
  duration?: number;
  id?: number;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      id: 'Id',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      id: 'number',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

