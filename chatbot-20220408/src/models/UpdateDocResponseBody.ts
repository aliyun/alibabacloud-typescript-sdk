// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocResponseBody extends $dara.Model {
  /**
   * @example
   * 30002406051
   */
  knowledgeId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0F9F136A-1BF6-5CC1-9D57-9717761F03B8
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

