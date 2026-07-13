// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigEnableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh-CN**: Chinese.
   * 
   * - **en-US** (default): English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. The token must be unique among different requests and can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the domain name instance configuration. For the same access domain name and GTM instance, you can configure both A and AAAA records. This results in two domain name instance configurations for the GTM instance. The ConfigId uniquely identifies a specific configuration.
   * 
   * Call the [ListCloudGtmInstanceConfigs](https://help.aliyun.com/document_detail/2797349.html) operation to query the ConfigId of a domain name instance.
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @remarks
   * The enablement status of the domain name instance. Valid values:
   * 
   * - enable: Enables the domain name instance.
   * 
   * - disable: Disables the domain name instance.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance that you want to modify.
   * 
   * @example
   * gtm-cn-wwo3a3h****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      enableStatus: 'EnableStatus',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      configId: 'string',
      enableStatus: 'string',
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

