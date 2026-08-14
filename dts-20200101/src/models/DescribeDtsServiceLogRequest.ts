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
   * The end time of the log information. You can call [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) to query the end time.
   * > - To query the log information of a DTS subtask within a specific time range, call [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) to query the execution time of the DTS subtask.
   * - The time is a 13-digit UNIX timestamp in milliseconds. You can use a search engine to find a UNIX timestamp converter.
   * 
   * @example
   * 1620897227000
   */
  endTime?: number;
  /**
   * @remarks
   * The keyword used to filter query results.
   * > Fuzzy match is used and the keyword is case-sensitive.
   * 
   * @example
   * state = IDLE
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log entries per page. Valid values: **20**, **50**, **100**, **500**, and **1000**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. Specify this parameter to indicate the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the log information.
   * 
   * > - To query the log information of a DTS subtask within a specific time range, call [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) to query the execution time of the DTS subtask.
   * - The start time is a 13-digit UNIX timestamp in milliseconds. You can use a search engine to find a UNIX timestamp converter.
   * 
   * @example
   * 1620896327000
   */
  startTime?: number;
  /**
   * @remarks
   * The log level of the log information. Separate multiple values with commas (,). Valid values:
   * 
   * - **NORMAL**: Normal.
   * - **WARN**: Warning.
   * - **ERROR**: Error.
   * 
   * @example
   * NORMAL,WARN,ERROR
   */
  status?: string;
  /**
   * @remarks
   * The type of the DTS task subnode. Valid values:
   * 
   * 
   * - **DATA_LOAD**: full data migration or initial full data synchronization.
   * - **ONLINE_WRITER**: incremental data migration.
   * - **SYNC_WRITER**: incremental data synchronization.
   * 
   * @example
   * SYNC_WRITER
   */
  subJobType?: string;
  /**
   * @remarks
   * Specifies whether the node is a seamless integration (Zero-ETL) node. Valid values:
   * - **true**: Yes.
   * - **false**: No.
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

