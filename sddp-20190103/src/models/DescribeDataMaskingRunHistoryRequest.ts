// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingRunHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the destination product where the masked data is stored. Valid values: **1**: MaxCompute, **2**: OSS, **3**: ADS, **4**: OTS, **5**: RDS, and others.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The end time of the task execution to query. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1583856000000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
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
   * >If the task contains subtasks, this parameter is set to the current task ID. Otherwise, this parameter is empty.
   * 
   * @example
   * 366731
   */
  mainProcessId?: number;
  /**
   * @remarks
   * The maximum number of entries per page.
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
   * The type of the source product to which the data to be masked belongs. Valid values: **1**: MaxCompute, **2**: OSS, **3**: ADS, **4**: OTS, **5**: RDS, and others.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The start time of the task execution to query. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1582992000000
   */
  startTime?: number;
  /**
   * @remarks
   * The task execution status. Valid values:
   * - **-1**: Waiting for execution.
   * - **0**: Running.
   * - **1**: Executed successfully.
   * - **2**: Execution failed.
   * - **3**: Terminated by user.
   * - **4**: Partially failed.
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

