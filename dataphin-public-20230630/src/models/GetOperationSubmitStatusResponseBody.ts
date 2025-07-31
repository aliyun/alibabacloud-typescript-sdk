// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationSubmitStatusResponseBodyOperationSubmitJob extends $dara.Model {
  /**
   * @example
   * f_122_232342
   */
  externalBizId?: string;
  /**
   * @example
   * 123456
   */
  jobId?: string;
  /**
   * @example
   * SUPPLY_DATA
   */
  operation?: string;
  /**
   * @example
   * SUCCESS
   */
  operationStatus?: string;
  /**
   * @example
   * 132344
   */
  operator?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  operationSubmitJob?: GetOperationSubmitStatusResponseBodyOperationSubmitJob;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
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

