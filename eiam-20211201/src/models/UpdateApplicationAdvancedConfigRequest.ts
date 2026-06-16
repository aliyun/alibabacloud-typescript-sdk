// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationAdvancedConfigRequestScimServerAdvancedConfig extends $dara.Model {
  /**
   * @remarks
   * A list of IDs of supported custom user fields.
   */
  supportedUserCustomFieldIds?: string[];
  /**
   * @remarks
   * The namespace of the user extension fields.
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
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The advanced configuration of the SCIM server.
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

