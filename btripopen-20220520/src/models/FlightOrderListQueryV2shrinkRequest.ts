// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ShrinkRequest extends $dara.Model {
  approveIdShrink?: string;
  bookerIdShrink?: string;
  departIdShrink?: string;
  /**
   * @example
   * 2022-07-01 00:00:00
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
   * 2022-07-01 00:00:00
   */
  startDate?: string;
  supplierShrink?: string;
  thirdpartApproveIdShrink?: string;
  /**
   * @example
   * 2022-07-01 00:00:00
   */
  updateEndDate?: string;
  /**
   * @example
   * 2022-07-01 00:00:00
   */
  updateStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      approveIdShrink: 'approve_id',
      bookerIdShrink: 'booker_id',
      departIdShrink: 'depart_id',
      endDate: 'end_date',
      pageSize: 'page_Size',
      scrollId: 'scroll_id',
      startDate: 'start_date',
      supplierShrink: 'supplier',
      thirdpartApproveIdShrink: 'thirdpart_approve_id',
      updateEndDate: 'update_end_date',
      updateStartDate: 'update_start_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveIdShrink: 'string',
      bookerIdShrink: 'string',
      departIdShrink: 'string',
      endDate: 'string',
      pageSize: 'number',
      scrollId: 'string',
      startDate: 'string',
      supplierShrink: 'string',
      thirdpartApproveIdShrink: 'string',
      updateEndDate: 'string',
      updateStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

