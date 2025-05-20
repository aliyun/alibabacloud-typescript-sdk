// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo } from "./DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo";


export class DescribeCacheAnalysisJobResponseBodyDataBigKeys extends $dara.Model {
  keyInfo?: DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': DescribeCacheAnalysisJobResponseBodyDataBigKeysKeyInfo },
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

