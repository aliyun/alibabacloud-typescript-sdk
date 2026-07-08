// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunPptOutlineGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The SSE event. \\`task-started\\`: The task starts. \\`task-finished\\`: The task is complete. \\`task-failed\\`: The task failed.
   * 
   * @example
   * task-started
   */
  event?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 1a3d7c9f-3a6d-4e49-b176-2d8721a27397
   */
  sessionId?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 8996314ce5514867943c71935e6a45af
   */
  taskId?: string;
  /**
   * @remarks
   * The trace ID.
   * 
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
  /**
   * @remarks
   * The output content.
   * 
   * @example
   * 文本生成结果
   */
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
  /**
   * @remarks
   * The output.
   */
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
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The response header.
   */
  header?: RunPptOutlineGenerationResponseBodyHeader;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The response body.
   */
  payload?: RunPptOutlineGenerationResponseBodyPayload;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\`: The request was successful. \\`false\\`: The request failed.
   * 
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

