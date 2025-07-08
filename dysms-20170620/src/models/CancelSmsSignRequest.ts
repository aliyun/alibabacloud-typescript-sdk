// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSmsSignRequest extends $dara.Model {
  orderId?: string;
  ownerId?: number;
  prodCode?: string;
  qualificationId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signatureCode?: string;
  signatureId?: number;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signatureCode: 'SignatureCode',
      signatureId: 'SignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
      ownerId: 'number',
      prodCode: 'string',
      qualificationId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signatureCode: 'string',
      signatureId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

