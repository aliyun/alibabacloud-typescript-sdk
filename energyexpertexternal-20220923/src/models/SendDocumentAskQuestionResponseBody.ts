// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendDocumentAskQuestionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Q&A result
   * 
   * @example
   * Carbon emissions in 2023 totaled 4.681 million tons
   */
  answer?: string;
  /**
   * @remarks
   * Documents associated with the answer returned by the query
   */
  document?: string[];
  static names(): { [key: string]: string } {
    return {
      answer: 'answer',
      document: 'document',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      document: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.document)) {
      $dara.Model.validateArray(this.document);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendDocumentAskQuestionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Returned data
   */
  data?: SendDocumentAskQuestionResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SendDocumentAskQuestionResponseBodyData,
      requestId: 'string',
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

