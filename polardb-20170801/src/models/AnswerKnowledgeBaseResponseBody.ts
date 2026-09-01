// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AnswerKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @example
   * R3BGbnBqcXN******.2a5a23c9-******-179970533d30
   */
  queryId?: string;
  /**
   * @example
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
   */
  requestId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'QueryId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

