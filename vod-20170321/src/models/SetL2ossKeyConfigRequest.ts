// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetL2OssKeyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  privateOssAuth?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  resourceRealOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateOssAuth: 'PrivateOssAuth',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      privateOssAuth: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

