// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationInfoRequestApplicationOwner extends $dara.Model {
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

export class UpdateApplicationInfoRequestCustomFields extends $dara.Model {
  fieldName?: string;
  fieldValue?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldName: 'string',
      fieldValue: 'string',
      operation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationInfoRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用主键id
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * 应用的表示名称
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  applicationOwner?: UpdateApplicationInfoRequestApplicationOwner;
  applicationVisibility?: string[];
  /**
   * @example
   * client-token-example
   */
  clientToken?: string;
  customFields?: UpdateApplicationInfoRequestCustomFields[];
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 应用Logo地址
   * 
   * @example
   * https://example.aliyuncs.com/logo.png
   */
  logoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      applicationOwner: 'ApplicationOwner',
      applicationVisibility: 'ApplicationVisibility',
      clientToken: 'ClientToken',
      customFields: 'CustomFields',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      applicationOwner: UpdateApplicationInfoRequestApplicationOwner,
      applicationVisibility: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      customFields: { 'type': 'array', 'itemType': UpdateApplicationInfoRequestCustomFields },
      instanceId: 'string',
      logoUrl: 'string',
    };
  }

  validate() {
    if(this.applicationOwner && typeof (this.applicationOwner as any).validate === 'function') {
      (this.applicationOwner as any).validate();
    }
    if(Array.isArray(this.applicationVisibility)) {
      $dara.Model.validateArray(this.applicationVisibility);
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

