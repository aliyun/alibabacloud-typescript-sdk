// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenDocQaResultResponseBodyDataParseQaResults extends $dara.Model {
  /**
   * @remarks
   * The answer.
   * 
   * @example
   * 今天的天气不错，多云转晴。
   */
  answer?: string;
  /**
   * @remarks
   * The question.
   * 
   * @example
   * 今天的天气怎么样？
   */
  question?: string;
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      question: 'question',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      question: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenDocQaResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current status. Valid values: \\`INIT\\`, \\`PROCESSING\\`, \\`COMPLETED\\`, and \\`FAIL\\`.
   * 
   * @example
   * PROCESSING
   */
  currentStatus?: string;
  /**
   * @remarks
   * The document ID.
   * 
   * @example
   * 873648346573245
   */
  docId?: string;
  /**
   * @remarks
   * The document library ID.
   * 
   * @example
   * 7wxwrjpabj
   */
  libraryId?: string;
  /**
   * @remarks
   * The results of the Q\\&A pair parsing.
   */
  parseQaResults?: GenDocQaResultResponseBodyDataParseQaResults[];
  static names(): { [key: string]: string } {
    return {
      currentStatus: 'currentStatus',
      docId: 'docId',
      libraryId: 'libraryId',
      parseQaResults: 'parseQaResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStatus: 'string',
      docId: 'string',
      libraryId: 'string',
      parseQaResults: { 'type': 'array', 'itemType': GenDocQaResultResponseBodyDataParseQaResults },
    };
  }

  validate() {
    if(Array.isArray(this.parseQaResults)) {
      $dara.Model.validateArray(this.parseQaResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenDocQaResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time consumed.
   * 
   * @example
   * null
   */
  cost?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GenDocQaResultResponseBodyData;
  /**
   * @remarks
   * The data type.
   * 
   * @example
   * null
   */
  dataType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 44BD277A-87F9-5310-8D63-3E6645F1DA85
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The timestamp.
   * 
   * @example
   * 2024-04-24 11:54:34
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      data: 'data',
      dataType: 'dataType',
      errCode: 'errCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      data: GenDocQaResultResponseBodyData,
      dataType: 'string',
      errCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      time: 'string',
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

