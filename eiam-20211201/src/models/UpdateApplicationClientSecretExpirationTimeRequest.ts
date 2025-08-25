// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationClientSecretExpirationTimeRequest extends $dara.Model {
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
   * client secret的有效期时间，Unix时间戳格式，单位为毫秒
   * 
   * This parameter is required.
   * 
   * @example
   * 1735530123762
   */
  expirationTime?: number;
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
   * OIDC 场景下用于客户端身份验证的客户端密钥
   * 
   * This parameter is required.
   * 
   * @example
   * sct_11111
   */
  secretId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
      secretId: 'SecretId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      expirationTime: 'number',
      instanceId: 'string',
      secretId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

