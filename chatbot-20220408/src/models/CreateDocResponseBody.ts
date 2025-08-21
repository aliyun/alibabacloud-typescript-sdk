// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocResponseBody extends $dara.Model {
  /**
   * @example
   * 30001905617
   */
  knowledgeId?: number;
  /**
   * @example
   * 07B270A4-61D8-57F6-A609-A3C216CFB872
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

