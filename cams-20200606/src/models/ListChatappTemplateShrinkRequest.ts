// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappTemplateShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The audit status. Valid values:
   * 
   * - **pass**: Approved.
   * 
   * - **fail**: Rejected.
   * 
   * - **auditing**: Under review.
   * 
   * - **unaudit**: Review suspended.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The template category.
   * 
   * @example
   * AUTHENTICATION
   */
  category?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * 838888822*****
   */
  code?: string;
  /**
   * @remarks
   * The SpaceId of the ISV sub-customer or the instance ID of the direct customer.
   * 
   * @example
   * 28251486512358****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The WabaId of the ISV customer.
   * 
   * > This parameter is deprecated. Use CustSpaceId instead.
   * 
   * @example
   * 65921621816****
   * 
   * @deprecated
   */
  custWabaId?: string;
  /**
   * @remarks
   * The ISV verification code, used to verify whether a sub-account is authorized by the ISV.
   * 
   * @example
   * skdi3kksloslikdkkdk
   */
  isvCode?: string;
  /**
   * @remarks
   * The template language. For language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The template name.
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
   * The templatetype. Valid values:
   * 
   * - **WHATSAPP**
   * 
   * - **VIBER**
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

