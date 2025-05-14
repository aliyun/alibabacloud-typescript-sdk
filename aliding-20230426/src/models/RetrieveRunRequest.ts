// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRunRequest extends $dara.Model {
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
   * assistantId
   */
  originalAssistantId?: string;
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
      originalAssistantId: 'originalAssistantId',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistantId: 'string',
      originalAssistantId: 'string',
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

