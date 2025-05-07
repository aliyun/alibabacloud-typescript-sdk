// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NextNodeSituations } from "./NextNodeSituations";


export class TestRuleV4ResponseBodyDataHitRuleReviewInfoListBranchInfoList extends $dara.Model {
  /**
   * @example
   * 0
   */
  checkType?: number;
  /**
   * @example
   * 1
   */
  index?: number;
  /**
   * @example
   * a&&b
   */
  lambda?: string;
  name?: string;
  /**
   * @example
   * 2
   */
  nextNodeId?: number;
  situation?: NextNodeSituations;
  triggers?: string[];
  static names(): { [key: string]: string } {
    return {
      checkType: 'CheckType',
      index: 'Index',
      lambda: 'Lambda',
      name: 'Name',
      nextNodeId: 'NextNodeId',
      situation: 'Situation',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkType: 'number',
      index: 'number',
      lambda: 'string',
      name: 'string',
      nextNodeId: 'number',
      situation: NextNodeSituations,
      triggers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.situation && typeof (this.situation as any).validate === 'function') {
      (this.situation as any).validate();
    }
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

