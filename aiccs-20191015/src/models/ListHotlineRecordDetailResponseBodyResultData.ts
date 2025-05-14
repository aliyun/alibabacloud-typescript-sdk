// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListHotlineRecordDetailResponseBodyResultDataData } from "./ListHotlineRecordDetailResponseBodyResultDataData";


export class ListHotlineRecordDetailResponseBodyResultData extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: ListHotlineRecordDetailResponseBodyResultDataData[];
  /**
   * @example
   * 100
   */
  onePageSize?: number;
  /**
   * @example
   * 10
   */
  totalPage?: number;
  /**
   * @example
   * 945
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
      data: { 'type': 'array', 'itemType': ListHotlineRecordDetailResponseBodyResultDataData },
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

