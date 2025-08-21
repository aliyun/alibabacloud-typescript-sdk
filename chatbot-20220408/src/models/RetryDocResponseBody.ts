// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryDocResponseBody extends $dara.Model {
  /**
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6419BA93-D111-5225-8998-13E63E6D3940
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeId: 'KnowledgeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeId: 'number',
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

