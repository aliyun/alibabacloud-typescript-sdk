// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinAgentGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席组ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  agentGroupId?: number;
  /**
   * @remarks
   * 坐席ID列表
   * 
   * This parameter is required.
   */
  agentIdsShrink?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentGroupId: 'AgentGroupId',
      agentIdsShrink: 'AgentIds',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroupId: 'number',
      agentIdsShrink: 'string',
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

