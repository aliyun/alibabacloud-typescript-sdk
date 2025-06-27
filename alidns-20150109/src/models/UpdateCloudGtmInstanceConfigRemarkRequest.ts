// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigRemarkRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the returned results are displayed. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US** (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration ID of the access domain name. Two configuration IDs exist when the access domain name is bound to the same GTM instance but an A record and an AAAA record are configured for the access domain name. The configuration ID uniquely identifies a configuration.
   * 
   * You can call the [ListCloudGtmInstanceConfigs](~~ListCloudGtmInstanceConfigs~~) operation to query the configuration ID of the access domain name.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance for which you want to modify the description.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @example
   * API
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

