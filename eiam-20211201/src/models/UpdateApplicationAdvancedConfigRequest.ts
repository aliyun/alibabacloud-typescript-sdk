// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationAdvancedConfigRequestScimServerAdvancedConfig extends $dara.Model {
  /**
   * @remarks
   * 支持的用户自定义字段ID列表。
   */
  supportedUserCustomFieldIds?: string[];
  /**
   * @remarks
   * 用户扩展字段的命名空间。
   * 
   * @example
   * urn:ietf:params:scim:schemas:extension:customfield:2.0:User
   */
  userCustomFieldNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      supportedUserCustomFieldIds: 'SupportedUserCustomFieldIds',
      userCustomFieldNamespace: 'UserCustomFieldNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedUserCustomFieldIds: { 'type': 'array', 'itemType': 'string' },
      userCustomFieldNamespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedUserCustomFieldIds)) {
      $dara.Model.validateArray(this.supportedUserCustomFieldIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationAdvancedConfigRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用资源ID。
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Scim Server 高阶配置
   */
  scimServerAdvancedConfig?: UpdateApplicationAdvancedConfigRequestScimServerAdvancedConfig;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      scimServerAdvancedConfig: 'ScimServerAdvancedConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      scimServerAdvancedConfig: UpdateApplicationAdvancedConfigRequestScimServerAdvancedConfig,
    };
  }

  validate() {
    if(this.scimServerAdvancedConfig && typeof (this.scimServerAdvancedConfig as any).validate === 'function') {
      (this.scimServerAdvancedConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

