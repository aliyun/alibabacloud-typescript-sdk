// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPptOutlineGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @example
   * task-started
   */
  event?: string;
  /**
   * @example
   * 1a3d7c9f-3a6d-4e49-b176-2d8721a27397
   */
  sessionId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * 8996314ce5514867943c71935e6a45af
   */
  taskId?: string;
  /**
   * @example
   * 0bc1ec3a17435601877224179ecc8a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      statusCode: 'StatusCode',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      statusCode: 'number',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPptOutlineGenerationResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'Text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPptOutlineGenerationResponseBodyPayload extends $dara.Model {
  output?: RunPptOutlineGenerationResponseBodyPayloadOutput;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunPptOutlineGenerationResponseBodyPayloadOutput,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPptOutlineGenerationResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  header?: RunPptOutlineGenerationResponseBodyHeader;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  payload?: RunPptOutlineGenerationResponseBodyPayload;
  /**
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
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
      header: 'Header',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      payload: 'Payload',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      header: RunPptOutlineGenerationResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunPptOutlineGenerationResponseBodyPayload,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

