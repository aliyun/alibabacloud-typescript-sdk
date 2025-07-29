// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunEnterpriseVocAnalysisResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbidden
   */
  errorCode?: string;
  /**
   * @example
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * xxxx
   */
  sessionId?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  /**
   * @example
   * xxxxx
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
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

export class RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults extends $dara.Model {
  /**
   * @example
   * true
   */
  hit?: boolean;
  tagName?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      hit: 'hit',
      tagName: 'tagName',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hit: 'boolean',
      tagName: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult extends $dara.Model {
  filterResults?: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults[];
  static names(): { [key: string]: string } {
    return {
      filterResults: 'filterResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterResults: { 'type': 'array', 'itemType': RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResultFilterResults },
    };
  }

  validate() {
    if(Array.isArray(this.filterResults)) {
      $dara.Model.validateArray(this.filterResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayloadOutput extends $dara.Model {
  filterResult?: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult;
  reasonContent?: string;
  text?: string;
  static names(): { [key: string]: string } {
    return {
      filterResult: 'filterResult',
      reasonContent: 'reasonContent',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterResult: RunEnterpriseVocAnalysisResponseBodyPayloadOutputFilterResult,
      reasonContent: 'string',
      text: 'string',
    };
  }

  validate() {
    if(this.filterResult && typeof (this.filterResult as any).validate === 'function') {
      (this.filterResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunEnterpriseVocAnalysisResponseBodyPayloadUsage extends $dara.Model {
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

export class RunEnterpriseVocAnalysisResponseBodyPayload extends $dara.Model {
  output?: RunEnterpriseVocAnalysisResponseBodyPayloadOutput;
  usage?: RunEnterpriseVocAnalysisResponseBodyPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: RunEnterpriseVocAnalysisResponseBodyPayloadOutput,
      usage: RunEnterpriseVocAnalysisResponseBodyPayloadUsage,
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

export class RunEnterpriseVocAnalysisResponseBody extends $dara.Model {
  header?: RunEnterpriseVocAnalysisResponseBodyHeader;
  payload?: RunEnterpriseVocAnalysisResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 49483FFC-0CB9-5163-8D3E-234E276E6DA8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunEnterpriseVocAnalysisResponseBodyHeader,
      payload: RunEnterpriseVocAnalysisResponseBodyPayload,
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

