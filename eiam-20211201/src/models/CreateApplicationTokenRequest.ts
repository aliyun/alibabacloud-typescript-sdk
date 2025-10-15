// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationTokenRequest extends $dara.Model {
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
   * 应用token类型
   * 
   * This parameter is required.
   * 
   * @example
   * bearer_token
   */
  applicationTokenType?: string;
  /**
   * @remarks
   * 不填，默认1年后到期
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
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationTokenType: 'ApplicationTokenType',
      expirationTime: 'ExpirationTime',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationTokenType: 'string',
      expirationTime: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

