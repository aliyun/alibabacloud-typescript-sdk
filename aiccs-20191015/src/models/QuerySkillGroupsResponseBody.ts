// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySkillGroupsResponseBodyData } from "./QuerySkillGroupsResponseBodyData";


export class QuerySkillGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: QuerySkillGroupsResponseBodyData[];
  /**
   * @example
   * 20
   */
  onePageSize?: number;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  totalPage?: number;
  /**
   * @example
   * 76
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      requestId: 'RequestId',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': QuerySkillGroupsResponseBodyData },
      onePageSize: 'number',
      requestId: 'string',
      totalPage: 'number',
      totalResults: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

