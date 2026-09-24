// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageQueryAgentListRequest extends $dara.Model {
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * 1231*******
   */
  agentId?: string;
  /**
   * @remarks
   * The agent name.
   * 
   * @example
   * TestAgent
   */
  agentName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number, starting from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The agent status.
   * 
   * @example
   * 7
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      agentId: 'AgentId',
      agentName: 'AgentName',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentName: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

