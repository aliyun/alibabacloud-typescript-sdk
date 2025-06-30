// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion } from "./DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion";


export class DescribeSyncEcsHostTaskResponseBodyEcsRegions extends $dara.Model {
  ecsRegion?: DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion[];
  static names(): { [key: string]: string } {
    return {
      ecsRegion: 'EcsRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsRegion: { 'type': 'array', 'itemType': DescribeSyncEcsHostTaskResponseBodyEcsRegionsEcsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.ecsRegion)) {
      $dara.Model.validateArray(this.ecsRegion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

