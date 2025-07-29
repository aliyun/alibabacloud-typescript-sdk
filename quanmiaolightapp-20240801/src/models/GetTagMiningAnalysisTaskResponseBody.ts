// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTagMiningAnalysisTaskResponseBodyDataResultsHeader extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  errorCode?: string;
  errorMessage?: string;
  /**
   * @example
   * task-finished
   */
  event?: string;
  /**
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput extends $dara.Model {
  /**
   * @example
   * xxxx
   */
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

export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage extends $dara.Model {
  /**
   * @example
   * 100
   */
  inputToken?: number;
  /**
   * @example
   * 200
   */
  outputToken?: number;
  /**
   * @example
   * 300
   */
  totalToken?: number;
  static names(): { [key: string]: string } {
    return {
      inputToken: 'inputToken',
      outputToken: 'outputToken',
      totalToken: 'totalToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'number',
      outputToken: 'number',
      totalToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBodyDataResultsPayload extends $dara.Model {
  output?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput;
  usage?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage;
  static names(): { [key: string]: string } {
    return {
      output: 'output',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadOutput,
      usage: GetTagMiningAnalysisTaskResponseBodyDataResultsPayloadUsage,
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

export class GetTagMiningAnalysisTaskResponseBodyDataResults extends $dara.Model {
  /**
   * @example
   * 1
   */
  customId?: string;
  header?: GetTagMiningAnalysisTaskResponseBodyDataResultsHeader;
  payload?: GetTagMiningAnalysisTaskResponseBodyDataResultsPayload;
  static names(): { [key: string]: string } {
    return {
      customId: 'customId',
      header: 'header',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      header: GetTagMiningAnalysisTaskResponseBodyDataResultsHeader,
      payload: GetTagMiningAnalysisTaskResponseBodyDataResultsPayload,
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

export class GetTagMiningAnalysisTaskResponseBodyData extends $dara.Model {
  errorCode?: string;
  errorMessage?: string;
  results?: GetTagMiningAnalysisTaskResponseBodyDataResults[];
  /**
   * @example
   * RUNNIN
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      results: 'results',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      results: { 'type': 'array', 'itemType': GetTagMiningAnalysisTaskResponseBodyDataResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTagMiningAnalysisTaskResponseBody extends $dara.Model {
  /**
   * @example
   * successful
   */
  code?: string;
  data?: GetTagMiningAnalysisTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * DataNotExists
   */
  message?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 085BE2D2-BB7E-59A6-B688-F2CB32124E7F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTagMiningAnalysisTaskResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

