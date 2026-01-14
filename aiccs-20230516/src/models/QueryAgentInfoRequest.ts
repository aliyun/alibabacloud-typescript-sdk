// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAgentInfoRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席ID
   * 
   * @example
   * 1
   */
  agentId?: number;
  /**
   * @remarks
   * 坐席标签
   * 
   * @example
   * "1"
   */
  agentTag?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentTag: 'AgentTag',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'number',
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

