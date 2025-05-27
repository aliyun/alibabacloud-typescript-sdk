// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCourseLessonRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  lessonId?: number;
  static names(): { [key: string]: string } {
    return {
      lessonId: 'LessonId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lessonId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

