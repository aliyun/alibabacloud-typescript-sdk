// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentGroupPageRequest extends $dara.Model {
  /**
   * @remarks
   * 坐席组ID
   * 
   * @example
   * 1
   */
  agentGroupId?: number;
  ownerId?: number;
  /**
   * @remarks
   * 当前页
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * 分页数量
   * 
   * @example
   * 1
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      agentGroupId: 'AgentGroupId',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentGroupId: 'number',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
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

