// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigsInstanceConfig extends $dara.Model {
  /**
   * @remarks
   * The policy for load balancing between address pools. Valid values:
   * 
   * *   round_robin: All address pools are returned for Domain Name System (DNS) requests from any source. All address pools are sorted in round-robin mode each time they are returned.
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
   * The availability state of the access domain name. Valid values:
   * 
   * *   available: If the access domain name is **enabled** and the health state is normal, the access domain name is deemed **available**.
   * *   unavailable: If the access domain name is **disabled** or the health state is **abnormal**, the access domain name is deemed **unavailable**.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The configuration ID of the access domain name. Two configuration IDs exist when the access domain name is bound to the same GTM instance but an A record and an AAAA record are configured for the access domain name. The configuration ID uniquely identifies a configuration.
   * 
   * @example
   * config-00**01
   */
  configId?: string;
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
   * gtm-cn-zz11t58**0k
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * Remarks.
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
   * Global TTL (in seconds), the TTL value for domain name resolution to addresses in the address pool, which affects the caching time of DNS records in the ISP\\"s LocalDNS. Custom TTL values are supported.
   * 
   * @example
   * 30
   */
  ttl?: number;
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
      availableStatus: 'AvailableStatus',
      configId: 'ConfigId',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      remark: 'Remark',
      scheduleDomainName: 'ScheduleDomainName',
      scheduleHostname: 'ScheduleHostname',
      scheduleRrType: 'ScheduleRrType',
      scheduleZoneName: 'ScheduleZoneName',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
      ttl: 'Ttl',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolLbStrategy: 'string',
      availableStatus: 'string',
      configId: 'string',
      enableStatus: 'string',
      healthStatus: 'string',
      instanceId: 'string',
      instanceName: 'string',
      remark: 'string',
      scheduleDomainName: 'string',
      scheduleHostname: 'string',
      scheduleRrType: 'string',
      scheduleZoneName: 'string',
      sequenceLbStrategyMode: 'string',
      ttl: 'number',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigs extends $dara.Model {
  instanceConfig?: DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigsInstanceConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceConfig: 'InstanceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConfig: { 'type': 'array', 'itemType': DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigsInstanceConfig },
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

export class DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPool extends $dara.Model {
  /**
   * @remarks
   * Load balancing policy among addresses in the address pool:
   * - round_robin: Round-robin, for any source of DNS resolution requests, all addresses are returned, with a rotation sort applied to all addresses each time.
   * - sequence: Sequential, for any source of DNS resolution requests, returns the address with the smaller sequence number (the sequence number indicates the priority of address return, with smaller numbers having higher priority). If the address with the smaller sequence number is unavailable, the next address with a smaller sequence number is returned.
   * - weight: Weighted, supports setting different weight values for each address, realizing the return of addresses according to the ratio of weight for DNS query resolutions.
   * - source_nearest: Source-nearest, i.e., intelligent resolution function, where GTM can return different addresses based on the source of different DNS resolution requests, achieving the effect of users accessing nearby.
   * 
   * @example
   * round_robin
   */
  addressLbStrategy?: string;
  /**
   * @remarks
   * The ID of the address pool.
   * 
   * @example
   * pool-895280232254422016
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
   * - available
   * - unavailable
   * 
   * @example
   * available
   */
  availableStatus?: string;
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
   * The instances that reference the address pool.
   */
  instanceConfigs?: DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigs;
  /**
   * @remarks
   * Remarks for the address pool.
   * 
   * @example
   * pool-1
   */
  remark?: string;
  /**
   * @remarks
   * Load balancing policy between addresses in sequential mode during the recovery of preceding resources service mode:
   * - preemptive: Preemption mode, where upon recovery of preceding resources, priority is given to using addresses with smaller sequence numbers;
   * - non_preemptive: Non-preemption mode, where upon recovery of preceding resources, the current address continues to be used;
   * 
   * @example
   * preemptive
   */
  sequenceLbStrategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      addressLbStrategy: 'AddressLbStrategy',
      addressPoolId: 'AddressPoolId',
      addressPoolName: 'AddressPoolName',
      addressPoolType: 'AddressPoolType',
      availableStatus: 'AvailableStatus',
      enableStatus: 'EnableStatus',
      healthJudgement: 'HealthJudgement',
      healthStatus: 'HealthStatus',
      instanceConfigs: 'InstanceConfigs',
      remark: 'Remark',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLbStrategy: 'string',
      addressPoolId: 'string',
      addressPoolName: 'string',
      addressPoolType: 'string',
      availableStatus: 'string',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthStatus: 'string',
      instanceConfigs: DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigs,
      remark: 'string',
      sequenceLbStrategyMode: 'string',
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

export class DescribeCloudGtmAddressReferenceResponseBodyAddressPools extends $dara.Model {
  addressPool?: DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPool },
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

export class DescribeCloudGtmAddressReferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The address ID. This ID uniquely identifies the address.
   * 
   * @example
   * addr-89564584963974**40
   */
  addressId?: string;
  /**
   * @remarks
   * The address pools.
   */
  addressPools?: DescribeCloudGtmAddressReferenceResponseBodyAddressPools;
  /**
   * @remarks
   * Address name.
   * 
   * @example
   * Address-1
   */
  name?: string;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressId: 'AddressId',
      addressPools: 'AddressPools',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressId: 'string',
      addressPools: DescribeCloudGtmAddressReferenceResponseBodyAddressPools,
      name: 'string',
      requestId: 'string',
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

