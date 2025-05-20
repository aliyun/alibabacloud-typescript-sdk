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

