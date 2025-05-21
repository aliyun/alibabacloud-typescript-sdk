// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray } from "./DescribeDbclusterAccessWhiteListResponseBodyItemsIparray";


export class DescribeDBClusterAccessWhiteListResponseBodyItems extends $dara.Model {
  IPArray?: DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray[];
  static names(): { [key: string]: string } {
    return {
      IPArray: 'IPArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPArray: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhiteListResponseBodyItemsIPArray },
    };
  }

  validate() {
    if(Array.isArray(this.IPArray)) {
      $dara.Model.validateArray(this.IPArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

