// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudQueryAgentCnoAndNameRequest extends $dara.Model {
  /**
   * @remarks
   * 座席号之间用,分隔 例cnos=2000,20001 最多支持1000个座席
   * 
   * @example
   * 2000,20001
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

