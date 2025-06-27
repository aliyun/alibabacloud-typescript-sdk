// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigLbStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the returned results are displayed. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US** (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The new policy for load balancing between address pools. Valid values:
   * 
   * *   round_robin: All address pools are returned for Domain Name System (DNS) requests from any source. All address pools are sorted in round-robin mode each time they are returned.
   * *   sequence: The address pool with the smallest sequence number is preferentially returned for DNS requests from any source. The sequence number indicates the priority for returning the address pool. A smaller sequence number indicates a higher priority. If the address pool with the smallest sequence number is unavailable, the address pool with the second smallest sequence number is returned.
   * *   weight: You can set a different weight value for each address pool. This way, address pools are returned based on the weight values.
   * *   source_nearest: GTM returns different address pools based on the sources of DNS requests. This way, users can access nearby address pools.
   * 
   * @example
   * sequence
   */
  addressPoolLbStrategy?: string;
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
   * The configuration ID of the access domain name. Two configuration IDs exist when the access domain name is bound to the same GTM instance but an A record and an AAAA record are configured for the access domain name. The configuration ID uniquely identifies a configuration.
   * 
   * You can call the [ListCloudGtmInstanceConfigs](~~ListCloudGtmInstanceConfigs~~) operation to query the configuration ID of the desired access domain name.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance for which you want to modify the load balancing policy.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  /**
   * @remarks
   * The mode used if the address pool with the smallest sequence number is recovered. This parameter is required when AddressPoolLbStrategy is set to sequence. Valid values:
   * 
   * *   preemptive: The address pool with the smallest sequence number is preferentially used if this address pool is recovered.
   * *   non_preemptive: The current address pool is still used even if the address pool with the smallest sequence number is recovered.
   * 
   * @example
   * preemptive
   */
  sequenceLbStrategyMode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPoolLbStrategy: 'AddressPoolLbStrategy',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressPoolLbStrategy: 'string',
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
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

