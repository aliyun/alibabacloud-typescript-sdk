// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @example
   * pkb-xxxxx
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * EB07CFF0-D8A4-5C76-AED7-D00E26FC2***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseId: 'KnowledgeBaseId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseId: 'string',
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

