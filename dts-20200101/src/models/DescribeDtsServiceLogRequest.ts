// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsServiceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data migration or synchronization task.
   * 
   * @example
   * c1yr56py103****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The end of the time range to query. You can call the [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) operation to query the execution time of the subtasks.
   * 
   * > *   To obtain the logs that are generated for DTS subtasks within a specific period of time, you can call the [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) operation to query the execution time of the subtasks.
   * >*   Specify the time in the 13-digit UNIX timestamp format. Unit: milliseconds. You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1620897227000
   */
  endTime?: number;
  /**
   * @remarks
   * The keyword that is passed to specify the query content.
   * 
   * >  Fuzzy match is used and the keyword is case-sensitive.
   * 
   * @example
   * state = IDLE
   */
  keyword?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0 and less than or equal to the maximum value supported by the integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log entries to return on each page. Valid values: **20**, **50**, **100**, **500**, and **1000**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the DTS instance resides. For more information, see [List of supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * > *   To obtain the logs that are generated for Data Transmission Service (DTS) subtasks within a specific period of time, you can call the [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) operation to query the execution time of the subtasks.
   * >*   Specify the time in the 13-digit UNIX timestamp format. Unit: milliseconds. You can use a search engine to obtain a UNIX timestamp converter.
   * 
   * @example
   * 1620896327000
   */
  startTime?: number;
  /**
   * @remarks
   * The log level. Separate multiple log levels with commas (,). Valid values:
   * 
   * *   **NORMAL**: displays the logs that are generated when the DTS task runs as expected.
   * *   **WARN**: displays the logs about severe issues that stop the DTS task from running.
   * *   **ERROR**: displays the logs about unexpected issues that stop specific processes form running.
   * 
   * @example
   * NORMAL,WARN,ERROR
   */
  status?: string;
  /**
   * @remarks
   * The type of a DTS subtask. Valid values:
   * 
   * *   **DATA_LOAD**: full migration or full synchronization
   * *   **ONLINE_WRITER**: incremental migration
   * *   **SYNC_WRITER**: incremental synchronization
   * 
   * @example
   * SYNC_WRITER
   */
  subJobType?: string;
  /**
   * @remarks
   * Whether it is a seamless integration (Zero-ETL) task, the value can be: - **true**: Yes. - **false**: No.
   * 
   * @example
   * true
   */
  zeroEtlJob?: boolean;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      status: 'Status',
      subJobType: 'SubJobType',
      zeroEtlJob: 'ZeroEtlJob',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      endTime: 'number',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'number',
      status: 'string',
      subJobType: 'string',
      zeroEtlJob: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

