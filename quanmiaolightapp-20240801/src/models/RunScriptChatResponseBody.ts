// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunScriptChatResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * F8A35034-EDCF-5C50-95A5-1044316F36E3
   */
  requestId?: string;
  /**
   * @example
   * 147648697127_914847410985_1730600302167
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
      sessionId: 'string',
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

export class RunScriptChatResponseBodyPayloadOutput extends $dara.Model {
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
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

export class RunScriptChatResponseBodyPayloadUsage extends $dara.Model {
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
      inputTokens: 'inputTokens',
      outputTokens: 'outputTokens',
      totalTokens: 'totalTokens',
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

export class RunScriptChatResponseBodyPayload extends $dara.Model {
  output?: RunScriptChatResponseBodyPayloadOutput;
  usage?: RunScriptChatResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptChatResponseBodyPayloadOutput,
      usage: RunScriptChatResponseBodyPayloadUsage,
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

export class RunScriptChatResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  end?: boolean;
  header?: RunScriptChatResponseBodyHeader;
  payload?: RunScriptChatResponseBodyPayload;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'boolean',
      header: RunScriptChatResponseBodyHeader,
      payload: RunScriptChatResponseBodyPayload,
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

