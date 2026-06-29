// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationSubmitStatusResponseBodyOperationSubmitJob extends $dara.Model {
  /**
   * @remarks
   * The business ID. If the operation is a data backfill, this value is the data backfill workflow ID.
   * 
   * @example
   * f_122_232342
   */
  externalBizId?: string;
  /**
   * @remarks
   * The submit ID of the data backfill request.
   * 
   * @example
   * 123456
   */
  jobId?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * - SUPPLY_DATA: data backfill.
   * 
   * @example
   * SUPPLY_DATA
   */
  operation?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * SUCCESS
   */
  operationStatus?: string;
  /**
   * @remarks
   * The user ID of the submitter.
   * 
   * @example
   * 132344
   */
  operator?: string;
  /**
   * @remarks
   * The progress.
   * 
   * @example
   * 80
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      externalBizId: 'ExternalBizId',
      jobId: 'JobId',
      operation: 'Operation',
      operationStatus: 'OperationStatus',
      operator: 'Operator',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalBizId: 'string',
      jobId: 'string',
      operation: 'string',
      operationStatus: 'string',
      operator: 'string',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOperationSubmitStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The submit status of the operation.
   */
  operationSubmitJob?: GetOperationSubmitStatusResponseBodyOperationSubmitJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      operationSubmitJob: 'OperationSubmitJob',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      operationSubmitJob: GetOperationSubmitStatusResponseBodyOperationSubmitJob,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.operationSubmitJob && typeof (this.operationSubmitJob as any).validate === 'function') {
      (this.operationSubmitJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

