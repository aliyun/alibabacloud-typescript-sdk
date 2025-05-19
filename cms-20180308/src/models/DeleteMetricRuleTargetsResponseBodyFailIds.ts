// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds } from "./DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds";


export class DeleteMetricRuleTargetsResponseBodyFailIds extends $dara.Model {
  targetIds?: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds;
  static names(): { [key: string]: string } {
    return {
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetIds: DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds,
    };
  }

  validate() {
    if(this.targetIds && typeof (this.targetIds as any).validate === 'function') {
      (this.targetIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

