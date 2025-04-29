// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute } from "./DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute";


export class DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributes extends $dara.Model {
  reservedInstanceRenewAttribute?: DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      reservedInstanceRenewAttribute: 'ReservedInstanceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedInstanceRenewAttribute: { 'type': 'array', 'itemType': DescribeReservedInstanceAutoRenewAttributeResponseBodyReservedInstanceRenewAttributesReservedInstanceRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.reservedInstanceRenewAttribute)) {
      $dara.Model.validateArray(this.reservedInstanceRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

