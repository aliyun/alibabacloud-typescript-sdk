// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsServiceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the migration or synchronization task.
   * 
   * @example
   * c1yr56py103****
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The end time of the logs. You can call the [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) operation to query the time.
   * > - To query the logs of a DTS subtask within a specific time range, call the [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) operation to obtain the execution time of the DTS subtask.
   * - Specify the time as a 13-digit UNIX timestamp in milliseconds. You can use a search engine to find a UNIX timestamp converter.
   * 
   * @example
   * 1620897227000
   */
  endTime?: number;
  /**
   * @remarks
   * The keyword used to filter the logs.
   * > Fuzzy matching is supported and the keyword is case-sensitive.
   * 
   * @example
   * state = IDLE
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
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
   * The ID of the region where the instance resides. For more information, see [Supported regions](https://help.aliyun.com/document_detail/141033.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The start time of the logs.
   * 
   * > - To query the logs of a DTS subtask within a specific time range, call the [DescribePreCheckStatus](https://help.aliyun.com/document_detail/209718.html) operation to obtain the execution time of the DTS subtask.
   * - Specify the time as a 13-digit UNIX timestamp in milliseconds. You can use a search engine to find a UNIX timestamp converter.
   * 
   * @example
   * 1620896327000
   */
  startTime?: number;
  /**
   * @remarks
   * The log level. Separate multiple log levels with commas (,). Valid values:
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
   * The specific sub-node type of the DTS task. Valid values:
   * 
   * 
   * - **DATA_LOAD**: Full data migration or full data synchronization.
   * - **ONLINE_WRITER**: Incremental data migration.
   * - **SYNC_WRITER**: Incremental data synchronization.
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

