// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAivppAlgoJobResponseBodyDataResponse extends $dara.Model {
  /**
   * @example
   * {}
   */
  debugInfo?: any;
  /**
   * @example
   * PowerForecast
   */
  jobType?: string;
  /**
   * @example
   * {}
   */
  result?: any;
  static names(): { [key: string]: string } {
    return {
      debugInfo: 'DebugInfo',
      jobType: 'JobType',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugInfo: 'any',
      jobType: 'string',
      result: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAivppAlgoJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * False
   */
  completed?: boolean;
  /**
   * @example
   * 2024-12-10 17:50:48
   */
  createTime?: string;
  /**
   * @example
   * ""
   */
  error?: string;
  /**
   * @example
   * 5854bfa6-f002-43c2-8e1d-e9b2c28f9384
   */
  jobId?: string;
  /**
   * @example
   * 100
   */
  progress?: number;
  response?: GetAivppAlgoJobResponseBodyDataResponse;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      completed: 'Completed',
      createTime: 'CreateTime',
      error: 'Error',
      jobId: 'JobId',
      progress: 'Progress',
      response: 'Response',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completed: 'boolean',
      createTime: 'string',
      error: 'string',
      jobId: 'string',
      progress: 'number',
      response: GetAivppAlgoJobResponseBodyDataResponse,
      status: 'string',
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAivppAlgoJobResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetAivppAlgoJobResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAivppAlgoJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

