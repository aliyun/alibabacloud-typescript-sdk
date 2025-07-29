// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunScriptRefineResponseBodyHeader extends $dara.Model {
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
   * 17dc8bcd-f34a-46d1-a7a3-0fa3d1ce3824
   */
  sessionId?: string;
  /**
   * @example
   * 14356391-6c6c-40d5-b80a-8ecd03b69d72
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

export class RunScriptRefineResponseBodyPayloadOutput extends $dara.Model {
  content?: { [key: string]: string }[];
  outline?: string;
  role?: string;
  scene?: string;
  summary?: string;
  /**
   * @example
   * xx
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      outline: 'outline',
      role: 'role',
      scene: 'scene',
      summary: 'summary',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      outline: 'string',
      role: 'string',
      scene: 'string',
      summary: 'string',
      text: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunScriptRefineResponseBodyPayloadUsage extends $dara.Model {
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

export class RunScriptRefineResponseBodyPayload extends $dara.Model {
  output?: RunScriptRefineResponseBodyPayloadOutput;
  usage?: RunScriptRefineResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunScriptRefineResponseBodyPayloadOutput,
      usage: RunScriptRefineResponseBodyPayloadUsage,
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

export class RunScriptRefineResponseBody extends $dara.Model {
  end?: boolean;
  header?: RunScriptRefineResponseBodyHeader;
  payload?: RunScriptRefineResponseBodyPayload;
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
      header: RunScriptRefineResponseBodyHeader,
      payload: RunScriptRefineResponseBodyPayload,
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

