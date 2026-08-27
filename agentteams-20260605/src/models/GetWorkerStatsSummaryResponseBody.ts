// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerStatsSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of workers in other states.
   * 
   * @example
   * 2
   */
  otherWorkers?: number;
  /**
   * @remarks
   * The number of running workers.
   * 
   * @example
   * 20
   */
  runningWorkers?: number;
  /**
   * @remarks
   * The number of stopped workers.
   * 
   * @example
   * 3
   */
  stoppedWorkers?: number;
  /**
   * @remarks
   * The total number of workers.
   * 
   * @example
   * 25
   */
  totalWorkers?: number;
  static names(): { [key: string]: string } {
    return {
      otherWorkers: 'OtherWorkers',
      runningWorkers: 'RunningWorkers',
      stoppedWorkers: 'StoppedWorkers',
      totalWorkers: 'TotalWorkers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      otherWorkers: 'number',
      runningWorkers: 'number',
      stoppedWorkers: 'number',
      totalWorkers: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkerStatsSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: GetWorkerStatsSummaryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-XX-XX-XX
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
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWorkerStatsSummaryResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

