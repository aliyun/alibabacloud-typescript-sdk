// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetricRuleResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The resources that are associated with the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"instanceId":"i-uf6hm9lnlzsarrc7****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rr-bp18017n6iolv****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

