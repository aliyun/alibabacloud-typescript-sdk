// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * assistantId1
   */
  assistantId?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * assistantId
   */
  originalAssistantid?: string;
  /**
   * @example
   * runId123
   */
  runId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * threadId123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      assistantId: 'assistantId',
      limit: 'limit',
      order: 'order',
      originalAssistantid: 'originalAssistantid',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      limit: 'number',
      order: 'string',
      originalAssistantid: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

