// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * bfb786c639894f4d80648792021e****
   */
  jobId?: string;
  /**
   * @remarks
   * The media ID.
   * 
   * @example
   * bf53333264f4d80648792021e****
   */
  traceMediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      traceMediaId: 'TraceMediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      traceMediaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceAbJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: SubmitTraceAbJobResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******36-3C1E-4417-BDB2-1E034F******
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitTraceAbJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
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

