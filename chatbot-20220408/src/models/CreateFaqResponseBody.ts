// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFaqResponseBody extends $dara.Model {
  /**
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @example
   * 28805A7C-D695-548C-A31B-67E52C2C274F
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

