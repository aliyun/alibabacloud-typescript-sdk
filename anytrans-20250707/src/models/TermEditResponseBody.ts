// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TermEditResponseBodyDataTerms extends $dara.Model {
  /**
   * @remarks
   * The source text.
   * 
   * @example
   * 大模型
   */
  src?: string;
  /**
   * @remarks
   * The term ID.
   * 
   * @example
   * 92669964
   */
  termId?: string;
  /**
   * @remarks
   * The target text.
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

export class TermEditResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of items that failed to be processed.
   * 
   * @example
   * 0
   */
  failCount?: number;
  /**
   * @remarks
   * An array of intervention term objects.
   */
  terms?: TermEditResponseBodyDataTerms[];
  static names(): { [key: string]: string } {
    return {
      failCount: 'failCount',
      terms: 'terms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      terms: { 'type': 'array', 'itemType': TermEditResponseBodyDataTerms },
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

export class TermEditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: TermEditResponseBodyData;
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
   * The message.
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
   * 1DCD50EC-D218-1844-9CD8-E97CAB9D31BE
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
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
      data: TermEditResponseBodyData,
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

