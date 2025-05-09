// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UsersDetailsVO extends $dara.Model {
  approvalSignatureBase64?: string;
  approvalSqlTemplate?: string;
  approvalStatus?: string;
  creator?: number;
  dataReady?: number;
  id?: number;
  mekid?: number;
  pathPrefix?: string;
  resultParty?: number;
  uid?: string;
  userConfirmed?: number;
  userName?: string;
  userPublicKeyPem?: string;
  static names(): { [key: string]: string } {
    return {
      approvalSignatureBase64: 'ApprovalSignatureBase64',
      approvalSqlTemplate: 'ApprovalSqlTemplate',
      approvalStatus: 'ApprovalStatus',
      creator: 'Creator',
      dataReady: 'DataReady',
      id: 'Id',
      mekid: 'Mekid',
      pathPrefix: 'PathPrefix',
      resultParty: 'ResultParty',
      uid: 'Uid',
      userConfirmed: 'UserConfirmed',
      userName: 'UserName',
      userPublicKeyPem: 'UserPublicKeyPem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalSignatureBase64: 'string',
      approvalSqlTemplate: 'string',
      approvalStatus: 'string',
      creator: 'number',
      dataReady: 'number',
      id: 'number',
      mekid: 'number',
      pathPrefix: 'string',
      resultParty: 'number',
      uid: 'string',
      userConfirmed: 'number',
      userName: 'string',
      userPublicKeyPem: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

