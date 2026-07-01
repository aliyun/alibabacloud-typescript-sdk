// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The SMS template code. You can delete SMS templates that are recalled, rejected, or approved. You cannot delete SMS templates that are being reviewed.
   * 
   * - You can call the [QuerySmsTemplateList](https://help.aliyun.com/document_detail/419288.html) operation to obtain the SMS template code.
   * 
   * - You can also obtain the SMS template code on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page of the Short Message Service (SMS) console.
   * >Notice: Deleted SMS templates cannot be recovered and cannot be used to send messages. Proceed with caution..
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_152550****
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

