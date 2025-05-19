// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetricRuleTargetsResponseBodyFailIdsTargetIds extends $dara.Model {
  targetId?: string[];
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetId)) {
      $dara.Model.validateArray(this.targetId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

