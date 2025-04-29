// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  allApply?: boolean;
  /**
   * @example
   * 175634
   */
  applyId?: number;
  departId?: string;
  /**
   * @example
   * 2022-07-01 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2022-07-01 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * CS-FLIGHT
   */
  thirdpartApplyId?: string;
  /**
   * @example
   * 2022-07-01 00:00:00
   */
  updateEndTime?: string;
  /**
   * @example
   * 2022-07-01 00:00:00
   */
  updateStartTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      allApply: 'all_apply',
      applyId: 'apply_id',
      departId: 'depart_id',
      endTime: 'end_time',
      page: 'page',
      pageSize: 'page_size',
      startTime: 'start_time',
      thirdpartApplyId: 'thirdpart_apply_id',
      updateEndTime: 'update_end_time',
      updateStartTime: 'update_start_time',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allApply: 'boolean',
      applyId: 'number',
      departId: 'string',
      endTime: 'string',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      thirdpartApplyId: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

