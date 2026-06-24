// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingRunHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of service to which the masked data is destined. Valid values: **1** for MaxCompute, **2** for OSS, **3** for ADS, **4** for OTS, and **5** for RDS.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The end time to query for task executions. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1583856000000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese.
   * 
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the main task.
   * 
   * > If a task has subtasks, this parameter specifies the ID of the main task. Otherwise, this parameter is empty.
   * 
   * @example
   * 366731
   */
  mainProcessId?: number;
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
   * The name of the source table.
   * 
   * @example
   * add
   */
  srcTableName?: string;
  /**
   * @remarks
   * The type of service to which the source data belongs. Valid values: **1** for MaxCompute, **2** for OSS, **3** for ADS, **4** for OTS, and **5** for RDS.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The start time to query for task executions. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1582992000000
   */
  startTime?: number;
  /**
   * @remarks
   * The execution status of the task. Valid values:
   * 
   * - **-1**: pending.
   * 
   * - **0**: running.
   * 
   * - **1**: successful.
   * 
   * - **2**: failed.
   * 
   * - **3**: stopped by user.
   * 
   * - **4**: partially failed.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the data masking task.
   * 
   * @example
   * mt4HBgtw1B******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dstType: 'DstType',
      endTime: 'EndTime',
      lang: 'Lang',
      mainProcessId: 'MainProcessId',
      pageSize: 'PageSize',
      srcTableName: 'SrcTableName',
      srcType: 'SrcType',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dstType: 'number',
      endTime: 'number',
      lang: 'string',
      mainProcessId: 'number',
      pageSize: 'number',
      srcTableName: 'string',
      srcType: 'number',
      startTime: 'number',
      status: 'number',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

