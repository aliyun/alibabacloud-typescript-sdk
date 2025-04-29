// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem } from "./DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem";


export class DescribeAccountAttributesResponseBodyAccountAttributeItems extends $dara.Model {
  accountAttributeItem?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem[];
  static names(): { [key: string]: string } {
    return {
      accountAttributeItem: 'AccountAttributeItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttributeItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItem },
    };
  }

  validate() {
    if(Array.isArray(this.accountAttributeItem)) {
      $dara.Model.validateArray(this.accountAttributeItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

