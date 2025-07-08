// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSmsTestRequest extends $dara.Model {
  ncToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  phoneNumber?: string;
  prodCode?: string;
  remoteIp?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sessionId?: string;
  sig?: string;
  signName?: string;
  templateCode?: string;
  templateParam?: string;
  testType?: string;
  static names(): { [key: string]: string } {
    return {
      ncToken: 'NcToken',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      prodCode: 'ProdCode',
      remoteIp: 'RemoteIp',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionId: 'SessionId',
      sig: 'Sig',
      signName: 'SignName',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
      testType: 'TestType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ncToken: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      prodCode: 'string',
      remoteIp: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionId: 'string',
      sig: 'string',
      signName: 'string',
      templateCode: 'string',
      templateParam: 'string',
      testType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

