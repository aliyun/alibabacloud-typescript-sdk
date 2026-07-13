// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceCloudGtmInstanceConfigAddressPoolRequestAddressPools extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the address pool.
   * 
   * - If you specify this parameter, the existing address pools associated with the target instance are deleted and replaced with the address pools that you specify.
   * 
   * - If you leave this parameter empty, all address pools associated with the target instance are deleted.
   * 
   * @example
   * pool-89564542105737****
   */
  addressPoolId?: string;
  /**
   * @remarks
   * A list of request sources.
   */
  requestSource?: string[];
  /**
   * @remarks
   * The ordinal number. For DNS requests from any source, address pools with smaller ordinal numbers are returned first. A smaller ordinal number indicates a higher priority. This parameter takes effect for the updated address pools.
   * 
   * @example
   * 1
   */
  serialNumber?: number;
  /**
   * @remarks
   * The weight of the address pool. Valid values are integers from 1 to 100. You can set a different weight for each address pool. DNS queries are resolved based on the specified weights. This parameter takes effect for the updated address pools.
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
   * A list of address pools.
   */
  addressPools?: ReplaceCloudGtmInstanceConfigAddressPoolRequestAddressPools[];
  /**
   * @remarks
   * A client-generated token that you use to ensure the idempotence of the request. Make sure that the token is unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance configuration. For the same access domain name and GTM instance, you can configure both A and AAAA records. In this case, the GTM instance has two instance configurations. The ConfigId parameter uniquely identifies an instance configuration.
   * 
   * Call the [ListCloudGtmInstanceConfigs](https://help.aliyun.com/document_detail/2797349.html) operation to query the ConfigId of the instance configuration.
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the GTM 3.0 instance for which you want to replace address pools.
   * 
   * @example
   * gtm-cn-wwo3a3hb****
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

