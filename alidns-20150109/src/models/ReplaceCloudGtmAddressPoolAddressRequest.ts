// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceCloudGtmAddressPoolAddressRequestAddresses extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the address.
   * 
   * - If you specify this parameter, all existing addresses in the address pool are deleted and replaced with the specified addresses.
   * 
   * - If you leave this parameter empty, all existing addresses in the address pool are deleted.
   * 
   * @example
   * addr-89636516932803****
   */
  addressId?: string;
  /**
   * @remarks
   * The list of DNS request sources.
   */
  requestSource?: string[];
  /**
   * @remarks
   * The serial number, which determines the priority of the address. A smaller number indicates a higher priority. This setting applies to the updated addresses.
   * 
   * @example
   * 1
   */
  serialNumber?: number;
  /**
   * @remarks
   * The weight of the address. Valid values: 1 to 100. You can set a different weight for each address. DNS queries are then resolved based on the weight ratio. This setting applies to the updated addresses.
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
   * The response language. Valid values:
   * 
   * - **zh-CN**: Chinese
   * 
   * - **en-US** (Default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The unique ID of the address pool to update.
   * 
   * @example
   * pool-89618921167339****
   */
  addressPoolId?: string;
  /**
   * @remarks
   * The list of addresses.
   */
  addresses?: ReplaceCloudGtmAddressPoolAddressRequestAddresses[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Ensure the client token is unique for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
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

