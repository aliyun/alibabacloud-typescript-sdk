// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsDetectTaskNewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  check?: boolean;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  signName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  smsContent?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateParam?: string;
  static names(): { [key: string]: string } {
    return {
      check: 'Check',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      smsContent: 'SmsContent',
      templateCode: 'TemplateCode',
      templateParam: 'TemplateParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      check: 'boolean',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      smsContent: 'string',
      templateCode: 'string',
      templateParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

