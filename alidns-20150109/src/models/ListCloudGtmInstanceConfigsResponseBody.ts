// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource extends $dara.Model {
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

export class ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPool extends $dara.Model {
  /**
   * @remarks
   * Load balancing policy among addresses in the address pool:
   * - round_robin: Round-robin, for any source of DNS resolution requests, returns all addresses and rotates the order of all addresses each time.
   * - sequence: Sequential, for any source of DNS resolution requests, returns the address with the smaller sequence number (the sequence number indicates the priority of the address return, the smaller the higher the priority). If the address with the smaller sequence number is unavailable, return the next address with a smaller sequence number.
   * - weight: Weighted, supports setting different weight values for each address to realize returning addresses according to the weight ratio for resolution queries.
   * - source_nearest: Source-nearest, i.e., intelligent resolution function, where GTM can return different addresses based on the source of different DNS resolution requests, achieving the effect of users accessing nearby.
   * 
   * @example
   * round_robin
   */
  addressLbStrategy?: string;
  /**
   * @remarks
   * The ID of the address pool. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89528023225442**16
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
   * The health state of the address pool. Valid values:
   * 
   * *   ok: The health state of the address pool is Normal and all addresses that are referenced by the address pool are available.
   * *   ok_alert: The health state of the address pool is Warning and some of the addresses that are referenced by the address pool are unavailable. However, the address pool is deemed normal. In this case, available address pools are normally used for DNS resolution, but unavailable address pools cannot be used for DNS resolution.
   * *   exceptional: The health state of the address pool is Abnormal and some or all of the addresses that are referenced by the address pool are unavailable. In this case, the address pool is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health state of the address pool. Valid values:
   * 
   * *   ok: The health state of the address pool is Normal and all addresses that are referenced by the address pool are available.
   * *   ok_alert: The health state of the address pool is Warning and some of the addresses that are referenced by the address pool are unavailable. However, the address pool is deemed normal. In this case, available address pools are normally used for DNS resolution, but unavailable address pools cannot be used for DNS resolution.
   * *   exceptional: The health state of the address pool is Abnormal and some or all of the addresses that are referenced by the address pool are unavailable. In this case, the address pool is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * Parse the request source list.
   */
  requestSource?: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource;
  /**
   * @remarks
   * Indicates whether the mode of the sequence policy for load balancing between address pools is non-preemptive. This parameter is available only for the multicloud integration scenario. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  seqNonPreemptiveSchedule?: boolean;
  /**
   * @remarks
   * The mode used if the address with the smallest sequence number is recovered. This parameter is required only when AddressLbStrategy is set to sequence. Valid values:
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
   * Sequence number. For any parsing request, the address pool with the smaller sequence number (indicating the priority of the address pool returned, with smaller numbers having higher priority) is returned.
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
   * Last modification time of the address pool (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * Weight value (an integer between 1 and 100, including both 1 and 100), which supports setting different weight values for each address pool, enabling the resolution query to return address pools according to the weighted ratio.
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
      requestSource: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource,
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

export class ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPools extends $dara.Model {
  addressPool?: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPool },
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

export class ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig extends $dara.Model {
  /**
   * @remarks
   * The policy for load balancing between address pools. Valid values:
   * 
   * *   round_robin: All address pools are returned for DNS requests from any source. All address pools are sorted in round-robin mode each time they are returned.
   * *   sequence: The address pool with the smallest sequence number is preferentially returned for DNS requests from any source. The sequence number indicates the priority for returning the address pool. A smaller sequence number indicates a higher priority. If the address pool with the smallest sequence number is unavailable, the address pool with the second smallest sequence number is returned.
   * *   weight: You can set a different weight value for each address pool. This way, address pools are returned based on the weight values.
   * *   source_nearest: GTM returns different address pools based on the sources of DNS requests. This way, users can access nearby addresses.
   * 
   * @example
   * round_robin
   */
  addressPoolLbStrategy?: string;
  /**
   * @remarks
   * The address pools.
   */
  addressPools?: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPools;
  /**
   * @remarks
   * The availability state of the access domain name. Valid values:
   * 
   * *   available: If the access domain name is **enabled** and the health state of the access domain name is **Normal**, the access domain name is deemed **Available**.
   * *   unavailable: If the access domain name is **disabled** or the health state of the access domain name is **Abnormal**, the access domain name is deemed **Unavailable**.
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
   * Instance configuration creation time.
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
   * *   enable: The access domain name is enabled and the intelligent scheduling policy of the GTM instance takes effect.
   * *   disable: The access domain name is disabled and the intelligent scheduling policy of the GTM instance does not take effect.
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
   * *   ok_alert: The health state of the access domain name is Warning and some of the address pools that are referenced by the access domain name are unavailable. In this case, available address pools are normally used for DNS resolution, but unavailable address pools cannot be used for DNS resolution.
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
   * Remarks on the configuration of domain instance.
   * 
   * @example
   * test
   */
  remark?: string;
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
   * *   custom: custom allocation. You must specify a custom hostname and associate the hostname with a zone within the account to which the GTM instance belongs to generate an access domain name.
   * *   sys_assign: system allocation. This mode is not supported. Do not set ScheduleZoneMode to sys_assign.
   * 
   * @example
   * custom
   */
  scheduleZoneMode?: string;
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
   * Global TTL (in seconds), the TTL value for domain resolution to addresses in the address pool, affecting the caching time of DNS records in the ISP\\"s LocalDNS. Supports custom TTL values.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The last modified time of the instance configuration.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The last modification time of the instance configuration (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The edition of the GTM 3.0 instance. Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Ultimate Edition
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
      addressPools: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPools,
      availableStatus: 'string',
      commodityCode: 'string',
      configId: 'string',
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

export class ListCloudGtmInstanceConfigsResponseBodyInstanceConfigs extends $dara.Model {
  instanceConfig?: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceConfig: 'InstanceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConfig: { 'type': 'array', 'itemType': ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfig },
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

export class ListCloudGtmInstanceConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the instance.
   */
  instanceConfigs?: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigs;
  /**
   * @remarks
   * Current page number, starting from **1**, default is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
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
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of entries for domain instance configurations.
   * 
   * @example
   * 10
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
      instanceConfigs: ListCloudGtmInstanceConfigsResponseBodyInstanceConfigs,
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

