// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigs } from "./DescribeCloudGtmAddressReferenceResponseBodyAddressPoolsAddressPoolInstanceConfigs";


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

