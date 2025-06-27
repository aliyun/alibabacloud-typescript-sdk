// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPools } from "./DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPools";


export class DescribeCloudGtmInstanceConfigFullInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policy for load balancing between address pools. Valid values:
   * 
   * *   round_robin: All address pools are returned for DNS requests from any source. All address pools are sorted in round-robin mode each time they are returned.
   * *   sequence: The address pool with the smallest sequence number is preferentially returned for DNS requests from any source. The sequence number indicates the priority for returning the address pool. A smaller sequence number indicates a higher priority. If the address pool with the smallest sequence number is unavailable, the address pool with the second smallest sequence number is returned.
   * *   weight: You can set a different weight value for each address pool. This way, address pools are returned based on the weight values.
   * *   source_nearest: GTM returns different addresses based on the sources of DNS requests. This way, users can access nearby addresses.
   * 
   * @example
   * round_robin
   */
  addressPoolLbStrategy?: string;
  /**
   * @remarks
   * The address pools.
   */
  addressPools?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPools;
  /**
   * @remarks
   * Alert notification configuration.
   * 
   * @example
   * [{\\"NoticeType\\":\\"addr_alert\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"addr_resume\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"addr_pool_unavailable\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"addr_pool_available\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true}]"
   */
  alertConfig?: string;
  /**
   * @remarks
   * Alert notification group.
   * 
   * @example
   * [\\"Default Contact Group\\"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The availability state of the access domain name. Valid values:
   * 
   * *   available: If the access domain name is **enabled** and the health state of the access domain name is **Normal**, the access domain name is deemed **available**.
   * *   unavailable: If the access domain name is **disabled** or the health state of the access domain name is **Abnormal**, the access domain name is deemed **unavailable**.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * *   dns_gtm_public_cn: the commodity code on the China site (aliyun.com)
   * *   dns_gtm_public_intl: the commodity code on the international site (alibabacloud.com)
   * 
   * @example
   * dns_gtm_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The configuration ID of the access domain name. Two configuration IDs exist when the access domain name is bound to the same GTM instance but an A record and an AAAA record are configured for the access domain name. The configuration ID uniquely identifies a configuration.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * Instance creation time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * Instance creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The enabling state of the access domain name. Valid values:
   * 
   * *   enable: The access domain name is enabled and the intelligent scheduling policy of the corresponding GTM instance takes effect.
   * *   disable: The access domain name is disabled and the intelligent scheduling policy of the corresponding GTM instance does not take effect.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health state of the access domain name. Valid values:
   * 
   * *   ok: The health state of the access domain name is Normal and all address pools that are referenced by the access domain name are available.
   * *   ok_alert: The health state of the access domain name is Warning and some of the address pools that are referenced by the access domain name are unavailable. In this case, the available address pools are normally used for DNS resolution, but the unavailable address pools cannot be used for DNS resolution.
   * *   exceptional: The health state of the access domain name is Abnormal and all address pools that are referenced by the access domain name are unavailable. In this case, addresses in the non-empty address pool with the smallest sequence number are preferentially used for fallback resolution. This returns DNS results for clients as much as possible.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * Schedule instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Remarks of the configuration of domain instance.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
   */
  requestId?: string;
  /**
   * @remarks
   * The GTM access domain name. The value of this parameter is composed of the value of ScheduleHostname and the value of ScheduleZoneName.
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
  /**
   * @remarks
   * Host name of the domain accessed by GTM.
   * 
   * @example
   * www
   */
  scheduleHostname?: string;
  /**
   * @remarks
   * DNS record types for the ScheduleDomainName:
   * - A: IPv4 address
   * - AAAA: IPv6 address
   * - CNAME: Domain name
   * 
   * @example
   * A
   */
  scheduleRrType?: string;
  /**
   * @remarks
   * The allocation mode of the access domain name. Valid values:
   * 
   * *   custom: custom allocation. You must specify a custom hostname and associate the hostname with a zone or subzone within the account to which the GTM instance belongs to generate an access domain name.
   * *   sys_assign: The system assigns an access domain name by default. This mode is no longer supported. Do not choose this mode.
   * 
   * @example
   * custom
   */
  scheduleZoneMode?: string;
  /**
   * @remarks
   * The zone (such as example.com) or subzone (such as a.example.com) associated with the GTM access domain name. In most cases, the zone or subzone is hosted in Authoritative DNS Resolution of the Alibaba Cloud DNS console within the account to which the GTM instance belongs.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  /**
   * @remarks
   * The mode used if the address pool with the smallest sequence number is recovered. This parameter is required when AddressPoolLbStrategy is set to sequence. Valid values:
   * 
   * *   preemptive: The address pool with the smallest sequence number is preferentially used if this address pool is recovered.
   * *   non_preemptive: The current address pool is still used even if the address pool with the smallest sequence number is recovered.
   * 
   * @example
   * preemptive
   */
  sequenceLbStrategyMode?: string;
  /**
   * @remarks
   * Global TTL (in seconds), the TTL value for resolving the access domain to addresses in the address pool, which affects the caching time of DNS records in the ISP\\"s LocalDNS. Custom TTL values are supported.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * Last modified time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Last modified time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * Global Traffic Management version 3.0 instances:
   * - standard: Standard Edition
   * - ultimate: Ultimate Edition
   * 
   * @example
   * ultimate
   */
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolLbStrategy: 'AddressPoolLbStrategy',
      addressPools: 'AddressPools',
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      availableStatus: 'AvailableStatus',
      commodityCode: 'CommodityCode',
      configId: 'ConfigId',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      remark: 'Remark',
      requestId: 'RequestId',
      scheduleDomainName: 'ScheduleDomainName',
      scheduleHostname: 'ScheduleHostname',
      scheduleRrType: 'ScheduleRrType',
      scheduleZoneMode: 'ScheduleZoneMode',
      scheduleZoneName: 'ScheduleZoneName',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
      ttl: 'Ttl',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolLbStrategy: 'string',
      addressPools: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPools,
      alertConfig: 'string',
      alertGroup: 'string',
      availableStatus: 'string',
      commodityCode: 'string',
      configId: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthStatus: 'string',
      instanceId: 'string',
      instanceName: 'string',
      remark: 'string',
      requestId: 'string',
      scheduleDomainName: 'string',
      scheduleHostname: 'string',
      scheduleRrType: 'string',
      scheduleZoneMode: 'string',
      scheduleZoneName: 'string',
      sequenceLbStrategyMode: 'string',
      ttl: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
      versionCode: 'string',
    };
  }

  validate() {
    if(this.addressPools && typeof (this.addressPools as any).validate === 'function') {
      (this.addressPools as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

