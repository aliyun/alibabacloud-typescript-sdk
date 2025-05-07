// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReadDBInstanceDelayResponseBodyItemsItems } from "./DescribeReadDbinstanceDelayResponseBodyItemsItems";


export class DescribeReadDBInstanceDelayResponseBodyItems extends $dara.Model {
  items?: DescribeReadDBInstanceDelayResponseBodyItemsItems[];
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

