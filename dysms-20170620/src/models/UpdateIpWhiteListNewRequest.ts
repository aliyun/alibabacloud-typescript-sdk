// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIpWhiteListNewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  featureCode?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  ipWhiteList?: string;
  ownerId?: number;
  prodCode?: string;
  realNameInsId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      featureCode: 'FeatureCode',
      ipWhiteList: 'IpWhiteList',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      realNameInsId: 'RealNameInsId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureCode: 'number',
      ipWhiteList: 'string',
      ownerId: 'number',
      prodCode: 'string',
      realNameInsId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

