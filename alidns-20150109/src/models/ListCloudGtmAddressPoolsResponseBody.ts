// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask extends $dara.Model {
  /**
   * @remarks
   * The target service port for health checks. When the Ping protocol is selected for health checks, configuration of the service port is not supported.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the health check template.
   * 
   * @example
   * mtp-895180524251002880
   */
  templateId?: string;
  /**
   * @remarks
   * Health check template name.
   * 
   * @example
   * IPv4-Ping
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks extends $dara.Model {
  healthTask?: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasksHealthTask },
    };
  }

  validate() {
    if(Array.isArray(this.healthTask)) {
      $dara.Model.validateArray(this.healthTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressRequestSource extends $dara.Model {
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

export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress extends $dara.Model {
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
   * addr-895182181143688192
   */
  addressId?: string;
  /**
   * @remarks
   * Address ownership information, not supported in the current version.
   * 
   * @example
   * The current version does not support returning this parameter.
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The failover mode that is used when address exceptions are identified. Valid values:
   * 
   * *   auto: the automatic mode. The system determines whether to return an address based on the health check results. If the address fails health checks, the system does not return the address. If the address passes health checks, the system returns the address.
   * *   manual: the manual mode. If an address is in the unavailable state, the address is not returned for DNS requests even if the address passes health checks. If an address is in the available state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * 
   * @example
   * auto
   */
  availableMode?: string;
  /**
   * @remarks
   * The availability state of the address. Valid values:
   * 
   * *   available: The address is available.
   * *   unavailable: The address is unavailable.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * Address creation time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * Address creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Address enable status:
   * - enable: Enabled status
   * - disable: Disabled status
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition for determining the health status of the address. Valid values:
   * 
   * *   any_ok: The health check results of at least one health check template are normal.
   * *   p30_ok: The health check results of at least 30% of health check templates are normal.
   * *   p50_ok: The health check results of at least 50% of health check templates are normal.
   * *   p70_ok: The health check results of at least 70% of health check templates are normal.
   * *   all_ok: The health check results of all health check templates are normal.
   * 
   * @example
   * any_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check state of the address. Valid values:
   * 
   * *   ok: The address passes all health checks of the referenced health check templates.
   * *   ok_alert: The address fails some health checks of the referenced health check templates but the address is deemed normal.
   * *   ok_no_monitor: The address does not reference any health check template and is normal.
   * *   exceptional: The address fails some or all health checks of the referenced health check templates and the address is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The health check tasks.
   */
  healthTasks?: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks;
  /**
   * @remarks
   * The availability state of the address when AvailableMode is set to manual for the address. Valid values:
   * 
   * *   available: The address is available. In this state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * *   unavailable: The address is unavailable. In this state, the address is not returned for DNS requests even if the address passes health checks.
   * 
   * @example
   * available
   */
  manualAvailableStatus?: string;
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
   * Address remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * List of request sources.
   */
  requestSource?: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressRequestSource;
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
   * Sequence number, indicating the priority of address return, where smaller numbers have higher priority.
   * 
   * @example
   * 1
   */
  serialNumber?: number;
  /**
   * @remarks
   * Address type:
   * - IPv4: IPv4 address
   * - IPv6: IPv6 address
   * - domain: Domain name
   * 
   * @example
   * IPv4
   */
  type?: string;
  /**
   * @remarks
   * The last time the address was modified.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The last modification time of the address (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  /**
   * @remarks
   * Weight value (integer between 1 and 100), supports setting different weight values for each address, enabling resolution queries to return addresses according to the weight ratio.
   * 
   * @example
   * 1
   */
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
      healthTasks: 'HealthTasks',
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
      healthTasks: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks,
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      requestSource: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressRequestSource,
      seqNonPreemptiveSchedule: 'boolean',
      serialNumber: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      weightValue: 'number',
    };
  }

  validate() {
    if(this.healthTasks && typeof (this.healthTasks as any).validate === 'function') {
      (this.healthTasks as any).validate();
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

export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddresses extends $dara.Model {
  address?: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress },
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

export class ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPool extends $dara.Model {
  /**
   * @remarks
   * Load balancing policy among addresses in the address pool:
   * - round_robin: Round-robin, for any source of DNS resolution requests, all addresses are returned. The order of all addresses is rotated each time.
   * - sequence: Sequential, for any source of DNS resolution requests, the address with the smaller sequence number (the sequence number indicates the priority of address returns, with smaller numbers having higher priority) is returned. If the address with the smaller sequence number is unavailable, the next address with a smaller sequence number is returned.
   * - weight: Weighted, supports setting different weight values for each address, realizing the return of addresses according to the ratio of weights in resolution queries.
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
   * The addresses.
   */
  addresses?: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddresses;
  /**
   * @remarks
   * The availability state of the address pool. Valid values:
   * 
   * *   Available: The address pool is available.
   * *   unavailable: The address pool is unavailable.
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
   * The enabling state of the address pool. Valid values:
   * 
   * *   enable: The address pool is enabled.
   * *   disable: The address pool is disabled.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition for determining the health state of the address. Valid values:
   * 
   * *   any_ok: The health check results of at least one health check template are normal.
   * *   p30_ok: The health check results of at least 30% of health check templates are normal.
   * *   p50_ok: The health check results of at least 50% of health check templates are normal.
   * *   p70_ok: The health check results of at least 70% of health check templates are normal.
   * *   all_ok: The health check results of all health check templates are normal.
   * 
   * @example
   * any_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health state of the address pool. Valid values:
   * 
   * *   ok: The health state of the address pool is Normal and all addresses that are referenced by the address pool are available.
   * *   ok_alert: The health state of the address pool is Warning and some of the addresses that are referenced by the address pool are unavailable. However, the address pool is deemed normal. In this state, available address pools are normally used for DNS resolution, but unavailable address pools cannot be used for DNS resolution.
   * *   exceptional: The health state of the address pool is Abnormal and some or all of the addresses that are referenced by the address pool are unavailable. In this case, the address pool is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * Remark
   * 
   * @example
   * test
   */
  remark?: string;
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
      remark: 'Remark',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLbStrategy: 'string',
      addressPoolId: 'string',
      addressPoolName: 'string',
      addressPoolType: 'string',
      addresses: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddresses,
      availableStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthStatus: 'string',
      remark: 'string',
      sequenceLbStrategyMode: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.addresses && typeof (this.addresses as any).validate === 'function') {
      (this.addresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAddressPoolsResponseBodyAddressPools extends $dara.Model {
  addressPool?: ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPool[];
  static names(): { [key: string]: string } {
    return {
      addressPool: 'AddressPool',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPool: { 'type': 'array', 'itemType': ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPool },
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

export class ListCloudGtmAddressPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The address pools.
   */
  addressPools?: ListCloudGtmAddressPoolsResponseBodyAddressPools;
  /**
   * @remarks
   * Current page number, starting at **1**, default is **1**.
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
   * Total number of entries in the address pool.
   * 
   * @example
   * 11
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
      addressPools: 'AddressPools',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPools: ListCloudGtmAddressPoolsResponseBodyAddressPools,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
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

