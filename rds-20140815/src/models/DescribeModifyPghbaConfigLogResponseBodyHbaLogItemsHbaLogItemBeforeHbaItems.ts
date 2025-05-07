// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem } from "./DescribeModifyPghbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem";


export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItems extends $dara.Model {
  hbaItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem[];
  static names(): { [key: string]: string } {
    return {
      hbaItem: 'HbaItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItemBeforeHbaItemsHbaItem },
    };
  }

  validate() {
    if(Array.isArray(this.hbaItem)) {
      $dara.Model.validateArray(this.hbaItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

