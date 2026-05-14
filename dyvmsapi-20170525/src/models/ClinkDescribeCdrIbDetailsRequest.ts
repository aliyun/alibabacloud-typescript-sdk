// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkDescribeCdrIbDetailsRequest extends $dara.Model {
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
   * 通话记录唯一标识
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  mainUniqueId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      mainUniqueId: 'MainUniqueId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      mainUniqueId: 'string',
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

