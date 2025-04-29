// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem } from "./DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem";


export class DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValues extends $dara.Model {
  valueItem?: DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem[];
  static names(): { [key: string]: string } {
    return {
      valueItem: 'ValueItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      valueItem: { 'type': 'array', 'itemType': DescribeAccountAttributesResponseBodyAccountAttributeItemsAccountAttributeItemAttributeValuesValueItem },
    };
  }

  validate() {
    if(Array.isArray(this.valueItem)) {
      $dara.Model.validateArray(this.valueItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

