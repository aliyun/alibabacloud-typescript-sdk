// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo } from "./DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo";


export class DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytes extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataUnexBigKeysOfBytesKeyInfo },
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

