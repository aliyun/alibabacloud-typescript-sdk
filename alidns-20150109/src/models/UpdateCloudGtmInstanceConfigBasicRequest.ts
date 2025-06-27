// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigBasicRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
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
   * You can call the [ListCloudGtmInstanceConfigs](https://help.aliyun.com/document_detail/2797349.html) operation to query the value of ConfigId for the access domain name.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance for which you want to modify the TTL configuration.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * Host record of the domain accessed by GTM.
   * 
   * @example
   * www
   */
  scheduleHostname?: string;
  /**
   * @remarks
   * The zone (such as example.com) or subzone (such as a.example.com) of the GTM access domain name. In most cases, the zone or subzone is hosted in Authoritative DNS Resolution of the Alibaba Cloud DNS console within the account to which the GTM instance belongs.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  /**
   * @remarks
   * The global TTL value, in seconds. The global TTL value affects how long the DNS records that map the access domain name to the addresses in the address pools are cached in the local DNS servers of Internet service providers (ISPs).
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

