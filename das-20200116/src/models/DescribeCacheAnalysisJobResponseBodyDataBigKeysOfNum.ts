// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo } from "./DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo";


export class DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNum extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataBigKeysOfNumKeyInfo },
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

