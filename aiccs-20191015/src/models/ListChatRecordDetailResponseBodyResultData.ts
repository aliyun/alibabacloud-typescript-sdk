// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListChatRecordDetailResponseBodyResultDataData } from "./ListChatRecordDetailResponseBodyResultDataData";


export class ListChatRecordDetailResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListChatRecordDetailResponseBodyResultDataData[];
  /**
   * @example
   * 10
   */
  onePageSize?: number;
  /**
   * @example
   * 10
   */
  totalPage?: number;
  /**
   * @example
   * 100
   */
  totalResults?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      onePageSize: 'OnePageSize',
      totalPage: 'TotalPage',
      totalResults: 'TotalResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': ListChatRecordDetailResponseBodyResultDataData },
      onePageSize: 'number',
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

