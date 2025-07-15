// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunKeywordsExtractionGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * 1a3d7c9f-3a6d-4e49-b176-2d8721a27397
   */
  sessionId?: string;
  /**
   * @example
   * 8d55b429d7c6d321fcff54823e8d317b
   */
  taskId?: string;
  /**
   * @example
   * 210bc4e817219607963985396de8bd
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
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

export class RunKeywordsExtractionGenerationResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * xxx
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

export class RunKeywordsExtractionGenerationResponseBodyPayloadUsage extends $dara.Model {
  /**
   * @example
   * 1
   */
  inputTokens?: number;
  /**
   * @example
   * 1
   */
  outputTokens?: number;
  /**
   * @example
   * 2
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

export class RunKeywordsExtractionGenerationResponseBodyPayload extends $dara.Model {
  output?: RunKeywordsExtractionGenerationResponseBodyPayloadOutput;
  usage?: RunKeywordsExtractionGenerationResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunKeywordsExtractionGenerationResponseBodyPayloadOutput,
      usage: RunKeywordsExtractionGenerationResponseBodyPayloadUsage,
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

export class RunKeywordsExtractionGenerationResponseBody extends $dara.Model {
  header?: RunKeywordsExtractionGenerationResponseBodyHeader;
  payload?: RunKeywordsExtractionGenerationResponseBodyPayload;
  /**
   * @example
   * 419F3FBE-5C8D-5949-AC29-E9615235D15A
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
      header: RunKeywordsExtractionGenerationResponseBodyHeader,
      payload: RunKeywordsExtractionGenerationResponseBodyPayload,
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

