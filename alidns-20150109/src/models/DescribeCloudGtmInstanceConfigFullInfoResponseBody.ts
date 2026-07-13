// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddressRequestSource extends $dara.Model {
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

export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddress extends $dara.Model {
  address?: string;
  addressId?: string;
  attributeInfo?: string;
  availableMode?: string;
  availableStatus?: string;
  createTime?: string;
  createTimestamp?: number;
  enableStatus?: string;
  healthJudgement?: string;
  healthStatus?: string;
  manualAvailableStatus?: string;
  name?: string;
  remark?: string;
  requestSource?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddressRequestSource;
  seqNonPreemptiveSchedule?: boolean;
  serialNumber?: number;
  type?: string;
  updateTime?: string;
  updateTimestamp?: number;
  weightValue?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressId: 'AddressId',
      attributeInfo: 'AttributeInfo',
      availableMode: 'AvailableMode',
      availableStatus: 'AvailableStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      enableStatus: 'EnableStatus',
      healthJudgement: 'HealthJudgement',
      healthStatus: 'HealthStatus',
      manualAvailableStatus: 'ManualAvailableStatus',
      name: 'Name',
      remark: 'Remark',
      requestSource: 'RequestSource',
      seqNonPreemptiveSchedule: 'SeqNonPreemptiveSchedule',
      serialNumber: 'SerialNumber',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      weightValue: 'WeightValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressId: 'string',
      attributeInfo: 'string',
      availableMode: 'string',
      availableStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthStatus: 'string',
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      requestSource: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddressRequestSource,
      seqNonPreemptiveSchedule: 'boolean',
      serialNumber: 'number',
      type: 'string',
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

export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddresses extends $dara.Model {
  address?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddressesAddress },
    };
  }

  validate() {
    if(Array.isArray(this.address)) {
      $dara.Model.validateArray(this.address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolRequestSource extends $dara.Model {
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

export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPool extends $dara.Model {
  addressLbStrategy?: string;
  addressPoolId?: string;
  addressPoolName?: string;
  addressPoolType?: string;
  addresses?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddresses;
  availableStatus?: string;
  createTime?: string;
  createTimestamp?: number;
  enableStatus?: string;
  healthJudgement?: string;
  healthStatus?: string;
  requestSource?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolRequestSource;
  seqNonPreemptiveSchedule?: boolean;
  sequenceLbStrategyMode?: string;
  serialNumber?: number;
  updateTime?: string;
  updateTimestamp?: number;
  weightValue?: number;
  static names(): { [key: string]: string } {
    return {
      addressLbStrategy: 'AddressLbStrategy',
      addressPoolId: 'AddressPoolId',
      addressPoolName: 'AddressPoolName',
      addressPoolType: 'AddressPoolType',
      addresses: 'Addresses',
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
      addresses: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolAddresses,
      availableStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthStatus: 'string',
      requestSource: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPoolRequestSource,
      seqNonPreemptiveSchedule: 'boolean',
      sequenceLbStrategyMode: 'string',
      serialNumber: 'number',
      updateTime: 'string',
      updateTimestamp: 'number',
      weightValue: 'number',
    };
  }

  validate() {
    if(this.addresses && typeof (this.addresses as any).validate === 'function') {
      (this.addresses as any).validate();
    }
    if(this.requestSource && typeof (this.requestSource as any).validate === 'function') {
      (this.requestSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPools extends $dara.Model {
  addressPool?: DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': DescribeCloudGtmInstanceConfigFullInfoResponseBodyAddressPoolsAddressPool },
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

export class DescribeCloudGtmInstanceConfigFullInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The load balancing policy for the address pools.
   * 
   * - round_robin: Returns all address pools for any DNS request. The address pools are rotated in order for each request.
   * 
   * - sequence: Returns the address pool with the smallest ordinal number for any DNS request. The ordinal number indicates the priority of the address pool. A smaller value indicates a higher priority. If the address pool with the smallest ordinal number is unavailable, the address pool with the next smallest ordinal number is returned.
   * 
   * - weight: Returns address pools based on the specified weight for each address pool.
   * 
   * - source_nearest: Returns different address pools based on the source of the DNS requests. This implements proximity-based access for users.
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
   * The alert notification configuration.
   * 
   * @example
   * [{\\"NoticeType\\":\\"addr_alert\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"addr_resume\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"addr_pool_unavailable\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"addr_pool_available\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true}]"
   */
  alertConfig?: string;
  /**
   * @remarks
   * The alert group.
   * 
   * @example
   * [\\"云账号报警联系人\\"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The service availability status of the instance.
   * 
   * - `available`: The instance is enabled and its health status is Normal. The service is available for the access domain name.
   * 
   * - `unavailable`: The instance is disabled or its health status is abnormal. The service is unavailable for the access domain name.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * - dns_gtm_public_cn: The commodity code for the China site (aliyun.com).
   * 
   * - dns_gtm_public_intl: The commodity code for the international site (alibabacloud.com).
   * 
   * @example
   * dns_gtm_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The ID of the instance configuration. You can configure both A and AAAA records for the same access domain name and Global Traffic Manager (GTM) instance. In this case, the GTM instance has two configurations. The ConfigId uniquely identifies an instance configuration.
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The enabled status of the instance.
   * 
   * - enable: The GTM instance is enabled and its intelligent scheduling policy is active.
   * 
   * - disable: The GTM instance is disabled and its intelligent scheduling policy is inactive.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health status of the instance.
   * 
   * - ok: Normal. All address pools referenced by the access domain name are available.
   * 
   * - ok_alert: Warning. Some of the address pools referenced by the access domain name are unavailable. In this state, DNS requests are resolved to the available address pools, but not to the unavailable ones.
   * 
   * - exceptional: Abnormal. All address pools referenced by the access domain name are unavailable. In this case, DNS requests are resolved to the addresses in the non-empty address pool with the smallest ordinal number as a failover measure. This helps ensure that clients can receive DNS responses.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the GTM instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The remarks on the instance configuration.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 29D0F8F8-5499-4F6C-9FDC-1EE13BF55925
   */
  requestId?: string;
  /**
   * @remarks
   * The GTM access domain name. The format is ScheduleHostname + ScheduleZoneName.
   * 
   * @example
   * www.example.com
   */
  scheduleDomainName?: string;
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
   * The DNS record type of the GTM access domain name.
   * 
   * - A: IPv4 address
   * 
   * - AAAA: IPv6 address
   * 
   * - CNAME: canonical name
   * 
   * @example
   * A
   */
  scheduleRrType?: string;
  /**
   * @remarks
   * The assignment mode of the access domain name.
   * 
   * - custom: You can customize the host record and associate it with a primary domain name or a subdomain name under the account to which the GTM instance belongs. This generates the access domain name.
   * 
   * - sys_assign: The system assigns a default access domain name. This feature is no longer supported. Do not select this mode.
   * 
   * @example
   * custom
   */
  scheduleZoneMode?: string;
  /**
   * @remarks
   * The primary domain name (example.com) or subdomain name (a.example.com) of the GTM access domain name. This is typically a domain name hosted in the authoritative zone of the Alibaba Cloud DNS console under the account to which the GTM instance belongs.
   * 
   * @example
   * example.com
   */
  scheduleZoneName?: string;
  /**
   * @remarks
   * When the load balancing policy for address pools is sequence, this parameter specifies the service recovery mode for a resource that becomes available again.
   * 
   * - preemptive: The address pool with the smaller ordinal number is preferentially used.
   * 
   * - non_preemptive: The current address pool is still used.
   * 
   * @example
   * preemptive
   */
  sequenceLbStrategyMode?: string;
  /**
   * @remarks
   * The global time to live (TTL) in seconds. This is the TTL value for the DNS records that map the access domain name to the addresses in the address pool. It affects the cache duration of the DNS records on carrier Local DNS servers. You can customize the TTL value.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The UNIX timestamp that indicates when the instance was last modified.
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * The edition of the Global Traffic Manager 3.0 instance.
   * 
   * - standard: Standard Edition
   * 
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

