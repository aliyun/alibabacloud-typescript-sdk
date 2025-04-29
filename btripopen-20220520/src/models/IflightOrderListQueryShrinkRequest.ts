// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryShrinkRequest extends $dara.Model {
  applyIdListShrink?: string;
  bookTypeListShrink?: string;
  bookerIdShrink?: string;
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
  thirdPartApplyIdListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applyIdListShrink: 'apply_id_list',
      bookTypeListShrink: 'book_type_list',
      bookerIdShrink: 'booker_id',
      endDate: 'end_date',
      pageSize: 'page_size',
      scrollId: 'scroll_id',
      startDate: 'start_date',
      thirdPartApplyIdListShrink: 'third_part_apply_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyIdListShrink: 'string',
      bookTypeListShrink: 'string',
      bookerIdShrink: 'string',
      endDate: 'string',
      pageSize: 'number',
      scrollId: 'string',
      startDate: 'string',
      thirdPartApplyIdListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

