// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The code of the SMS template.
   * 
   * - Obtain the SMS template code from the response parameters of the [CreateSmsTemplate](https://help.aliyun.com/document_detail/2807431.html) operation.
   * - View the SMS template code on the [Templates](https://dysms.console.aliyun.com/domestic/text/template) page.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_20375****
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

