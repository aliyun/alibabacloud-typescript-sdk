// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressPoolLbStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Load balancing policy among addresses in the address pool:
   * - round_robin: Round-robin, for any source of DNS resolution requests, all addresses are returned. The order of all addresses is rotated each time.
   * - sequence: Sequential, for any source of DNS resolution requests, the address with the smaller sequence number (the sequence number indicates the priority of address returns, with smaller numbers having higher priority) is returned. If the address with the smaller sequence number is unavailable, the next address with a smaller sequence number is returned.
   * - weight: Weighted, supports setting different weight values for each address, realizing the return of addresses according to the weight ratio for resolution queries.
   * - source_nearest: Source-nearest, i.e., intelligent resolution function, where GTM can return different addresses based on the source of different DNS resolution requests, achieving the effect of users accessing nearby.
   * 
   * @example
   * sequence
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
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

