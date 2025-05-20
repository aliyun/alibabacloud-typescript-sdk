// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endpointsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  eventTypesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  matchRulesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      endpointsShrink: 'Endpoints',
      eventTypesShrink: 'EventTypes',
      matchRulesShrink: 'MatchRules',
      productName: 'ProductName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointsShrink: 'string',
      eventTypesShrink: 'string',
      matchRulesShrink: 'string',
      productName: 'string',
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

