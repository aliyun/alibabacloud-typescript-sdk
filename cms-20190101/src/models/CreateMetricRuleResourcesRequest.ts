// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetricRuleResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite existing resources. Valid values:
   * 
   * *   true: The resources submitted this time overwrite the previously associated resources.
   * *   false: The resources submitted this time do not overwrite the previously associated resources. The associated resources after submission include the previously associated resources and the resources submitted this time.
   * 
   * @example
   * false
   */
  overwrite?: string;
  /**
   * @remarks
   * The resources that are associated with the alert rule. Set the value to a JSON array.
   * 
   * >  You can add up to 100 resources each time. An alert rule can be associated with up to 3,000 resources.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"instanceId":"i-a2d5q7pm3f9yr29e****"}]
   */
  resources?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * i-2ze3w55tr2rcpejpcfap_59c96b85-0339-4f35-ba66-ae4e34d3****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      overwrite: 'Overwrite',
      resources: 'Resources',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overwrite: 'string',
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

