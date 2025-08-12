// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventRuleTargetListRequest extends $dara.Model {
  regionId?: string;
  /**
   * @remarks
   * The name of the event-triggered alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * testRule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

