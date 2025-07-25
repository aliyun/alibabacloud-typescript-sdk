// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceCloudGtmAddressPoolAddressRequestAddresses extends $dara.Model {
  /**
   * @remarks
   * The ID of the new address. This ID uniquely identifies the address.
   * 
   * *   If you specify this parameter, the original addresses in the address pool will be deleted and replaced with new addresses.
   * *   If you do not specify this parameter, all addresses in the address pool will be deleted and the address pool will be left empty.
   * 
   * @example
   * addr-89636516932803**44
   */
  addressId?: string;
  /**
   * @remarks
   * The DNS request sources.
   */
  requestSource?: string[];
  /**
   * @remarks
   * The sequence number that specifies the priority for returning the new address. A smaller sequence number specifies a higher priority. This setting takes effect for new addresses.
   * 
   * @example
   * 1
   */
  serialNumber?: number;
  /**
   * @remarks
   * The weight value of the new address. You can set a different weight value for each address. This way, addresses are returned based on the weight values for Domain Name System (DNS) requests. A weight value must be an integer that ranges from 1 to 100. This setting takes effect for new addresses.
   * 
   * @example
   * 1
   */
  weightValue?: number;
  static names(): { [key: string]: string } {
    return {
      addressId: 'AddressId',
      requestSource: 'RequestSource',
      serialNumber: 'SerialNumber',
      weightValue: 'WeightValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressId: 'string',
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

export class ReplaceCloudGtmAddressPoolAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US (default)**: English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the address pool for which you want to replace addresses. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89618921167339**24
   */
  addressPoolId?: string;
  /**
   * @remarks
   * The addresses.
   */
  addresses?: ReplaceCloudGtmAddressPoolAddressRequestAddresses[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressPoolId: 'AddressPoolId',
      addresses: 'Addresses',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressPoolId: 'string',
      addresses: { 'type': 'array', 'itemType': ReplaceCloudGtmAddressPoolAddressRequestAddresses },
      clientToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

