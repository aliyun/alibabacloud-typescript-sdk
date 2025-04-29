// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory } from "./DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory";


export class DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistories extends $dara.Model {
  autoProvisioningGroupHistory?: DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory[];
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupHistory: 'AutoProvisioningGroupHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupHistory: { 'type': 'array', 'itemType': DescribeAutoProvisioningGroupHistoryResponseBodyAutoProvisioningGroupHistoriesAutoProvisioningGroupHistory },
    };
  }

  validate() {
    if(Array.isArray(this.autoProvisioningGroupHistory)) {
      $dara.Model.validateArray(this.autoProvisioningGroupHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

