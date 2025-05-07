// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestRuleV4ResponseBodyDataHitRuleReviewInfoList } from "./TestRuleV4responseBodyDataHitRuleReviewInfoList";
import { TestRuleV4ResponseBodyDataHitTaskFlowList } from "./TestRuleV4responseBodyDataHitTaskFlowList";
import { TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList } from "./TestRuleV4responseBodyDataUnhitRuleReviewInfoList";


export class TestRuleV4ResponseBodyData extends $dara.Model {
  hitRuleReviewInfoList?: TestRuleV4ResponseBodyDataHitRuleReviewInfoList[];
  hitTaskFlowList?: TestRuleV4ResponseBodyDataHitTaskFlowList[];
  unhitRuleReviewInfoList?: TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList[];
  static names(): { [key: string]: string } {
    return {
      hitRuleReviewInfoList: 'HitRuleReviewInfoList',
      hitTaskFlowList: 'HitTaskFlowList',
      unhitRuleReviewInfoList: 'UnhitRuleReviewInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitRuleReviewInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitRuleReviewInfoList },
      hitTaskFlowList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataHitTaskFlowList },
      unhitRuleReviewInfoList: { 'type': 'array', 'itemType': TestRuleV4ResponseBodyDataUnhitRuleReviewInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.hitRuleReviewInfoList)) {
      $dara.Model.validateArray(this.hitRuleReviewInfoList);
    }
    if(Array.isArray(this.hitTaskFlowList)) {
      $dara.Model.validateArray(this.hitTaskFlowList);
    }
    if(Array.isArray(this.unhitRuleReviewInfoList)) {
      $dara.Model.validateArray(this.unhitRuleReviewInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

