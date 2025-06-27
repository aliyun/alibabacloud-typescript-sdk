// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource } from "./ListCloudGtmInstanceConfigsResponseBodyInstanceConfigsInstanceConfigAddressPoolsAddressPoolRequestSource";


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

