// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskCallChatsRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 72
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * AA
   */
  agentTag?: string;
  /**
   * @remarks
   * 外呼ID
   * 
   * This parameter is required.
   * 
   * @example
   * 9b2eb6b8-7a27-4357-b5ec-104450086e24
   */
  callId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 任务ID
   * 
   * @example
   * 26
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      callId: 'CallId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentTag: 'string',
      callId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

