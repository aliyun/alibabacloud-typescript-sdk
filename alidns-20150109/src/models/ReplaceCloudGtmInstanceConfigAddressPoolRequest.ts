// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceCloudGtmInstanceConfigAddressPoolRequestAddressPools extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool. This ID uniquely identifies the address pool.
   * 
   * *   If you specify this parameter, the address pools that are associated with the desired instance are removed and the instance is associated with new address pools.
   * *   If this parameter is left empty, the address pools that are associated with the desired instance are removed and no address pool is associated with the instance.
   * 
   * @example
   * pool-89564542105737**12
   */
  addressPoolId?: string;
  /**
   * @remarks
   * The DNS request sources.
   */
  requestSource?: string[];
  /**
   * @remarks
   * The sequence number of the new address pool. The address pool with the smallest sequence number is preferentially returned for DNS requests from any source. The sequence number specifies the priority for returning the address pool. A smaller sequence number specifies a higher priority.
   * 
   * @example
   * 1
   */
  serialNumber?: number;
  /**
   * @remarks
   * The weight value of the new address pool. You can set a different weight value for each address pool. This way, address pools are returned based on the weight values for Domain Name System (DNS) requests. A weight value must be an integer that ranges from 1 to 100.
   * 
   * @example
   * 1
   */
  weightValue?: number;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      requestSource: 'RequestSource',
      serialNumber: 'SerialNumber',
      weightValue: 'WeightValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
      requestSource: { 'type': 'array', 'itemType': 'string' },
      serialNumber: 'number',
      weightValue: 'number',
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

export class ReplaceCloudGtmInstanceConfigAddressPoolRequest extends $dara.Model {
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
   * The address pools.
   */
  addressPools?: ReplaceCloudGtmInstanceConfigAddressPoolRequestAddressPools[];
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
   * You can call the [ListCloudGtmInstanceConfigs](~~ListCloudGtmInstanceConfigs~~) operation to query the configuration ID of the access domain name.
   * 
   * @example
   * Config-000**11
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance for which you want to change address pools.
   * 
   * @example
   * gtm-cn-wwo3a3hbz**
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPools: 'AddressPools',
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressPools: { 'type': 'array', 'itemType': ReplaceCloudGtmInstanceConfigAddressPoolRequestAddressPools },
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressPools)) {
      $dara.Model.validateArray(this.addressPools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

