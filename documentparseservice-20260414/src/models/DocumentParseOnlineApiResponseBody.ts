// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DocumentParseOnlineApiResponseBodyDataUsage extends $dara.Model {
  /**
   * @example
   * 1000
   */
  inputTokens?: number;
  /**
   * @example
   * 2000
   */
  outputTokens?: number;
  /**
   * @example
   * 3000
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

export class DocumentParseOnlineApiResponseBodyData extends $dara.Model {
  /**
   * @example
   * [\\"LTAI5tQcqrTt1jrRbZf7mHFs\\"]
   */
  content?: string;
  /**
   * @example
   * BAA69D16-9453-5A8F-AE3C-498D956A0A73
   */
  requestId?: string;
  usage?: DocumentParseOnlineApiResponseBodyDataUsage;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      usage: 'Usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      usage: DocumentParseOnlineApiResponseBodyDataUsage,
    };
  }

  validate() {
    if(this.usage && typeof (this.usage as any).validate === 'function') {
      (this.usage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DocumentParseOnlineApiResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DocumentParseOnlineApiResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DocumentParseOnlineApiResponseBodyData,
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

