// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem } from "./DescribeModifyPghbaConfigLogResponseBodyHbaLogItemsHbaLogItem";


export class DescribeModifyPGHbaConfigLogResponseBodyHbaLogItems extends $dara.Model {
  hbaLogItem?: DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem[];
  static names(): { [key: string]: string } {
    return {
      hbaLogItem: 'HbaLogItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaLogItem: { 'type': 'array', 'itemType': DescribeModifyPGHbaConfigLogResponseBodyHbaLogItemsHbaLogItem },
    };
  }

  validate() {
    if(Array.isArray(this.hbaLogItem)) {
      $dara.Model.validateArray(this.hbaLogItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

