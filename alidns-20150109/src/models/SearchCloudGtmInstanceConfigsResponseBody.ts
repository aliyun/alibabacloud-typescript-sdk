// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource extends $dara.Model {
  requestSource?: string[];
  static names(): { [key: string]: string } {
    return {
      requestSource: 'RequestSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestSource: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.requestSource)) {
      $dara.Model.validateArray(this.requestSource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPool extends $dara.Model {
  /**
   * @remarks
   * Load balancing policy among addresses in the address pool:
   * - round_robin: Round-robin, where for any source of DNS resolution requests, all addresses are returned, with a rotation of the order for every request.
   * - sequence: Sequential, where for any source of DNS resolution requests, the address with the lower sequence number (indicating a higher priority, the smaller the number, the higher the priority) is returned. If the address with the lower sequence number is unavailable, the next address with a lower sequence number is returned.
   * - weight: Weighted, supporting the setting of different weight values for each address to realize returning addresses according to the ratio of weights in DNS query resolutions.
   * - source_nearest: Source-nearest, referring to the intelligent resolution feature, where GTM can return different addresses based on the source of different DNS resolution requests, achieving the effect of users accessing the nearest server.
   * 
   * @example
   * round_robin
   */
  addressLbStrategy?: string;
  /**
   * @remarks
   * Address pool ID, uniquely identifying the address pool.
   * 
   * @example
   * pool-89564504435014**60
   */
  addressPoolId?: string;
  /**
   * @remarks
   * Address pool name.
   * 
   * @example
   * AddressPool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * Address pool type:
   * - IPv4
   * - IPv6
   * - domain
   * 
   * @example
   * IPv4
   */
  addressPoolType?: string;
  /**
   * @remarks
   * Address pool availability status:
   * - available: Available
   * - unavailable: Unavailable
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * Address pool creation time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * Address pool creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Address pool status:
   * - enable: Enabled status
   * - disable: Disabled status
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition for determining the health status of the address pool. Valid values:
   * 
   * *   any_ok: At least one address in the address pool is available.
   * *   p30_ok: At least 30% of the addresses in the address pool are available.
   * *   p50_ok: At least 50% of the addresses in the address pool are available.
   * *   p70_ok: At least 70% of the addresses in the address pool are available.
   * *   all_ok: All addresses in the address pool are available.
   * 
   * @example
   * any_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health state of the address pool. Valid values:
   * 
   * *   ok: The health state of the address pool is normal and all addresses that are referenced by the address pool are available.
   * *   ok_alert: The health state of the address pool is warning and some of the addresses that are referenced by the address pool are unavailable. However, the address pool is deemed normal. In this case, only the available addresses are returned for DNS requests.
   * *   exceptional: The health state of the address pool is abnormal and some or all of the addresses that are referenced by the address pool are unavailable. In this case, the address pool is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * Parse the request source list.
   */
  requestSource?: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource;
  /**
   * @remarks
   * Indicates whether it is a sequential (non-preemptive) scheduling object for hybrid cloud management scenarios: 
   * - true: yes 
   * - false: no
   * 
   * @example
   * false
   */
  seqNonPreemptiveSchedule?: boolean;
  /**
   * @remarks
   * The mode used if the address with the smallest sequence number is recovered. This parameter is required only when the policy for load balancing between addresses is sequence. Valid values:
   * 
   * *   preemptive: The address with the smallest sequence number is preferentially used if this address is recovered.
   * *   non_preemptive: The current address is still used even if the address with the smallest sequence number is recovered.
   * 
   * @example
   * preemptive
   */
  sequenceLbStrategyMode?: string;
  /**
   * @remarks
   * Sequence number. For any parsing request, the address pool with the smaller sequence number (indicating the priority of the address pool returned, with smaller numbers having higher priority) will be returned.
   * 
   * @example
   * 1
   */
  serialNumber?: number;
  /**
   * @remarks
   * Last modification time of the address pool.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Update time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * Weight value (an integer between 1 and 100, inclusive), allowing different weight values to be set for each address pool, implementing the return of address pools according to weight ratios in resolution queries.
   * 
   * @example
   * 1
   */
  weightValue?: number;
  static names(): { [key: string]: string } {
    return {
      addressLbStrategy: 'AddressLbStrategy',
      addressPoolId: 'AddressPoolId',
      addressPoolName: 'AddressPoolName',
      addressPoolType: 'AddressPoolType',
      availableStatus: 'AvailableStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      enableStatus: 'EnableStatus',
      healthJudgement: 'HealthJudgement',
      healthStatus: 'HealthStatus',
      requestSource: 'RequestSource',
      seqNonPreemptiveSchedule: 'SeqNonPreemptiveSchedule',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
      serialNumber: 'SerialNumber',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      weightValue: 'WeightValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLbStrategy: 'string',
      addressPoolId: 'string',
      addressPoolName: 'string',
      addressPoolType: 'string',
      availableStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthStatus: 'string',
      requestSource: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource,
      seqNonPreemptiveSchedule: 'boolean',
      sequenceLbStrategyMode: 'string',
      serialNumber: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
      weightValue: 'number',
    };
  }

  validate() {
    if(this.requestSource && typeof (this.requestSource as any).validate === 'function') {
      (this.requestSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPools extends $dara.Model {
  addressPool?: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPool },
    };
  }

  validate() {
    if(Array.isArray(this.addressPool)) {
      $dara.Model.validateArray(this.addressPool);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig extends $dara.Model {
  /**
   * @remarks
   * The policy for load balancing between address pools. Valid values:
   * 
   * *   round_robin: All address pools are returned for DNS requests from any source. All address pools are sorted in round-robin mode each time they are returned.
   * *   sequence: The address pool with the smallest sequence number is preferentially returned for DNS requests from any source. The sequence number indicates the priority for returning the address pool. A smaller sequence number indicates a higher priority. If the address pool with the smallest sequence number is unavailable, the address pool with the second smallest sequence number is returned.
   * *   weight: You can set a different weight value for each address pool. This way, address pools are returned based on the weight values.
   * *   source_nearest: Different address pools are returned based on the sources of DNS requests. This way, users can access nearby address pools.
   * 
   * @example
   * round_robin
   */
  addressPoolLbStrategy?: string;
  /**
   * @remarks
   * The address pools.
   */
  addressPools?: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPools;
  /**
   * @remarks
   * The availability state of the access domain name. Valid values:
   * 
   * *   available: If the access domain name is **enabled** and the health state is **normal**, the access domain name is deemed **available**.
   * *   unavailable: If the access domain name is **disabled** or the health state is **abnormal**, the access domain name is deemed **unavailable**.
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
   * @example
   * ENABLE
   */
  configLoggingSwitchStatus?: string;
  /**
   * @remarks
   * Domain instance creation time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * Domain instance creation time (timestamp).
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
   * *   ok: The health state of the access domain name is normal and all address pools that are referenced by the access domain name are available.
   * *   ok_alert: The health state of the access domain name is warning and some of the address pools that are referenced by the access domain name are unavailable. In this case, only the available address pools are returned for DNS requests.
   * *   exceptional: The health state of the access domain name is abnormal and all address pools that are referenced by the access domain name are unavailable. In this case, addresses in the non-empty address pool with the smallest sequence number are preferentially used for fallback resolution. This returns DNS results for clients as much as possible.
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
   * gtm-cn-x0r38e0**03
   */
  instanceId?: string;
  /**
   * @remarks
   * Remarks for the domain instance.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The access domain name. The value of this parameter is composed of the value of ScheduleHostname and the value of ScheduleZoneName.
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
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
   * DNS record types for the scheduling domain:
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
   * *   custom: custom allocation. You must specify a custom hostname and associate the hostname with a zone that is hosted by the Public Authoritative DNS module within the account to which the GTM instance belongs to generate an access domain name.
   * *   sys_assign: system allocation. This mode is not supported. Do not set ScheduleZoneMode to sys_assign.
   * 
   * @example
   * custom
   */
  scheduleZoneMode?: string;
  /**
   * @remarks
   * The zone such as example.com or subzone such as a.example.com of the access domain name. In most cases, the zone or subzone is hosted by the Public Authoritative DNS module of Alibaba Cloud DNS. This zone belongs to the account to which the GTM instance belongs.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  /**
   * @remarks
   * The mode used if the address pool with the smallest sequence number is recovered. This parameter is returned when AddressPoolLbStrategy is set to sequence. Valid values:
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
   * Global TTL (in seconds), the TTL value for resolving the access domain name to the address pool, which affects the caching time of DNS records in the operator\\"s LocalDNS. Supports custom TTL values.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The last modification time of the domain instance.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The last modification time of the domain instance (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * Global Traffic Management version 3.0 instance types:
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
      availableStatus: 'AvailableStatus',
      commodityCode: 'CommodityCode',
      configId: 'ConfigId',
      configLoggingSwitchStatus: 'ConfigLoggingSwitchStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      remark: 'Remark',
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
      addressPools: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPools,
      availableStatus: 'string',
      commodityCode: 'string',
      configId: 'string',
      configLoggingSwitchStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthStatus: 'string',
      instanceId: 'string',
      remark: 'string',
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

export class SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigs extends $dara.Model {
  instanceConfig?: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceConfig: 'InstanceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConfig: { 'type': 'array', 'itemType': SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig },
    };
  }

  validate() {
    if(Array.isArray(this.instanceConfig)) {
      $dara.Model.validateArray(this.instanceConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchCloudGtmInstanceConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances list.
   */
  instanceConfigs?: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigs;
  /**
   * @remarks
   * Current page number, starting from 1, default is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of **100**, and a default of **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 6AEC7A64-3CB1-4C49-8B35-0B901F1E26BF
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of instance configuration entries.
   * 
   * @example
   * 15
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      instanceConfigs: 'InstanceConfigs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConfigs: SearchCloudGtmInstanceConfigsResponseBodyInstanceConfigs,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.instanceConfigs && typeof (this.instanceConfigs as any).validate === 'function') {
      (this.instanceConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

