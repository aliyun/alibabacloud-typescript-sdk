// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigBasicRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh-CN**: Chinese.
   * 
   * - **en-US** (default): English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * A client-generated token that you can use to ensure the idempotence of the request. Make sure that the token is unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the domain name instance configuration. For the same access domain name and GTM instance, you can configure both A and AAAA records. This results in two domain name instance configurations for the same GTM instance. The ConfigId uniquely identifies the configuration object that you want to modify.
   * 
   * Call the [ListCloudGtmInstanceConfigs](~~ListCloudGtmInstanceConfigs~~) operation to query the ConfigId of a domain name instance.
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance that you want to modify.
   * 
   * @example
   * gtm-cn-wwo3a3h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The host record of the GTM access domain name.
   * 
   * @example
   * www
   */
  scheduleHostname?: string;
  /**
   * @remarks
   * The root domain (such as example.com) or subdomain (such as a.example.com) of the GTM access domain name. This is usually a domain name that is hosted in the authoritative zone of the Alibaba Cloud DNS console under the account that owns the GTM instance.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  /**
   * @remarks
   * The global Time to Live (TTL) in seconds. This is the TTL for the DNS record that resolves the access domain name to an address in an address pool. The TTL affects how long the DNS record is cached on a carrier\\"s Local DNS server.
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      scheduleHostname: 'ScheduleHostname',
      scheduleZoneName: 'ScheduleZoneName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
      scheduleHostname: 'string',
      scheduleZoneName: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

