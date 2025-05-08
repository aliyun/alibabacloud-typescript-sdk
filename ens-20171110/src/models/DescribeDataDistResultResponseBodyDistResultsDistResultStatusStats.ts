// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat } from "./DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat";


export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStats extends $dara.Model {
  statusStat?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat[];
  static names(): { [key: string]: string } {
    return {
      statusStat: 'StatusStat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statusStat: { 'type': 'array', 'itemType': DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat },
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

