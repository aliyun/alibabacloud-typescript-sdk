// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPhoneNumbersOfSkillGroupResponseBodyDataList } from "./ListPhoneNumbersOfSkillGroupResponseBodyDataList";


export class ListPhoneNumbersOfSkillGroupResponseBodyData extends $dara.Model {
  list?: ListPhoneNumbersOfSkillGroupResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListPhoneNumbersOfSkillGroupResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

