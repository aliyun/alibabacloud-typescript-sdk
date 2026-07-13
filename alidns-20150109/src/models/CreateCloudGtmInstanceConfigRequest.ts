// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US: English.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The billing method for the instance configuration:
   * 
   * - prepay: Subscription. This is the default value.
   * 
   * - postpay: Pay-as-you-go.
   * 
   * @example
   * postpay
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value, but you must make sure that the value is unique among different requests. The token can contain up to 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The status of the domain name instance:
   * 
   * - enable: Enabled. The intelligent scheduling policy of the GTM instance is active.
   * 
   * - disable: Disabled. The intelligent scheduling policy of the GTM instance is unavailable.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The unique ID of the GTM 3.0 instance.
   * 
   * @example
   * gtm-cn-jmp3qnw**03
   */
  instanceId?: string;
  /**
   * @remarks
   * The remark.
   * 
   * @example
   * test
   */
  remark?: string;
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
   * The DNS record type of the access domain name:
   * 
   * - A: IPv4 address
   * 
   * - AAAA: IPv6 address
   * 
   * - CNAME: Canonical name
   * 
   * @example
   * A
   */
  scheduleRrType?: string;
  /**
   * @remarks
   * The configuration mode for the access domain name:
   * 
   * - sys_assign: The system assigns a domain name. This mode is no longer supported.
   * 
   * - custom: Custom mode. Select a domain name under the account that owns the instance and enter a host record to generate the access domain name.
   * 
   * @example
   * custom
   */
  scheduleZoneMode?: string;
  /**
   * @remarks
   * The zone name, which is the parent zone of the GTM access domain name. This is typically a domain name hosted in the Alibaba Cloud DNS console under the account that owns the GTM instance. Primary domains and subdomains are supported.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  /**
   * @remarks
   * The global Time to Live (TTL) in seconds. This is the TTL for the access domain name that resolves to an address in an address pool. This value affects how long the DNS record is cached on a carrier\\"s local DNS server. You can specify a custom TTL.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      chargeType: 'ChargeType',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      instanceId: 'InstanceId',
      remark: 'Remark',
      scheduleHostname: 'ScheduleHostname',
      scheduleRrType: 'ScheduleRrType',
      scheduleZoneMode: 'ScheduleZoneMode',
      scheduleZoneName: 'ScheduleZoneName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      chargeType: 'string',
      clientToken: 'string',
      enableStatus: 'string',
      instanceId: 'string',
      remark: 'string',
      scheduleHostname: 'string',
      scheduleRrType: 'string',
      scheduleZoneMode: 'string',
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

