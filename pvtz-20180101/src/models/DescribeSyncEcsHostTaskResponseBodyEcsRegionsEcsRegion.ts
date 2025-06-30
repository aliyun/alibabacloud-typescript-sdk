// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds } from "./DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds";


export class DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion extends $dara.Model {
  /**
   * @remarks
   * The synchronized region IDs.
   */
  regionIds?: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds;
  /**
   * @remarks
   * The user ID to which the region belongs. This parameter is used in cross-account synchronization scenarios.
   * 
   * @example
   * 141339776561****
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      regionIds: 'RegionIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionIds: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegionRegionIds,
      userId: 'number',
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

