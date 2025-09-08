// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoScriptGenerateResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * ScriptNumberExceed
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 400
   */
  statusCode?: number;
  /**
   * @example
   * b057f2fa-2277-477b-babf-cbc062307828
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
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

export class RunVideoScriptGenerateResponseBodyPayloadOutput extends $dara.Model {
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

export class RunVideoScriptGenerateResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 200
   */
  totalTokens?: number;
  static names(): { [key: string]: string } {
    return {
      inputTokens: 'InputTokens',
      outputTokens: 'OutputTokens',
      totalTokens: 'TotalTokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputTokens: 'number',
      outputTokens: 'number',
      totalTokens: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoScriptGenerateResponseBodyPayload extends $dara.Model {
  output?: RunVideoScriptGenerateResponseBodyPayloadOutput;
  usage?: RunVideoScriptGenerateResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunVideoScriptGenerateResponseBodyPayloadOutput,
      usage: RunVideoScriptGenerateResponseBodyPayloadUsage,
    };
  }

  validate() {
    if(this.output && typeof (this.output as any).validate === 'function') {
      (this.output as any).validate();
    }
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunVideoScriptGenerateResponseBody extends $dara.Model {
  /**
   * @example
   * NoPermission
   */
  code?: string;
  header?: RunVideoScriptGenerateResponseBodyHeader;
  /**
   * @example
   * 403
   */
  httpStatusCode?: string;
  /**
   * @example
   * You are not authorized to perform this action.
   */
  message?: string;
  payload?: RunVideoScriptGenerateResponseBodyPayload;
  /**
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @example
   * false
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
      header: RunVideoScriptGenerateResponseBodyHeader,
      httpStatusCode: 'string',
      message: 'string',
      payload: RunVideoScriptGenerateResponseBodyPayload,
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

