// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseErrorLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lightweight database instance.
   * 
   * This parameter is required.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****
   */
  databaseInstanceId?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC and formatted as `yyyy-MM-ddTHH:mmZ` according to the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard. This value must be later than the start time.
   * 
   * > The time displayed in the console is 8 hours ahead of the specified UTC time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-08T04:04Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of error logs to return per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the lightweight database instance resides.
   * 
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to query the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The start of the time range to query. The time must be in UTC and formatted as `yyyy-MM-ddTHH:mmZ` according to the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard.
   * 
   * > The time displayed in the console is 8 hours ahead of the specified UTC time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      databaseInstanceId: 'DatabaseInstanceId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseInstanceId: 'string',
      endTime: 'string',
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

