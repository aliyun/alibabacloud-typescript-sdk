// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo } from "./DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo";


export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNum extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfNumKeyInfo },
    };
  }

  validate() {
    if(Array.isArray(this.keyInfo)) {
      $dara.Model.validateArray(this.keyInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

