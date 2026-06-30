// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventsListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the YYYY-MM-DD HH:mm:ss format. The time must be in UTC.
   * 
   * @example
   * 2025-08-28 18:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The instance IDs. You can specify one or more instance IDs.
   * 
   * @example
   * r-uf6ce0r08lr7xn****
   */
  instanceIdList?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the YYYY-MM-DD HH:mm:ss format. The time must be in UTC.
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

