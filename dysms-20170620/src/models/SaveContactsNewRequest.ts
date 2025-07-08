// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContactsNewRequest extends $dara.Model {
  email?: string;
  id?: number;
  name?: string;
  openPkgWarning?: number;
  openPreventBrushWarning?: number;
  openSendWarning?: number;
  ownerId?: number;
  phone?: string;
  prodCode?: string;
  receiveSignTemplateAuditResult?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  verificationCode?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      id: 'Id',
      name: 'Name',
      openPkgWarning: 'OpenPkgWarning',
      openPreventBrushWarning: 'OpenPreventBrushWarning',
      openSendWarning: 'OpenSendWarning',
      ownerId: 'OwnerId',
      phone: 'Phone',
      prodCode: 'ProdCode',
      receiveSignTemplateAuditResult: 'ReceiveSignTemplateAuditResult',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verificationCode: 'VerificationCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      id: 'number',
      name: 'string',
      openPkgWarning: 'number',
      openPreventBrushWarning: 'number',
      openSendWarning: 'number',
      ownerId: 'number',
      phone: 'string',
      prodCode: 'string',
      receiveSignTemplateAuditResult: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verificationCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

