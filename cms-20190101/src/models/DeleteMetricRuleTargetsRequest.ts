// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetricRuleTargetsRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * ruleId-xxxxxx
   */
  ruleId?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  targetIds?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
      targetIds: 'TargetIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: 'string',
      targetIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetIds)) {
      $dara.Model.validateArray(this.targetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

