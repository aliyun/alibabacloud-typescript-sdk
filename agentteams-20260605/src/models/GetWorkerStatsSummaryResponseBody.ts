// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkerStatsSummaryResponseBodyData extends $dara.Model {
  otherWorkers?: number;
  runningWorkers?: number;
  stoppedWorkers?: number;
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
  code?: string;
  data?: GetWorkerStatsSummaryResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

