// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSpaceResponseBody extends $dara.Model {
  /**
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @example
   * 52*****03
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeSpaceId: 'KnowledgeSpaceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeSpaceId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

