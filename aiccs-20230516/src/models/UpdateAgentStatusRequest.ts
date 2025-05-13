// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAgentStatusRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 58
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席状态 1:在线；2:忙碌；3:小休；4:离线
   * 
   * @example
   * 1
   */
  agentStatus?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * abac
   */
  agentTag?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentStatus: 'AgentStatus',
      agentTag: 'AgentTag',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
      agentStatus: 'number',
      agentTag: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

