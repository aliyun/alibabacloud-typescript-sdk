// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasksHealthTask extends $dara.Model {
  port?: number;
  templateId?: string;
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

export class DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasks extends $dara.Model {
  healthTask?: DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasksHealthTask },
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

export class DescribeCloudGtmAddressPoolResponseBodyAddressesAddressRequestSource extends $dara.Model {
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

export class DescribeCloudGtmAddressPoolResponseBodyAddressesAddress extends $dara.Model {
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
  healthTasks?: DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasks;
  manualAvailableStatus?: string;
  name?: string;
  remark?: string;
  requestSource?: DescribeCloudGtmAddressPoolResponseBodyAddressesAddressRequestSource;
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
      healthTasks: DescribeCloudGtmAddressPoolResponseBodyAddressesAddressHealthTasks,
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      requestSource: DescribeCloudGtmAddressPoolResponseBodyAddressesAddressRequestSource,
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

export class DescribeCloudGtmAddressPoolResponseBodyAddresses extends $dara.Model {
  address?: DescribeCloudGtmAddressPoolResponseBodyAddressesAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': DescribeCloudGtmAddressPoolResponseBodyAddressesAddress },
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

export class DescribeCloudGtmAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The load balancing policy for the addresses in the address pool. Valid values:
   * 
   * - round_robin: For a DNS request from any source, all addresses are returned. The addresses are rotated in each response.
   * 
   * - sequence: For a DNS request from any source, the address with the highest priority is returned. Priority is determined by the \\`SerialNumber\\`, where a smaller value indicates a higher priority. If the highest-priority address is unavailable, the address with the next highest priority is returned.
   * 
   * - weight: A weight can be set for each address. DNS requests are resolved based on the specified weight ratio.
   * 
   * - source_nearest: Global Traffic Manager (GTM) returns an address based on the source of the DNS request. This implements proximity-based access for users.
   * 
   * @example
   * round_robin
   */
  addressLbStrategy?: string;
  /**
   * @remarks
   * The unique ID of the address pool.
   * 
   * @example
   * pool-89564674533755****
   */
  addressPoolId?: string;
  /**
   * @remarks
   * The name of the address pool.
   * 
   * @example
   * AddressPool-1
   */
  addressPoolName?: string;
  /**
   * @remarks
   * The type of the address pool. Valid values:
   * 
   * - IPv4
   * 
   * - IPv6
   * 
   * - domain
   * 
   * @example
   * IPv4
   */
  addressPoolType?: string;
  addresses?: DescribeCloudGtmAddressPoolResponseBodyAddresses;
  /**
   * @remarks
   * The availability status of the address pool. Valid values:
   * 
   * - available: Available.
   * 
   * - unavailable: Unavailable.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The time when the address pool was created.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the address pool was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The status of the address pool. Valid values:
   * 
   * - enable: Enabled
   * 
   * - disable: Disabled
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition used to determine the health status of the address pool. Valid values:
   * 
   * - any_ok: At least one address is available.
   * 
   * - p30_ok: At least 30% of the addresses are available.
   * 
   * - p50_ok: At least 50% of the addresses are available.
   * 
   * - p70_ok: At least 70% of the addresses are available.
   * 
   * - all_ok: All addresses are available.
   * 
   * @example
   * any_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health status of the address pool. Valid values:
   * 
   * - ok: The address pool is healthy. All addresses in the address pool are available.
   * 
   * - ok_alert: The address pool is in an alert state. Some addresses are unavailable, but the address pool is still considered healthy. In this state, DNS resolution is performed for available addresses, but not for unavailable addresses.
   * 
   * - exceptional: The address pool is unhealthy. Some or all addresses are unavailable, and the address pool is considered unhealthy.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The notes on the address.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The service recovery mode for a primary address that becomes available again when the load balancing policy is set to \\`sequence\\`. Valid values:
   * 
   * - preemptive: The system preferentially uses the address with a smaller \\`SerialNumber\\`.
   * 
   * - non_preemptive: The system continues to use the current address.
   * 
   * @example
   * preemptive
   */
  sequenceLbStrategyMode?: string;
  /**
   * @remarks
   * The time when the address pool was last modified.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The timestamp that indicates when the address pool was last modified.
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
      requestId: 'RequestId',
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
      addresses: DescribeCloudGtmAddressPoolResponseBodyAddresses,
      availableStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthStatus: 'string',
      remark: 'string',
      requestId: 'string',
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

