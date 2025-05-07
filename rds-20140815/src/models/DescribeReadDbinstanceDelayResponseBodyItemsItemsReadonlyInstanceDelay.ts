// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay } from "./DescribeReadDbinstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay";


export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay extends $dara.Model {
  readonlyInstanceDelay?: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay[];
  static names(): { [key: string]: string } {
    return {
      readonlyInstanceDelay: 'ReadonlyInstanceDelay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      readonlyInstanceDelay: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay },
    };
  }

  validate() {
    if(Array.isArray(this.readonlyInstanceDelay)) {
      $dara.Model.validateArray(this.readonlyInstanceDelay);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

