// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmAddressPoolResponseBodyAddresses } from "./DescribeCloudGtmAddressPoolResponseBodyAddresses";


export class DescribeCloudGtmAddressPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * Load balancing policy among addresses in the address pool:
   * - round_robin: Round-robin, where for any source of DNS resolution requests, all addresses are returned, with a rotation of the order for every request.
   * - sequence: Sequential, where for any source of DNS resolution requests, the address with the lower sequence number (indicating a higher priority, the smaller the number, the higher the priority) is returned. If the address with the lower sequence number is unavailable, the next address with a lower sequence number is returned.
   * - weight: Weighted, supporting the setting of different weight values for each address to realize returning addresses according to the weight ratio of query resolutions.
   * - source_nearest: Source-nearest, also known as intelligent resolution, where GTM can return different addresses based on the source of different DNS resolution requests, achieving the effect of users accessing nearby servers.
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
   * pool-89564674533755**96
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
  addresses?: DescribeCloudGtmAddressPoolResponseBodyAddresses;
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
   * *   ok_alert: The health state of the address pool is warning and some of the addresses that are referenced by the address pool are unavailable. However, the address pool is deemed normal. In this case, only the available addresses are returned for Domain Name System (DNS) requests.
   * *   exceptional: The health state of the address pool is abnormal and some or all of the addresses that are referenced by the address pool are unavailable. In this case, the address pool is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * Remarks for the address.
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
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  /**
   * @remarks
   * The mode used if the address with the smallest sequence number is recovered. This parameter is returned only when the policy for load balancing between addresses is sequence. Valid values:
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
   * The last modification time of the address pool.
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

