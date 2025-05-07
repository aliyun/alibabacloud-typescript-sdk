// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo } from "./UploadDataSyncForLlmresponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo";


export class UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHit extends $dara.Model {
  conditionHitInfo?: UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo[];
  static names(): { [key: string]: string } {
    return {
      conditionHitInfo: 'ConditionHitInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionHitInfo: { 'type': 'array', 'itemType': UploadDataSyncForLLMResponseBodyDataResultInfoRulesRuleHitInfoHitConditionHitInfo },
    };
  }

  validate() {
    if(Array.isArray(this.conditionHitInfo)) {
      $dara.Model.validateArray(this.conditionHitInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

