// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The template code.
   * 
   * - The template code is returned in the response of the [AddSmsTemplate](https://help.aliyun.com/document_detail/121208.html) API.
   * 
   * - The template code is available on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * 
   * This parameter is required.
   * 
   * @example
   * SMS_1525****
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

