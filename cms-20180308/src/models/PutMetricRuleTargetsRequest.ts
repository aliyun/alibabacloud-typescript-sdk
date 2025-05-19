// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutMetricRuleTargetsRequestTargets } from "./PutMetricRuleTargetsRequestTargets";


export class PutMetricRuleTargetsRequest extends $dara.Model {
  actions?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  targets?: PutMetricRuleTargetsRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      regionId: 'RegionId',
      ruleName: 'RuleName',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: 'string',
      regionId: 'string',
      ruleName: 'string',
      targets: { 'type': 'array', 'itemType': PutMetricRuleTargetsRequestTargets },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

