// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem } from "./DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem";


export class DescribeInstanceAutoRenewalAttributeResponseBodyItems extends $dara.Model {
  item?: DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeInstanceAutoRenewalAttributeResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

