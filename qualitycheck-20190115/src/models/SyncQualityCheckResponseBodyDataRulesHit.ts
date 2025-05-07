// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SyncQualityCheckResponseBodyDataRulesHitHitKeyWords } from "./SyncQualityCheckResponseBodyDataRulesHitHitKeyWords";
import { SyncQualityCheckResponseBodyDataRulesHitPhrase } from "./SyncQualityCheckResponseBodyDataRulesHitPhrase";


export class SyncQualityCheckResponseBodyDataRulesHit extends $dara.Model {
  hitKeyWords?: SyncQualityCheckResponseBodyDataRulesHitHitKeyWords[];
  phrase?: SyncQualityCheckResponseBodyDataRulesHitPhrase;
  static names(): { [key: string]: string } {
    return {
      hitKeyWords: 'HitKeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitKeyWords: { 'type': 'array', 'itemType': SyncQualityCheckResponseBodyDataRulesHitHitKeyWords },
      phrase: SyncQualityCheckResponseBodyDataRulesHitPhrase,
    };
  }

  validate() {
    if(Array.isArray(this.hitKeyWords)) {
      $dara.Model.validateArray(this.hitKeyWords);
    }
    if(this.phrase && typeof (this.phrase as any).validate === 'function') {
      (this.phrase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

