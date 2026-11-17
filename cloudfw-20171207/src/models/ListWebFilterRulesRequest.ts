// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFilterRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than or equal to 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule action for exact matching. Valid values:
   * - **Allow**: Allows the request.
   * - **Alert**: Monitors the request.
   * - **Deny**: Blocks the request.
   * 
   * @example
   * Deny
   */
  ruleAction?: string;
  /**
   * @remarks
   * The ID of the web filtering rule for exact matching.
   * 
   * @example
   * wfr-8c1d2e3f4a5b6c7d
   */
  webFilterRuleId?: string;
  /**
   * @remarks
   * The ID of the web filtering template for exact matching.
   * 
   * @example
   * wft-3f2a9c1d4b5e6f70
   */
  webFilterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      ruleAction: 'RuleAction',
      webFilterRuleId: 'WebFilterRuleId',
      webFilterTemplateId: 'WebFilterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      ruleAction: 'string',
      webFilterRuleId: 'string',
      webFilterTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

