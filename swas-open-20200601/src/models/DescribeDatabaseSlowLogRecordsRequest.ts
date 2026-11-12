// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatabaseSlowLogRecordsRequest extends $dara.Model {
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
   * The end of the time range to query. The end time must be later than the start time. The interval between the start time and the end time cannot be longer than 7 days.
   * 
   * The time is in UTC and must be formatted as `yyyy-MM-ddTHH:mm:ssZ` as specified by the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard.
   * 
   * > The console displays this time in the UTC+8 time zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-08T04:04:44Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Starting value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 30 to 100.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the lightweight database instance.
   * You can call the [ListRegions](https://help.aliyun.com/document_detail/189315.html) operation to get the latest list of supported Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * The time is in UTC and must be formatted as `yyyy-MM-ddTHH:mm:ssZ` as specified by the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard.
   * 
   * > The console displays this time in the UTC+8 time zone.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-09-07T04:04:44Z
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

