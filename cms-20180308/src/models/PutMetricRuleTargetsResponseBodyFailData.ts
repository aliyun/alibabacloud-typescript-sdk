// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutMetricRuleTargetsResponseBodyFailDataTargets } from "./PutMetricRuleTargetsResponseBodyFailDataTargets";


export class PutMetricRuleTargetsResponseBodyFailData extends $dara.Model {
  targets?: PutMetricRuleTargetsResponseBodyFailDataTargets;
  static names(): { [key: string]: string } {
    return {
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targets: PutMetricRuleTargetsResponseBodyFailDataTargets,
    };
  }

  validate() {
    if(this.targets && typeof (this.targets as any).validate === 'function') {
      (this.targets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

