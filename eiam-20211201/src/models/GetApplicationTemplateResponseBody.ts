// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApplicationTemplateResponseBodyApplicationTemplateSaleInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the application template is permanently free.
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
   * The ID of the application template.
   * 
   * @example
   * apt_ramintlrole_ixxxxx
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The name of the application template.
   * 
   * @example
   * Alibaba Cloud
   */
  applicationTemplateName?: string;
  /**
   * @remarks
   * The time when the application template was created.
   * 
   * @example
   * 1730341123000
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the application template.
   * 
   * @example
   * Alibaba Cloud SSO
   */
  description?: string;
  /**
   * @remarks
   * The URL of the help document for the application template.
   * 
   * @example
   * https://example.com/document_detail/409xxx.html
   */
  helpDocumentUrl?: string;
  /**
   * @remarks
   * The URL of the logo for the application template.
   * 
   * @example
   * https://example.com/imgextra/i4/O1CN01xTLxLb1WtyKksHW1H_!!6000000002847-2-tps-xxx-xxx.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * The service code of the Alibaba Cloud service that manages the application template.
   * 
   * @example
   * bastionhost
   */
  managedServiceCode?: string;
  /**
   * @remarks
   * The sales information about the application template.
   */
  saleInfo?: GetApplicationTemplateResponseBodyApplicationTemplateSaleInfo;
  /**
   * @remarks
   * The URL of the console for the Alibaba Cloud service that manages the application template.
   * 
   * @example
   * https://example.com/?p=bastion
   */
  serviceConsoleUrl?: string;
  /**
   * @remarks
   * Indicates whether the application template is managed by an Alibaba Cloud service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The supported Single Sign-On (SSO) protocols.
   */
  ssoTypes?: string[];
  /**
   * @remarks
   * The time when the application template was last updated.
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
  /**
   * @remarks
   * The details of the application template.
   */
  applicationTemplate?: GetApplicationTemplateResponseBodyApplicationTemplate;
  /**
   * @remarks
   * The request ID.
   * 
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

