// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * This parameter is required.
   * 
   * @example
   * Ram Account SSO
   */
  applicationName?: string;
  applicationVisibility?: string[];
  /**
   * @example
   * client-token-example
   */
  clientToken?: string;
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
      applicationVisibility: 'ApplicationVisibility',
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      logoUrl: 'LogoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      applicationVisibility: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      instanceId: 'string',
      logoUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationVisibility)) {
      $dara.Model.validateArray(this.applicationVisibility);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

