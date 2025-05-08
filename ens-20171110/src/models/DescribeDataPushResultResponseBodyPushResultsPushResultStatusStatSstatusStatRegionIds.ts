// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId } from "./DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSstatusStatRegionIdsRegionId";


export class DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIds extends $dara.Model {
  regionId?: DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: { 'type': 'array', 'itemType': DescribeDataPushResultResponseBodyPushResultsPushResultStatusStatSStatusStatRegionIdsRegionId },
    };
  }

  validate() {
    if(Array.isArray(this.regionId)) {
      $dara.Model.validateArray(this.regionId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

