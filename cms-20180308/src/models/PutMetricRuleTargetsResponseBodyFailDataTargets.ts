// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutMetricRuleTargetsResponseBodyFailDataTargetsTarget } from "./PutMetricRuleTargetsResponseBodyFailDataTargetsTarget";


export class PutMetricRuleTargetsResponseBodyFailDataTargets extends $dara.Model {
  target?: PutMetricRuleTargetsResponseBodyFailDataTargetsTarget[];
  static names(): { [key: string]: string } {
    return {
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: { 'type': 'array', 'itemType': PutMetricRuleTargetsResponseBodyFailDataTargetsTarget },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

