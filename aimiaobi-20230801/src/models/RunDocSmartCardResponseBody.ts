// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocSmartCardResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * finished
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 07181f55-2311-48af-8048-132a77dee020
   */
  sessionId?: string;
  /**
   * @example
   * 8d55b429d7c6d321fcff54823e8d317b
   */
  taskId?: string;
  /**
   * @example
   * 0abb781c17337107444473701ed7c3
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
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

export class RunDocSmartCardResponseBodyPayloadOutput extends $dara.Model {
  content?: string;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunDocSmartCardResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 100
   */
  outputTokens?: number;
  /**
   * @example
   * 101
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

export class RunDocSmartCardResponseBodyPayload extends $dara.Model {
  output?: RunDocSmartCardResponseBodyPayloadOutput;
  usage?: RunDocSmartCardResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunDocSmartCardResponseBodyPayloadOutput,
      usage: RunDocSmartCardResponseBodyPayloadUsage,
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

export class RunDocSmartCardResponseBody extends $dara.Model {
  header?: RunDocSmartCardResponseBodyHeader;
  payload?: RunDocSmartCardResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'Header',
      payload: 'Payload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunDocSmartCardResponseBodyHeader,
      payload: RunDocSmartCardResponseBodyPayload,
      requestId: 'string',
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

