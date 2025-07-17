// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo extends $dara.Model {
  /**
   * @remarks
   * Export task ID.
   * 
   * @example
   * 1385****
   */
  jobId?: number;
  /**
   * @remarks
   * The state of the data export ticket. Valid values:
   * 
   * *   **PRE_CHECKING**: The ticket was being prechecked.
   * *   **PRE_CHECK_SUCCESS**: The ticket passed the precheck.
   * *   **PRE_CHECK_FAIL**: The ticket failed to pass the prechecked.
   * *   **WAITING_APPLY_AUDIT**: The ticket was to be submitted for approval.
   * *   **APPLY_AUDIT_SUCCESS**: The ticket was submitted for approval.
   * *   **ENABLE_EXPORT**: The ticket was approved. Data can be exported.
   * *   **WAITING_EXPORT**: Data was to be scheduled for export.
   * *   **DOING_EXPORT**: Data was being exported.
   * *   **EXPORT_FAIL**: Data failed to be exported.
   * *   **EXPORT_SUCCESS**: Data was exported.
   * 
   * @example
   * EXPORT_SUCCESS
   */
  jobStatus?: string;
  /**
   * @remarks
   * The precheck ID.
   * 
   * @example
   * 123
   */
  preCheckId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      preCheckId: 'PreCheckId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      jobStatus: 'string',
      preCheckId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The number of rows that were affected by the SQL statement.
   * 
   * @example
   * 1
   */
  actualAffectRows?: number;
  /**
   * @remarks
   * The category of the reason for the data export.
   * 
   * @example
   * text
   */
  classify?: string;
  /**
   * @remarks
   * The name of the database from which data was exported.
   * 
   * @example
   * xxx@xxx:3306
   */
  database?: string;
  /**
   * @remarks
   * The ID of the database from which data was exported.
   * 
   * @example
   * 123
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the environment to which the database belongs.
   * 
   * @example
   * test
   */
  envType?: string;
  /**
   * @remarks
   * The SQL statement that was executed to export data.
   * 
   * @example
   * select 1
   */
  exeSQL?: string;
  /**
   * @remarks
   * Indicates whether the affected rows are skipped.
   * 
   * @example
   * false
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The reason why the affected rows are skipped.
   * 
   * @example
   * empty
   */
  ignoreAffectRowsReason?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  static names(): { [key: string]: string } {
    return {
      actualAffectRows: 'ActualAffectRows',
      classify: 'Classify',
      database: 'Database',
      dbId: 'DbId',
      envType: 'EnvType',
      exeSQL: 'ExeSQL',
      ignoreAffectRows: 'IgnoreAffectRows',
      ignoreAffectRowsReason: 'IgnoreAffectRowsReason',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualAffectRows: 'number',
      classify: 'string',
      database: 'string',
      dbId: 'number',
      envType: 'string',
      exeSQL: 'string',
      ignoreAffectRows: 'boolean',
      ignoreAffectRowsReason: 'string',
      logic: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBodyDataExportOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The status information.
   */
  keyInfo?: GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo;
  /**
   * @remarks
   * The details of the ticket.
   */
  orderDetail?: GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail;
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
      orderDetail: 'OrderDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo,
      orderDetail: GetDataExportOrderDetailResponseBodyDataExportOrderDetailOrderDetail,
    };
  }

  validate() {
    if(this.keyInfo && typeof (this.keyInfo as any).validate === 'function') {
      (this.keyInfo as any).validate();
    }
    if(this.orderDetail && typeof (this.orderDetail as any).validate === 'function') {
      (this.orderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the data export ticket.
   */
  dataExportOrderDetail?: GetDataExportOrderDetailResponseBodyDataExportOrderDetail;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataExportOrderDetail: 'DataExportOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataExportOrderDetail: GetDataExportOrderDetailResponseBodyDataExportOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataExportOrderDetail && typeof (this.dataExportOrderDetail as any).validate === 'function') {
      (this.dataExportOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

