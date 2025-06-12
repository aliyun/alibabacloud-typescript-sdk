// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem } from "./DescribeDbclusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem";


export class DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems extends $dara.Model {
  netInfoItem?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem[];
  static names(): { [key: string]: string } {
    return {
      netInfoItem: 'NetInfoItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItem: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoItemsResponseBodyNetInfoItemsNetInfoItem },
    };
  }

  validate() {
    if(Array.isArray(this.netInfoItem)) {
      $dara.Model.validateArray(this.netInfoItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

