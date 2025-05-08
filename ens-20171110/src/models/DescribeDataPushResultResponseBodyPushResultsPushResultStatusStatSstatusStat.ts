// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds } from "./DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSstatusStatRegionIds";


export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStat extends $dara.Model {
  /**
   * @remarks
   * The total number of ENS nodes.
   * 
   * @example
   * 2
   */
  regionIdCount?: number;
  /**
   * @remarks
   * The push status of data files on the ENS node.
   */
  regionIds?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds;
  /**
   * @remarks
   * The push status. The value is of the enumeration type. Valid values: SUCCESS FAILED PUSHING
   * 
   * @example
   * FAILED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      regionIdCount: 'RegionIdCount',
      regionIds: 'RegionIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIdCount: 'number',
      regionIds: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds,
      status: 'string',
    };
  }

  validate() {
    if(this.regionIds && typeof (this.regionIds as any).validate === 'function') {
      (this.regionIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

