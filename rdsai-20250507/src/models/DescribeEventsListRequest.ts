// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsListRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the query period.
   * 
   * @example
   * 2025-08-28 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * r-uf6ce0r08lr7xnriq2
   */
  instanceIdList?: string;
  /**
   * @remarks
   * The number of records per page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The end time of the query period.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The operation that you want to perform. Set the value to **DescribeEventsList**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The RDS Supabase instances.
   * 
   * @example
   * 2025-01-01 18:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceIdList: 'InstanceIdList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceIdList: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

