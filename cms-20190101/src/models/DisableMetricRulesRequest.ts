// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableMetricRulesRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The ID of the alert rule. Valid values of N: 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * detect_87****_HTTP_HttpLatency
   */
  ruleId?: string[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ruleId)) {
      $dara.Model.validateArray(this.ruleId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

