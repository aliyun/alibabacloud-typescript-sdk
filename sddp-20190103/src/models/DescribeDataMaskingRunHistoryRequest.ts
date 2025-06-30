// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataMaskingRunHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the service to which the de-identified data belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  dstType?: number;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1583856000000
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * > If a task has one or more subtasks, the value of the parameter must be the ID of the task. Otherwise, leave this parameter empty.
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
   * The type of the service to which the data to be de-identified belongs. Valid values: **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates Object Storage Service (OSS). The value indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * @example
   * 2
   */
  srcType?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1582992000000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the de-identification task. Valid values:
   * 
   * *   **-1**: waiting
   * *   **0**: being executed
   * *   **1**: executed
   * *   **2**: failed to be executed
   * *   **3**: terminated
   * *   **4**: partially failed
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The ID of the de-identification task.
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

