// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo } from "./CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo";


export class CreateCacheAnalysisJobResponseBodyDataBigKeys extends $dara.Model {
  keyInfo?: CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo[];
  static names(): { [key: string]: string } {
    return {
      keyInfo: 'KeyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyInfo: { 'type': 'array', 'itemType': CreateCacheAnalysisJobResponseBodyDataBigKeysKeyInfo },
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

