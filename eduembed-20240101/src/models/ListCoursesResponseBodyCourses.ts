// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCoursesResponseBodyCourses extends $dara.Model {
  category?: string;
  id?: string;
  introduction?: string;
  lessonNum?: number;
  pictureUrl?: string;
  tags?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      id: 'Id',
      introduction: 'Introduction',
      lessonNum: 'LessonNum',
      pictureUrl: 'PictureUrl',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      id: 'string',
      introduction: 'string',
      lessonNum: 'number',
      pictureUrl: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

