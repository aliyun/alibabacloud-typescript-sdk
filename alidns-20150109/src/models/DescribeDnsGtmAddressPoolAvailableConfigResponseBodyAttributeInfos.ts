// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo } from "./DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo";


export class DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos extends $dara.Model {
  attributeInfo?: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo[];
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: { 'type': 'array', 'itemType': DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.attributeInfo)) {
      $dara.Model.validateArray(this.attributeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

