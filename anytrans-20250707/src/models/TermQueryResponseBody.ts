// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TermQueryResponseBodyDataTerms extends $dara.Model {
  /**
   * @remarks
   * The term in the source language.
   * 
   * @example
   * 大模型
   */
  src?: string;
  /**
   * @remarks
   * The ID of the intervention term.
   * 
   * @example
   * 92669963
   */
  termId?: string;
  /**
   * @remarks
   * The translated term in the target language.
   * 
   * @example
   * LLM
   */
  tgt?: string;
  static names(): { [key: string]: string } {
    return {
      src: 'src',
      termId: 'termId',
      tgt: 'tgt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      src: 'string',
      termId: 'string',
      tgt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TermQueryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of items that failed processing.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * A list of identified intervention terms.
   */
  terms?: TermQueryResponseBodyDataTerms[];
  static names(): { [key: string]: string } {
    return {
      failCount: 'failCount',
      terms: 'terms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      terms: { 'type': 'array', 'itemType': TermQueryResponseBodyDataTerms },
    };
  }

  validate() {
    if(Array.isArray(this.terms)) {
      $dara.Model.validateArray(this.terms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TermQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: TermQueryResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3C70C8F-E026-17D8-854E-7F8EF2F5C909
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the API call succeeded.
   * 
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
      data: TermQueryResponseBodyData,
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

