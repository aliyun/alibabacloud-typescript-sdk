// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCoursesResponseBodyCourses } from "./ListCoursesResponseBodyCourses";


export class ListCoursesResponseBody extends $dara.Model {
  code?: string;
  courses?: ListCoursesResponseBodyCourses[];
  message?: string;
  page?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      courses: 'Courses',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      courses: { 'type': 'array', 'itemType': ListCoursesResponseBodyCourses },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.courses)) {
      $dara.Model.validateArray(this.courses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

