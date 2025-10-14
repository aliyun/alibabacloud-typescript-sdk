// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmInstanceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US: English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @example
   * postpay/prepay
   */
  chargeType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The enabling state of the access domain name. Valid values:
   * 
   * *   enable: The access domain name is enabled and the intelligent scheduling policy of the corresponding GTM instance takes effect.
   * *   disable: The access domain name is disabled and the intelligent scheduling policy of the corresponding GTM instance is unavailable.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance. This ID uniquely identifies a GTM 3.0 instance.
   * 
   * @example
   * gtm-cn-jmp3qnw**03
   */
  instanceId?: string;
  /**
   * @remarks
   * The description of the access domain name.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The hostname of the access domain name.
   * 
   * @example
   * www
   */
  scheduleHostname?: string;
  /**
   * @remarks
   * The type of the Domain Name System (DNS) record configured for the access domain name. Valid values:
   * 
   * *   A: IPv4 address
   * *   AAAA: IPv6 address
   * *   CNAME: domain name
   * 
   * @example
   * A
   */
  scheduleRrType?: string;
  /**
   * @remarks
   * The configuration mode of the access domain name. Valid values:
   * 
   * *   sys_assign: system allocation. This mode is not supported.
   * *   custom: custom allocation. You must select a zone within the account to which the instance belongs and enter a hostname to generate an access domain name.
   * 
   * @example
   * custom
   */
  scheduleZoneMode?: string;
  /**
   * @remarks
   * The name of the parent zone for the access domain name configured in GTM. In most cases, the value of this parameter is the name of a zone hosted by Alibaba Cloud DNS. This zone belongs to the account to which the GTM instance belongs. You can specify the name of a zone or subzone.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  /**
   * @remarks
   * The global time to live (TTL) period. Unit: seconds. The global TTL period affects how long the DNS records that map the access domain name to the addresses in the address pools are cached in the local DNS servers of Internet service providers (ISPs). You can specify a custom value.
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

