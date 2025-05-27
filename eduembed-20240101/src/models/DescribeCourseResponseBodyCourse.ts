// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCourseResponseBodyCourseChapters } from "./DescribeCourseResponseBodyCourseChapters";
import { DescribeCourseResponseBodyCourseLessons } from "./DescribeCourseResponseBodyCourseLessons";


export class DescribeCourseResponseBodyCourse extends $dara.Model {
  category?: string;
  chapters?: DescribeCourseResponseBodyCourseChapters[];
  id?: string;
  introduction?: string;
  lessonNum?: number;
  lessons?: DescribeCourseResponseBodyCourseLessons[];
  pictureUrl?: string;
  tags?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      chapters: 'Chapters',
      id: 'Id',
      introduction: 'Introduction',
      lessonNum: 'LessonNum',
      lessons: 'Lessons',
      pictureUrl: 'PictureUrl',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      chapters: { 'type': 'array', 'itemType': DescribeCourseResponseBodyCourseChapters },
      id: 'string',
      introduction: 'string',
      lessonNum: 'number',
      lessons: { 'type': 'array', 'itemType': DescribeCourseResponseBodyCourseLessons },
      pictureUrl: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chapters)) {
      $dara.Model.validateArray(this.chapters);
    }
    if(Array.isArray(this.lessons)) {
      $dara.Model.validateArray(this.lessons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

