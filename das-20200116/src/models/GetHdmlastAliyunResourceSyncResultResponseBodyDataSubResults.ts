// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult } from "./GetHdmlastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult";


export class GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResults extends $dara.Model {
  resourceSyncSubResult?: GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult[];
  static names(): { [key: string]: string } {
    return {
      resourceSyncSubResult: 'ResourceSyncSubResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceSyncSubResult: { 'type': 'array', 'itemType': GetHDMLastAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult },
    };
  }

  validate() {
    if(Array.isArray(this.resourceSyncSubResult)) {
      $dara.Model.validateArray(this.resourceSyncSubResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

