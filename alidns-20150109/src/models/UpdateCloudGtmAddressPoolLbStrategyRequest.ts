// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressPoolLbStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The load balancing policy for the addresses in the address pool.
   * 
   * - round_robin: Round robin. For each DNS query, all addresses are returned in a rotating order.
   * 
   * - sequence: Sequence. The address with the highest priority is returned. Priority is determined by the ordinal number of an address. A smaller ordinal number indicates a higher priority. If an address is unavailable, the address with the next highest priority is returned.
   * 
   * - weight: Weight. DNS queries are resolved based on the weight that you set for each address.
   * 
   * - source_nearest: Source nearest. This is an intelligent DNS resolution feature. GTM returns an address based on the source of the DNS query. This directs users to the nearest resource.
   * 
   * @example
   * sequence
   */
  addressLbStrategy?: string;
  /**
   * @remarks
   * The unique ID of the address pool.
   * 
   * @example
   * pool-89528023225442****
   */
  addressPoolId?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. The token must be unique for each request and can contain up to 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The recovery mode when the load balancing policy is \\`sequence\\`.
   * 
   * - preemptive: Preemptive mode. If a higher-priority address recovers, it is used preferentially.
   * 
   * - non_preemptive: Non-preemptive mode. If a higher-priority address recovers, the current address continues to be used.
   * 
   * @example
   * preemptive
   */
  sequenceLbStrategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressLbStrategy: 'AddressLbStrategy',
      addressPoolId: 'AddressPoolId',
      clientToken: 'ClientToken',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressLbStrategy: 'string',
      addressPoolId: 'string',
      clientToken: 'string',
      sequenceLbStrategyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

