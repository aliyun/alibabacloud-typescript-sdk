// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequestApplicationOwner extends $dara.Model {
  groupIds?: string[];
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequestCustomFields extends $dara.Model {
  fieldName?: string;
  fieldValue?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The application identity type. Default value: application. Valid values:
   * - application: application.
   * - agent: agent.
   * 
   * @example
   * application
   */
  applicationIdentityType?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  applicationOwner?: CreateApplicationRequestApplicationOwner;
  /**
   * @remarks
   * The source from which the application is created. Valid values:
   * - urn:alibaba:idaas:app:source:template: application template.
   * - urn:alibaba:idaas:app:source:standard: standard protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * urn:alibaba:idaas:app:source:standard
   */
  applicationSourceType?: string;
  /**
   * @remarks
   * The application template ID. This parameter is required when ApplicationSourceType is set to urn:alibaba:idaas:app:source:template.
   * 
   * @example
   * apt_ramuser_mjqrsi
   */
  applicationTemplateId?: string;
  customFields?: CreateApplicationRequestCustomFields[];
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * RAM account SSO application
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk2676xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The URL of the application logo.
   * 
   * @example
   * https://oss.cn-hangzhou.aliyuncs.com/logo.png
   */
  logoUrl?: string;
  /**
   * @remarks
   * The single sign-on protocol. Valid values:
   * - saml2: SAML 2.0 protocol.
   * - oidc: OpenID Connect protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * saml2
   */
  ssoType?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIdentityType: 'ApplicationIdentityType',
      applicationName: 'ApplicationName',
      applicationOwner: 'ApplicationOwner',
      applicationSourceType: 'ApplicationSourceType',
      applicationTemplateId: 'ApplicationTemplateId',
      customFields: 'CustomFields',
      description: 'Description',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
      ssoType: 'SsoType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIdentityType: 'string',
      applicationName: 'string',
      applicationOwner: CreateApplicationRequestApplicationOwner,
      applicationSourceType: 'string',
      applicationTemplateId: 'string',
      customFields: { 'type': 'array', 'itemType': CreateApplicationRequestCustomFields },
      description: 'string',
      instanceId: 'string',
      logoUrl: 'string',
      ssoType: 'string',
    };
  }

  validate() {
    if(this.applicationOwner && typeof (this.applicationOwner as any).validate === 'function') {
      (this.applicationOwner as any).validate();
    }
    if(Array.isArray(this.customFields)) {
      $dara.Model.validateArray(this.customFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

