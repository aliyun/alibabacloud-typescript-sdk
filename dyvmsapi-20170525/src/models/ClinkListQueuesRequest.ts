// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkListQueuesRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 8004970
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 查询记录条数，默认只为 10，最大范围100
   * 
   * @example
   * 33
   */
  limit?: number;
  /**
   * @remarks
   * 偏移量，默认值为 0，最大范围10000
   * 
   * @example
   * 0
   */
  offset?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      limit: 'Limit',
      offset: 'Offset',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      limit: 'number',
      offset: 'number',
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

