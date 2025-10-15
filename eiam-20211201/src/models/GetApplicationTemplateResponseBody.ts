// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationTemplateResponseBodyApplicationTemplateSaleInfo extends $dara.Model {
  /**
   * @remarks
   * 是否永久免费
   * 
   * @example
   * true
   */
  alwaysFree?: boolean;
  static names(): { [key: string]: string } {
    return {
      alwaysFree: 'AlwaysFree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysFree: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationTemplateResponseBodyApplicationTemplate extends $dara.Model {
  /**
   * @remarks
   * 应用模板Id
   * 
   * @example
   * apt_ramintlrole_ixxxxx
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * 应用模板名称
   */
  applicationTemplateName?: string;
  /**
   * @remarks
   * 应用模板创建时间
   * 
   * @example
   * 1730341123000
   */
  createTime?: number;
  /**
   * @remarks
   * 应用模板描述信息
   */
  description?: string;
  /**
   * @remarks
   * 应用模板对应帮助文档地址
   * 
   * @example
   * https://example.com/document_detail/409xxx.html
   */
  helpDocumentUrl?: string;
  /**
   * @remarks
   * 应用模板Logo地址
   * 
   * @example
   * https://example.com/imgextra/i4/O1CN01xTLxLb1WtyKksHW1H_!!6000000002847-2-tps-xxx-xxx.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * 托管应用模板的云产品ServiceCode。当且仅当ServiceManaged为true是返回。
   * 
   * @example
   * bastionhost
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * 应用模板售卖信息
   */
  saleInfo?: GetApplicationTemplateResponseBodyApplicationTemplateSaleInfo;
  /**
   * @remarks
   * 托管应用模板的云产品控制台地址。当且仅当ServiceManaged为true是返回。
   * 
   * @example
   * https://example.com/?p=bastion
   */
  serviceConsoleUrl?: string;
  /**
   * @remarks
   * 应用模板是否被云产品托管。
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * 支持SSO协议
   */
  ssoTypes?: string[];
  /**
   * @remarks
   * 应用模板更新时间
   * 
   * @example
   * 1730341124000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
      applicationTemplateName: 'ApplicationTemplateName',
      createTime: 'CreateTime',
      description: 'Description',
      helpDocumentUrl: 'HelpDocumentUrl',
      logoUrl: 'LogoUrl',
      managedServiceCode: 'ManagedServiceCode',
      saleInfo: 'SaleInfo',
      serviceConsoleUrl: 'ServiceConsoleUrl',
      serviceManaged: 'ServiceManaged',
      ssoTypes: 'SsoTypes',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
      applicationTemplateName: 'string',
      createTime: 'number',
      description: 'string',
      helpDocumentUrl: 'string',
      logoUrl: 'string',
      managedServiceCode: 'string',
      saleInfo: GetApplicationTemplateResponseBodyApplicationTemplateSaleInfo,
      serviceConsoleUrl: 'string',
      serviceManaged: 'boolean',
      ssoTypes: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'number',
    };
  }

  validate() {
    if(this.saleInfo && typeof (this.saleInfo as any).validate === 'function') {
      (this.saleInfo as any).validate();
    }
    if(Array.isArray(this.ssoTypes)) {
      $dara.Model.validateArray(this.ssoTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApplicationTemplateResponseBody extends $dara.Model {
  applicationTemplate?: GetApplicationTemplateResponseBodyApplicationTemplate;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationTemplate: 'ApplicationTemplate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplate: GetApplicationTemplateResponseBodyApplicationTemplate,
      requestId: 'string',
    };
  }

  validate() {
    if(this.applicationTemplate && typeof (this.applicationTemplate as any).validate === 'function') {
      (this.applicationTemplate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

