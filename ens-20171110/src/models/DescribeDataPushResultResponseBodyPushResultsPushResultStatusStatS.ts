// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat } from "./DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSstatusStat";


export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatS extends $dara.Model {
  statusStat?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat },
    };
  }

  validate() {
    if(Array.isArray(this.statusStat)) {
      $dara.Model.validateArray(this.statusStat);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

