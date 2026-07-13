// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to send alerts through DingTalk. Valid values:
   * 
   * - true: yes
   * 
   * - false: no
   * 
   * @example
   * true
   */
  dingtalkNotice?: boolean;
  /**
   * @remarks
   * Specifies whether to send alerts by email. Valid values:
   * 
   * - true: yes
   * 
   * - false or null: no
   * 
   * @example
   * true
   */
  emailNotice?: boolean;
  /**
   * @remarks
   * The type of the alert event. Valid values:
   * 
   * - ADDR_ALERT: An address becomes unavailable.
   * 
   * - ADDR_RESUME: An address becomes available.
   * 
   * - ADDR_POOL_GROUP_UNAVAILABLE: An address pool group becomes unavailable.
   * 
   * - ADDR_POOL_GROUP_AVAILABLE: An address pool group becomes available.
   * 
   * - ACCESS_STRATEGY_POOL_GROUP_SWITCH: A switchover occurs between the primary and secondary address pools.
   * 
   * - MONITOR_NODE_IP_CHANGE: The IP address of a monitoring node changes.
   * 
   * @example
   * ADDR_ALERT
   */
  noticeType?: string;
  /**
   * @remarks
   * Specifies whether to send alerts through text messages. Valid values:
   * 
   * - true: yes
   * 
   * - false or null: no
   * 
   * @example
   * true
   */
  smsNotice?: boolean;
  static names(): { [key: string]: string } {
    return {
      dingtalkNotice: 'DingtalkNotice',
      emailNotice: 'EmailNotice',
      noticeType: 'NoticeType',
      smsNotice: 'SmsNotice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dingtalkNotice: 'boolean',
      emailNotice: 'boolean',
      noticeType: 'string',
      smsNotice: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDnsGtmInstanceGlobalConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The alert configurations.
   */
  alertConfig?: UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig[];
  /**
   * @remarks
   * The alert contact group. The value is a JSON-formatted \\`List\\<string>\\`.
   * 
   * @example
   * ["test1","test2"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The type of the CNAME record. Valid value:
   * 
   * - PUBLIC: The CNAME record is used for Internet access.
   * 
   * @example
   * PUBLIC
   */
  cnameType?: string;
  /**
   * @remarks
   * Specifies whether to forcefully update the instance. Valid values:
   * 
   * - true: Forcefully updates the instance without checking for conflicts.
   * 
   * - false or null: Does not forcefully update the instance. The system checks for conflicts before the update.
   * 
   * @example
   * true
   */
  forceUpdate?: boolean;
  /**
   * @remarks
   * The ID of the GTM instance. To obtain the instance ID, call the [DescribeDnsGtmInstances](https://www.alibabacloud.com/help/en/dns/api-alidns-2015-01-09-describednsgtminstances?spm=a2c63.p38356.help-menu-search-29697.d_0) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance. This parameter is required when you update the instance for the first time. It is optional for subsequent updates.
   * 
   * @example
   * test-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the response. Valid values: en, zh, and ja. The default value is en.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The method used to access the instance over the Internet. Valid values:
   * 
   * - SYSTEM_ASSIGN: The system assigns a canonical name (CNAME) record. This option is disabled.
   * 
   * - CUSTOM: You specify a CNAME record.
   * 
   * @example
   * CUSTOM
   */
  publicCnameMode?: string;
  /**
   * @remarks
   * The hostname of the CNAME record that is used for Internet access.
   * 
   * @example
   * test.rr
   */
  publicRr?: string;
  /**
   * @remarks
   * The service domain name that is accessed over the Internet.
   * 
   * @example
   * example.com
   */
  publicUserDomainName?: string;
  /**
   * @remarks
   * The primary domain name that is used to access the instance over the Internet using a CNAME record. This parameter is required if you set PublicCnameMode to CUSTOM.
   * 
   * > Enter the primary domain name. Do not include the hostname specified by the PublicRr parameter.
   * 
   * @example
   * www.example.com
   */
  publicZoneName?: string;
  /**
   * @remarks
   * The global time to live (TTL).
   * 
   * @example
   * 60
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      cnameType: 'CnameType',
      forceUpdate: 'ForceUpdate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      publicCnameMode: 'PublicCnameMode',
      publicRr: 'PublicRr',
      publicUserDomainName: 'PublicUserDomainName',
      publicZoneName: 'PublicZoneName',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': UpdateDnsGtmInstanceGlobalConfigRequestAlertConfig },
      alertGroup: 'string',
      cnameType: 'string',
      forceUpdate: 'boolean',
      instanceId: 'string',
      instanceName: 'string',
      lang: 'string',
      publicCnameMode: 'string',
      publicRr: 'string',
      publicUserDomainName: 'string',
      publicZoneName: 'string',
      ttl: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

