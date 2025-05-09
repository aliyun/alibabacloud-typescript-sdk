// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeliveryAddressResponseBodyAddressesArea } from "./DescribeDeliveryAddressResponseBodyAddressesArea";
import { DescribeDeliveryAddressResponseBodyAddressesCity } from "./DescribeDeliveryAddressResponseBodyAddressesCity";
import { DescribeDeliveryAddressResponseBodyAddressesProvince } from "./DescribeDeliveryAddressResponseBodyAddressesProvince";
import { DescribeDeliveryAddressResponseBodyAddressesTown } from "./DescribeDeliveryAddressResponseBodyAddressesTown";


export class DescribeDeliveryAddressResponseBodyAddresses extends $dara.Model {
  area?: DescribeDeliveryAddressResponseBodyAddressesArea;
  city?: DescribeDeliveryAddressResponseBodyAddressesCity;
  /**
   * @example
   * Alice
   */
  contacts?: string;
  /**
   * @example
   * true
   */
  defaultAddress?: boolean;
  detail?: string;
  /**
   * @example
   * 1381111****
   */
  mobile?: string;
  /**
   * @example
   * 03****
   */
  postalCode?: string;
  province?: DescribeDeliveryAddressResponseBodyAddressesProvince;
  town?: DescribeDeliveryAddressResponseBodyAddressesTown;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      city: 'City',
      contacts: 'Contacts',
      defaultAddress: 'DefaultAddress',
      detail: 'Detail',
      mobile: 'Mobile',
      postalCode: 'PostalCode',
      province: 'Province',
      town: 'Town',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: DescribeDeliveryAddressResponseBodyAddressesArea,
      city: DescribeDeliveryAddressResponseBodyAddressesCity,
      contacts: 'string',
      defaultAddress: 'boolean',
      detail: 'string',
      mobile: 'string',
      postalCode: 'string',
      province: DescribeDeliveryAddressResponseBodyAddressesProvince,
      town: DescribeDeliveryAddressResponseBodyAddressesTown,
    };
  }

  validate() {
    if(this.area && typeof (this.area as any).validate === 'function') {
      (this.area as any).validate();
    }
    if(this.city && typeof (this.city as any).validate === 'function') {
      (this.city as any).validate();
    }
    if(this.province && typeof (this.province as any).validate === 'function') {
      (this.province as any).validate();
    }
    if(this.town && typeof (this.town as any).validate === 'function') {
      (this.town as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

