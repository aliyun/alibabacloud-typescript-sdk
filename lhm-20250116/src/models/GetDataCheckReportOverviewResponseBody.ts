// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCheckReportOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the validation job (batch).
   * 
   * @example
   * 20001
   */
  batchId?: number;
  /**
   * @remarks
   * The number of validated fields.
   * 
   * @example
   * 10
   */
  checkColumnCount?: number;
  /**
   * @remarks
   * The number of validated partitions.
   * 
   * @example
   * 5
   */
  checkPtCount?: number;
  /**
   * @remarks
   * The validation result. Valid values:
   * - 0: No record.
   * - 1: Passed.
   * - 2: Failed.
   * 
   * @example
   * 0
   */
  checkResult?: number;
  /**
   * @remarks
   * The number of validated data rows.
   * 
   * @example
   * 1000
   */
  checkRowCount?: number;
  /**
   * @remarks
   * The number of rows that passed validation.
   * 
   * @example
   * 1000
   */
  checkRowPassCount?: number;
  /**
   * @remarks
   * The row pass rate for the export report. This value is calculated by dividing the number of passed rows by the total number of validated rows. The value is returned as a percentage string with two decimal places.
   * 
   * @example
   * 100.00%
   */
  checkRowPassExport?: string;
  /**
   * @remarks
   * The number of validation SQL statements.
   * 
   * @example
   * 10
   */
  checkSqlNum?: number;
  /**
   * @remarks
   * The number of validated tables.
   * 
   * @example
   * 100
   */
  checkTableNum?: number;
  /**
   * @remarks
   * The validation template name. This field is available only for metric validation.
   * 
   * @example
   * 1001
   */
  checkTemplateId?: string;
  /**
   * @remarks
   * The validation template name. This field is available only for metric validation.
   * 
   * @example
   * Data volume comparison built-in template
   */
  checkTemplateName?: string;
  /**
   * @remarks
   * The validation type. Valid values:
   * - 0: data volume comparison.
   * - 1: metric comparison.
   * - 2: weak content comparison.
   * 
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @remarks
   * The name of the destination datasource.
   * 
   * @example
   * ds_demo
   */
  dstDsName?: string;
  /**
   * @remarks
   * The type of the destination datasource.
   * 
   * @example
   * Hive
   */
  dstDsType?: string;
  /**
   * @remarks
   * The number of tables with errors.
   * 
   * @example
   * 5
   */
  errorTableNum?: number;
  /**
   * @remarks
   * The number of fields that passed validation.
   * 
   * @example
   * 8
   */
  passColumnCount?: number;
  /**
   * @remarks
   * The number of metrics that passed validation.
   * 
   * @example
   * 1.0
   */
  passColumnRate?: number;
  /**
   * @remarks
   * The pass rate.
   * 
   * @example
   * 0.95
   */
  passProcess?: number;
  /**
   * @remarks
   * The pass rate for the export report. This value is calculated by dividing the number of passed tables by the total number of validated tables. The value is returned as a percentage string with two decimal places (for example, 100.00%). A hyphen (-) is returned when no validated table data exists.
   * 
   * @example
   * 100.00%
   */
  passProcessExport?: string;
  /**
   * @remarks
   * The number of partitions that passed validation.
   * 
   * @example
   * 5
   */
  passPtNum?: number;
  /**
   * @remarks
   * The partition pass rate for the export report. This value is calculated by dividing the number of passed partitions by the total number of validated partitions. The value is returned as a percentage string with four decimal places. A hyphen (-) is returned when no partition data exists.
   * 
   * @example
   * 100.0000%
   */
  passPtProcessExport?: string;
  /**
   * @remarks
   * The number of tables that passed validation.
   * 
   * @example
   * 10
   */
  passTableNum?: number;
  /**
   * @remarks
   * The partition pass rate.
   * 
   * @example
   * 1.0
   */
  ptPassProcess?: number;
  /**
   * @remarks
   * The report generation message.
   * 
   * @example
   * Validation report refresh completed
   */
  reportGenerateMessage?: string;
  /**
   * @remarks
   * The validation report status. Valid values:
   * - 0: Not generated.
   * - 1: Generating.
   * - 2: Generated.
   * 
   * @example
   * 0
   */
  reportStatus?: number;
  /**
   * @remarks
   * The time when the report was generated.
   * 
   * @example
   * 2024-01-01 12:00:00
   */
  reportTime?: string;
  /**
   * @remarks
   * The title of the validation report.
   * 
   * @example
   * Data Validation Report
   */
  reportTitle?: string;
  /**
   * @remarks
   * The number of skipped partitions.
   * 
   * @example
   * 0
   */
  skipPtNum?: number;
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
   * The name of the source datasource.
   * 
   * @example
   * ds_demo
   */
  srcDsName?: string;
  /**
   * @remarks
   * The type of the source datasource.
   * 
   * @example
   * Hive
   */
  srcDsType?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2024-01-01 11:00:00
   */
  taskCreateTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 551
   */
  taskId?: number;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * @example
   * 2024-01-01 12:00:00
   */
  taskModifyTime?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * data_check_task_demo
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      batchId: 'batchId',
      checkColumnCount: 'checkColumnCount',
      checkPtCount: 'checkPtCount',
      checkResult: 'checkResult',
      checkRowCount: 'checkRowCount',
      checkRowPassCount: 'checkRowPassCount',
      checkRowPassExport: 'checkRowPassExport',
      checkSqlNum: 'checkSqlNum',
      checkTableNum: 'checkTableNum',
      checkTemplateId: 'checkTemplateId',
      checkTemplateName: 'checkTemplateName',
      checkType: 'checkType',
      dstDsName: 'dstDsName',
      dstDsType: 'dstDsType',
      errorTableNum: 'errorTableNum',
      passColumnCount: 'passColumnCount',
      passColumnRate: 'passColumnRate',
      passProcess: 'passProcess',
      passProcessExport: 'passProcessExport',
      passPtNum: 'passPtNum',
      passPtProcessExport: 'passPtProcessExport',
      passTableNum: 'passTableNum',
      ptPassProcess: 'ptPassProcess',
      reportGenerateMessage: 'reportGenerateMessage',
      reportStatus: 'reportStatus',
      reportTime: 'reportTime',
      reportTitle: 'reportTitle',
      skipPtNum: 'skipPtNum',
      skipTableNum: 'skipTableNum',
      srcDsName: 'srcDsName',
      srcDsType: 'srcDsType',
      taskCreateTime: 'taskCreateTime',
      taskId: 'taskId',
      taskModifyTime: 'taskModifyTime',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'number',
      checkColumnCount: 'number',
      checkPtCount: 'number',
      checkResult: 'number',
      checkRowCount: 'number',
      checkRowPassCount: 'number',
      checkRowPassExport: 'string',
      checkSqlNum: 'number',
      checkTableNum: 'number',
      checkTemplateId: 'string',
      checkTemplateName: 'string',
      checkType: 'number',
      dstDsName: 'string',
      dstDsType: 'string',
      errorTableNum: 'number',
      passColumnCount: 'number',
      passColumnRate: 'number',
      passProcess: 'number',
      passProcessExport: 'string',
      passPtNum: 'number',
      passPtProcessExport: 'string',
      passTableNum: 'number',
      ptPassProcess: 'number',
      reportGenerateMessage: 'string',
      reportStatus: 'number',
      reportTime: 'string',
      reportTitle: 'string',
      skipPtNum: 'number',
      skipTableNum: 'number',
      srcDsName: 'string',
      srcDsType: 'string',
      taskCreateTime: 'string',
      taskId: 'number',
      taskModifyTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataCheckReportOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetDataCheckReportOverviewResponseBodyData;
  /**
   * @remarks
   * The fault information code.
   * 
   * @example
   * None
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * not supported.pos 5459, line 196, column 14, token IDENTIFIER settings
   */
  errMessage?: string;
  /**
   * @remarks
   * The request ID. This value uniquely identifies the call. Provide this value when troubleshooting issues.
   * 
   * @example
   * FFF386FC-295C-5D2E-B2FE-410003095F06
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * False
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMessage: 'errMessage',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDataCheckReportOverviewResponseBodyData,
      errCode: 'string',
      errMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

