// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TermQueryResponseBodyDataTerms extends $dara.Model {
  src?: string;
  /**
   * @example
   * 92669963
   */
  termId?: string;
  /**
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
   * @example
   * 0
   */
  failCount?: number;
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
   * @example
   * "success"
   */
  code?: string;
  data?: TermQueryResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * "success"
   */
  message?: string;
  /**
   * @example
   * C3C70C8F-E026-17D8-854E-7F8EF2F5C909
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

