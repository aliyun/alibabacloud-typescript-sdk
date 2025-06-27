// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCloudGtmInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
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
   * The configuration ID of the access domain name. Two configuration IDs exist when the access domain name is bound to the same GTM instance but an A record and an AAAA record are configured for the access domain name. The configuration ID uniquely identifies a configuration. You can call the [ListCloudGtmInstanceConfigs](~~ListCloudGtmInstanceConfigs~~) operation to query the configuration ID of the access domain name.
   * 
   * @example
   * config-000**1
   */
  configId?: string;
  /**
   * @remarks
   * The access domain name that is configured for the desired GTM 3.0 instance. You can delete only one access domain name.
   * 
   * @example
   * gtm-cn-jmp3qnw**03
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      configId: 'string',
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

