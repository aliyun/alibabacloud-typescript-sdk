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

