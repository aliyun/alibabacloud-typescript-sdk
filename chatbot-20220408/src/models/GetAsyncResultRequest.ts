// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncResultRequest extends $dara.Model {
  /**
   * @remarks
   * The workspace key. If not specified, the default workspace is accessed. Obtain the key value from the business management page of the Alibaba Cloud account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The task ID of the asynchronous service.
   * 
   * This parameter is required.
   * 
   * @example
   * Obtain TASK_ID from the Chat operation
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

