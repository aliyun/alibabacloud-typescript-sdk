// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo } from "./UploadDataSyncForLlmresponseBodyDataResultInfoRulesRuleHitInfoConditionInfo";
import { UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHit } from "./UploadDataSyncForLlmresponseBodyDataResultInfoRulesRuleHitInfoHit";


export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfo extends $dara.Model {
  conditionInfo?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo;
  hit?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHit;
  rid?: string;
  tid?: string;
  static names(): { [key: string]: string } {
    return {
      conditionInfo: 'ConditionInfo',
      hit: 'Hit',
      rid: 'Rid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionInfo: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoConditionInfo,
      hit: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHit,
      rid: 'string',
      tid: 'string',
    };
  }

  validate() {
    if(this.conditionInfo && typeof (this.conditionInfo as any).validate === 'function') {
      (this.conditionInfo as any).validate();
    }
    if(this.hit && typeof (this.hit as any).validate === 'function') {
      (this.hit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

