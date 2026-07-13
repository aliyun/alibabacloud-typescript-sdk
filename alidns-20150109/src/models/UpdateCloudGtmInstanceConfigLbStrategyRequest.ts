// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmInstanceConfigLbStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh-CN**: Chinese.
   * 
   * - **en-US**: English. This is the default value.
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The load balancing policy for the address pools. Valid values:
   * 
   * - round_robin: Returns all address pools for any DNS request. The address pools are rotated for each request.
   * 
   * - sequence: Returns the address pool with the smallest ordinal number. The smaller the ordinal number, the higher the priority. If the primary address pool is unavailable, the next address pool in the sequence is used.
   * 
   * - weight: Distributes DNS requests to address pools based on their configured weights.
   * 
   * - source_nearest: Returns an address pool based on the proximity of the DNS request source. This implements intelligent DNS resolution and directs users to the nearest access point.
   * 
   * @example
   * sequence
   */
  addressPoolLbStrategy?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. The token must be unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance configuration. A GTM instance can have multiple configurations for the same domain name, such as one for A records and another for AAAA records. The ConfigId uniquely identifies the configuration that you want to modify.
   * 
   * For more information, see [ListCloudGtmInstanceConfigs](https://help.aliyun.com/document_detail/2797349.html).
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3h***
   */
  instanceId?: string;
  /**
   * @remarks
   * The recovery mode for a primary address pool when the load balancing policy is set to sequence. Valid values:
   * 
   * - preemptive: The system switches back to the primary address pool as soon as it recovers.
   * 
   * - non_preemptive: The system continues to use the current address pool even after the primary address pool recovers.
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

