// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudBatchGetAgentStatusRequest extends $dara.Model {
  /**
   * @remarks
   * 座席号列表；座席号之间用`,`分隔，如：cnos=2000,20001 最多支持100个座席
   * 
   * This parameter is required.
   * 
   * @example
   * 2000,2001
   */
  cnos?: string;
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cnos: 'Cnos',
      enterpriseId: 'EnterpriseId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnos: 'string',
      enterpriseId: 'number',
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

