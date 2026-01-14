// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddAgentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席组名称，不能为空且最大长度为20个字符
   * 
   * This parameter is required.
   * 
   * @example
   * abc
   */
  agentGroupName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentGroupName: 'AgentGroupName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroupName: 'string',
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

