// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords } from "./TestRuleV4responseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords";
import { TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase } from "./TestRuleV4responseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase";


export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoList extends $dara.Model {
  cid?: string[];
  keyWords?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords[];
  phrase?: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase;
  static names(): { [key: string]: string } {
    return {
      cid: 'Cid',
      keyWords: 'KeyWords',
      phrase: 'Phrase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cid: { 'type': 'array', 'itemType': 'string' },
      keyWords: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListKeyWords },
      phrase: TestRuleV4ResponseBodyDataHitRuleReviewInfoListConditionHitInfoListPhrase,
    };
  }

  validate() {
    if(Array.isArray(this.cid)) {
      $dara.Model.validateArray(this.cid);
    }
    if(Array.isArray(this.keyWords)) {
      $dara.Model.validateArray(this.keyWords);
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

