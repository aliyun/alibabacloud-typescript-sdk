// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChatappTemplateResponseBodyListTemplate extends $dara.Model {
  /**
   * @remarks
   * The review status. Valid values:
   * 
   * - **pass**: Approved.
   * 
   * - **fail**: Rejected.
   * 
   * - **auditing**: Under review.
   * 
   * - **unaudit**: Review paused.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The categorization of the WhatsApp template. Valid values:
   * 
   * - **UTILITY**: Transactional.
   * 
   * - **MARKETING**: Marketing.
   * 
   * - **AUTHENTICATION**: authenticate.
   * 
   * The categorization of Viber templates. Valid values:
   * 
   * - **UTILITY**: Transactional.
   * 
   * - **MARKETING**: Marketing.
   * 
   * - **AUTHENTICATION**: authenticate.
   * 
   * @example
   * UTILITY
   */
  category?: string;
  /**
   * @remarks
   * The language of the template. For more information about language codes, see [Language codes](https://help.aliyun.com/document_detail/463420.html).
   * 
   * @example
   * en
   */
  language?: string;
  /**
   * @remarks
   * The last modification time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1711006633000
   */
  lastUpdateTime?: number;
  /**
   * @remarks
   * The reason why the template was rejected.
   * 
   * @example
   * None
   */
  reason?: string;
  /**
   * @remarks
   * The code of the template.
   * 
   * @example
   * 744c4b5c79c9432497a075bdfca3****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * hello_whatsapp
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype. Valid values: WHATSAPP and VIBER.
   * 
   * @example
   * WHATSAPP
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      category: 'Category',
      language: 'Language',
      lastUpdateTime: 'LastUpdateTime',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      category: 'string',
      language: 'string',
      lastUpdateTime: 'number',
      reason: 'string',
      templateCode: 'string',
      templateName: 'string',
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

export class ListChatappTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list data.
   */
  listTemplate?: ListChatappTemplateResponseBodyListTemplate[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      listTemplate: 'ListTemplate',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      listTemplate: { 'type': 'array', 'itemType': ListChatappTemplateResponseBodyListTemplate },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.listTemplate)) {
      $dara.Model.validateArray(this.listTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

