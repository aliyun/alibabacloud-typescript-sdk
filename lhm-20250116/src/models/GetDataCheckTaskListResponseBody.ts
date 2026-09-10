// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckTaskListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The check result. Valid values:
   * - 0: no record.
   * - 1: passed.
   * - 2: failed.
   * 
   * @example
   * 1
   */
  checkResult?: number;
  /**
   * @remarks
   * The number of checked tables.
   * 
   * @example
   * 100
   */
  checkTableNum?: number;
  /**
   * @remarks
   * The check template ID.
   * 
   * @example
   * 1001
   */
  checkTemplateId?: string;
  /**
   * @remarks
   * The check type. Valid values:
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * 
   * @example
   * 1
   */
  checkType?: number;
  /**
   * @remarks
   * The destination data source ID.
   * 
   * @example
   * 2001
   */
  dstDsId?: string;
  /**
   * @remarks
   * The destination data source name.
   * 
   * @example
   * ds_demo
   */
  dstDsName?: string;
  /**
   * @remarks
   * The destination data source type.
   * 
   * @example
   * Hive
   */
  dstDsType?: string;
  /**
   * @remarks
   * The destination check engine ID.
   * 
   * @example
   * 2001
   */
  dstEngineId?: string;
  /**
   * @remarks
   * The destination check engine name.
   * 
   * @example
   * engine_demo
   */
  dstEngineName?: string;
  /**
   * @remarks
   * The destination check engine type.
   * 
   * @example
   * Tez
   */
  dstEngineType?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * connection timeout
   */
  errorMsg?: string;
  /**
   * @remarks
   * The number of error tables.
   * 
   * @example
   * 5
   */
  errorTableNum?: number;
  /**
   * @remarks
   * The execution status. Valid values:
   * - 0: pending.
   * - 1: running.
   * - 2: stopped.
   * - 3: failed.
   * - 4: completed.
   * 
   * @example
   * 1
   */
  execStatus?: number;
  /**
   * @remarks
   * The execution duration.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  execTime?: string;
  /**
   * @remarks
   * The execution type. Valid values:
   * - 0: immediate execution.
   * - 1: scheduled execution.
   * 
   * @example
   * 0
   */
  executeType?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modified time.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10001
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether scheduling is enabled. Valid values:
   * - 0: Disabled.
   * - 1: Enabled.
   * 
   * @example
   * 0
   */
  isScheduled?: number;
  /**
   * @remarks
   * The latest batch ID.
   * 
   * @example
   * 20001
   */
  lastBatchId?: number;
  /**
   * @remarks
   * The latest completed batch ID.
   * 
   * @example
   * 833
   */
  lastFinishedId?: number;
  /**
   * @remarks
   * The check pass rate.
   */
  passProcess?: { [key: string]: any };
  /**
   * @remarks
   * The execution progress (0-1).
   * 
   * @example
   * 1.0
   */
  process?: number;
  /**
   * @remarks
   * The report time.
   * 
   * @example
   * 2024-01-01 12:00:00
   */
  reportTime?: string;
  /**
   * @remarks
   * The report title.
   * 
   * @example
   * Data validation report
   */
  reportTitle?: string;
  /**
   * @remarks
   * The number of skipped tables.
   * 
   * @example
   * 3
   */
  skipTableNum?: number;
  /**
   * @remarks
   * The source data source ID.
   * 
   * @example
   * 1001
   */
  srcDsId?: string;
  /**
   * @remarks
   * The source data source name.
   * 
   * @example
   * ds_demo
   */
  srcDsName?: string;
  /**
   * @remarks
   * The source data source type.
   * 
   * @example
   * Hive
   */
  srcDsType?: string;
  /**
   * @remarks
   * The source check engine ID.
   * 
   * @example
   * 1001
   */
  srcEngineId?: string;
  /**
   * @remarks
   * The source check engine name.
   * 
   * @example
   * engine_demo
   */
  srcEngineName?: string;
  /**
   * @remarks
   * The source check engine type.
   * 
   * @example
   * Tez
   */
  srcEngineType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-01-16 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The number of successful tables.
   * 
   * @example
   * 95
   */
  successfulTableNum?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * Data validation task description
   */
  taskDescription?: string;
  /**
   * @remarks
   * The creation mode. Valid values:
   * - 0: table-by-table fine-grained mode.
   * - 1: same-schema batch mode.
   * 
   * @example
   * 0
   */
  taskMode?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  /**
   * @remarks
   * The check template name.
   * 
   * @example
   * Row Count Validation Template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      checkResult: 'checkResult',
      checkTableNum: 'checkTableNum',
      checkTemplateId: 'checkTemplateId',
      checkType: 'checkType',
      dstDsId: 'dstDsId',
      dstDsName: 'dstDsName',
      dstDsType: 'dstDsType',
      dstEngineId: 'dstEngineId',
      dstEngineName: 'dstEngineName',
      dstEngineType: 'dstEngineType',
      endTime: 'endTime',
      errorMsg: 'errorMsg',
      errorTableNum: 'errorTableNum',
      execStatus: 'execStatus',
      execTime: 'execTime',
      executeType: 'executeType',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      isScheduled: 'isScheduled',
      lastBatchId: 'lastBatchId',
      lastFinishedId: 'lastFinishedId',
      passProcess: 'passProcess',
      process: 'process',
      reportTime: 'reportTime',
      reportTitle: 'reportTitle',
      skipTableNum: 'skipTableNum',
      srcDsId: 'srcDsId',
      srcDsName: 'srcDsName',
      srcDsType: 'srcDsType',
      srcEngineId: 'srcEngineId',
      srcEngineName: 'srcEngineName',
      srcEngineType: 'srcEngineType',
      startTime: 'startTime',
      successfulTableNum: 'successfulTableNum',
      taskDescription: 'taskDescription',
      taskMode: 'taskMode',
      taskName: 'taskName',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResult: 'number',
      checkTableNum: 'number',
      checkTemplateId: 'string',
      checkType: 'number',
      dstDsId: 'string',
      dstDsName: 'string',
      dstDsType: 'string',
      dstEngineId: 'string',
      dstEngineName: 'string',
      dstEngineType: 'string',
      endTime: 'string',
      errorMsg: 'string',
      errorTableNum: 'number',
      execStatus: 'number',
      execTime: 'string',
      executeType: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      isScheduled: 'number',
      lastBatchId: 'number',
      lastFinishedId: 'number',
      passProcess: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      process: 'number',
      reportTime: 'string',
      reportTitle: 'string',
      skipTableNum: 'number',
      srcDsId: 'string',
      srcDsName: 'string',
      srcDsType: 'string',
      srcEngineId: 'string',
      srcEngineName: 'string',
      srcEngineType: 'string',
      startTime: 'string',
      successfulTableNum: 'number',
      taskDescription: 'string',
      taskMode: 'number',
      taskName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.passProcess) {
      $dara.Model.validateMap(this.passProcess);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task list.
   */
  data?: GetDataCheckTaskListResponseBodyData[];
  /**
   * @remarks
   * The error code. An empty string is returned if the call is successful.
   * 
   * @example
   * Success
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. An empty string is returned if the call is successful.
   * 
   * @example
   * success
   */
  errMessage?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The page size, which indicates the number of records returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot issues related to this call.
   * 
   * @example
   * 4C467B38-3910-4477-9B0B-6963D83B4E72
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. A value of true indicates success. A value of false indicates failure. If the call fails, check errCode and errMessage for details.
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records that match the query conditions. This parameter is used for pagination.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetDataCheckTaskListResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

