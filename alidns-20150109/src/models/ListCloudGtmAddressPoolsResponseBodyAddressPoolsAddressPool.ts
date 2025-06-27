// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddresses } from "./ListCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddresses";


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

