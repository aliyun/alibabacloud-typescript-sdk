// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDRMCertInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  certId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceRealOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      certId: 'CertId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

