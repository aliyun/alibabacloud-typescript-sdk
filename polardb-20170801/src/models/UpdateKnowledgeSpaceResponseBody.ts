// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKnowledgeSpaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the knowledge space.
   * 
   * @example
   * pks-xxxxxx
   */
  knowledgeSpaceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the asynchronous workflow task. This value is empty if no actual model change occurs.
   * 
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

