// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The review status of the message template. Valid values:
   * 
   * *   **pass**: The message template is approved.
   * *   **fail**: The message template is rejected.
   * *   **auditing**: The message template is being reviewed.
   * *   **unaudit**: The review is suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @example
   * AUTHENTICATION
   */
  category?: string;
  /**
   * @remarks
   * Template encoding.
   * 
   * @example
   * 838888822*****
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the user under the ISV account.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WhatsApp Business account (WABA) ID of the user within the independent software vendor (ISV) account.
   * 
   * >  CustWabaId is an obsolete parameter. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The independent software vendor (ISV) verification code, which is used to verify whether the user is authorized by the ISV account.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The language that is used in the message template. For more information, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * hello_whatsapp
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The pagination settings.
   * 
   * @example
   * "page": "{\\"index\\": 1,\\"size\\": 20}
   */
  pageShrink?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the message template.
   * 
   * *   **WHATSAPP**
   * *   **VIBER**
   * *   LINE: the Line message template. This type of message template will be released later.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      category: 'Category',
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      custWabaId: 'CustWabaId',
      isvCode: 'IsvCode',
      language: 'Language',
      name: 'Name',
      ownerId: 'OwnerId',
      pageShrink: 'Page',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      category: 'string',
      code: 'string',
      custSpaceId: 'string',
      custWabaId: 'string',
      isvCode: 'string',
      language: 'string',
      name: 'string',
      ownerId: 'number',
      pageShrink: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

