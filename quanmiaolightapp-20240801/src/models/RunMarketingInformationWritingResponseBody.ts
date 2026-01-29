// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMarketingInformationWritingResponseBodyHeader extends $dara.Model {
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 436BC5AE-0573-59D8-9803-6B5FDCD3BBA1
   */
  requestId?: string;
  /**
   * @example
   * uqubxgqzlnf4exfektij032lgb3yvix678p232n56387aqxdo4uutdt9wstqzovvz6j3ho7wnbgye785u79yn5q3euqmsvzmqdn3nmfq2826oscjvsi43kof8b8uxufpp1x97jjukk6jd3183hy8ni6hqpskuhuascpd
   */
  sessionId?: string;
  /**
   * @example
   * 13312125943232
   */
  taskId?: string;
  /**
   * @example
   * 213e20e517049392478441155e8b2a
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
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

export class RunMarketingInformationWritingResponseBodyPayloadOutput extends $dara.Model {
  /**
   * @example
   * 推理内容
   */
  reasonContent?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      reasonContent: 'reasonContent',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonContent: 'string',
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

export class RunMarketingInformationWritingResponseBodyPayloadUsage extends $dara.Model {
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

export class RunMarketingInformationWritingResponseBodyPayload extends $dara.Model {
  output?: RunMarketingInformationWritingResponseBodyPayloadOutput;
  usage?: RunMarketingInformationWritingResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunMarketingInformationWritingResponseBodyPayloadOutput,
      usage: RunMarketingInformationWritingResponseBodyPayloadUsage,
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

export class RunMarketingInformationWritingResponseBody extends $dara.Model {
  /**
   * @example
   * 2024-06-21T10:29:52+08:00
   */
  end?: boolean;
  header?: RunMarketingInformationWritingResponseBodyHeader;
  payload?: RunMarketingInformationWritingResponseBodyPayload;
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
      header: RunMarketingInformationWritingResponseBodyHeader,
      payload: RunMarketingInformationWritingResponseBodyPayload,
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

