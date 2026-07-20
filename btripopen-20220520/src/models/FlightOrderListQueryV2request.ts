// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2Request extends $dara.Model {
  approveId?: string[];
  bookerId?: string[];
  departId?: string[];
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
  supplier?: string[];
  thirdpartApproveId?: string[];
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
      approveId: 'approve_id',
      bookerId: 'booker_id',
      departId: 'depart_id',
      endDate: 'end_date',
      pageSize: 'page_Size',
      scrollId: 'scroll_id',
      startDate: 'start_date',
      supplier: 'supplier',
      thirdpartApproveId: 'thirdpart_approve_id',
      updateEndDate: 'update_end_date',
      updateStartDate: 'update_start_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveId: { 'type': 'array', 'itemType': 'string' },
      bookerId: { 'type': 'array', 'itemType': 'string' },
      departId: { 'type': 'array', 'itemType': 'string' },
      endDate: 'string',
      pageSize: 'number',
      scrollId: 'string',
      startDate: 'string',
      supplier: { 'type': 'array', 'itemType': 'string' },
      thirdpartApproveId: { 'type': 'array', 'itemType': 'string' },
      updateEndDate: 'string',
      updateStartDate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approveId)) {
      $dara.Model.validateArray(this.approveId);
    }
    if(Array.isArray(this.bookerId)) {
      $dara.Model.validateArray(this.bookerId);
    }
    if(Array.isArray(this.departId)) {
      $dara.Model.validateArray(this.departId);
    }
    if(Array.isArray(this.supplier)) {
      $dara.Model.validateArray(this.supplier);
    }
    if(Array.isArray(this.thirdpartApproveId)) {
      $dara.Model.validateArray(this.thirdpartApproveId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

