// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCourseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  courseId?: number;
  static names(): { [key: string]: string } {
    return {
      courseId: 'CourseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      courseId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

