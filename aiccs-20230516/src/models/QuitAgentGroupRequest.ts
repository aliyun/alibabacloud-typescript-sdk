// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuitAgentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席组ID
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  agentGroupId?: number;
  /**
   * @remarks
   * 坐席ID列表
   * 
   * This parameter is required.
   */
  agentIds?: number[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentGroupId: 'AgentGroupId',
      agentIds: 'AgentIds',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroupId: 'number',
      agentIds: { 'type': 'array', 'itemType': 'number' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

