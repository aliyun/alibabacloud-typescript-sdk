// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel } from "./DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel";


export class DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCount extends $dara.Model {
  expiryLevel?: DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel[];
  static names(): { [key: string]: string } {
    return {
      expiryLevel: 'ExpiryLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiryLevel: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataExpiryKeysLevelCountExpiryLevel },
    };
  }

  validate() {
    if(Array.isArray(this.expiryLevel)) {
      $dara.Model.validateArray(this.expiryLevel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

