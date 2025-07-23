// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadForecastJobResponseBodyDataResponse extends $dara.Model {
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

export class CreateLoadForecastJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * True
   */
  completed?: boolean;
  /**
   * @example
   * 2024-12-22 00:00:21
   */
  createTime?: string;
  /**
   * @example
   * ""
   */
  error?: string;
  /**
   * @example
   * 8c0ca18a-246a-4acd-80ca-e16d8ff5ef33
   */
  jobId?: string;
  /**
   * @example
   * 25
   */
  progress?: number;
  response?: CreateLoadForecastJobResponseBodyDataResponse;
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
      response: CreateLoadForecastJobResponseBodyDataResponse,
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

export class CreateLoadForecastJobResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateLoadForecastJobResponseBodyData;
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
      data: CreateLoadForecastJobResponseBodyData,
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

