// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItem } from "./DescribeDbresourceGroupResponseBodyResourceGroupItemsResourceGroupItem";


export class DescribeDBResourceGroupResponseBodyResourceGroupItems extends $dara.Model {
  resourceGroupItem?: DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItem[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupItem: 'ResourceGroupItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupItem: { 'type': 'array', 'itemType': DescribeDBResourceGroupResponseBodyResourceGroupItemsResourceGroupItem },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupItem)) {
      $dara.Model.validateArray(this.resourceGroupItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

