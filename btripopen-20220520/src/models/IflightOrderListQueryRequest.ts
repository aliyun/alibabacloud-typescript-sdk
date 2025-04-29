// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryRequest extends $dara.Model {
  applyIdList?: string[];
  bookTypeList?: number[];
  bookerId?: string[];
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * CAESBgoEIgIIABgAIhkKFwMSAAAAMUw4ZGViODFlYmM3MYzM4
   */
  scrollId?: string;
  /**
   * @example
   * yyyy-MM-dd HH:mm:ss
   */
  startDate?: string;
  thirdPartApplyIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      applyIdList: 'apply_id_list',
      bookTypeList: 'book_type_list',
      bookerId: 'booker_id',
      endDate: 'end_date',
      pageSize: 'page_size',
      scrollId: 'scroll_id',
      startDate: 'start_date',
      thirdPartApplyIdList: 'third_part_apply_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyIdList: { 'type': 'array', 'itemType': 'string' },
      bookTypeList: { 'type': 'array', 'itemType': 'number' },
      bookerId: { 'type': 'array', 'itemType': 'string' },
      endDate: 'string',
      pageSize: 'number',
      scrollId: 'string',
      startDate: 'string',
      thirdPartApplyIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.applyIdList)) {
      $dara.Model.validateArray(this.applyIdList);
    }
    if(Array.isArray(this.bookTypeList)) {
      $dara.Model.validateArray(this.bookTypeList);
    }
    if(Array.isArray(this.bookerId)) {
      $dara.Model.validateArray(this.bookerId);
    }
    if(Array.isArray(this.thirdPartApplyIdList)) {
      $dara.Model.validateArray(this.thirdPartApplyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

