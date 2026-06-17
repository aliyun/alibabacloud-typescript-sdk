// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetricRuleResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to overwrite. Valid values:
   * 
   * - true: overwrites. The resources submitted this time overwrite the previously associated resources. That is, full modification is performed.
   * 
   * - false: does not overwrite. The resources submitted this time do not overwrite the previously associated resources (the associated resources are the historical associated resources plus the resources submitted this time). That is, incremental modification is performed.
   * 
   * @example
   * false
   */
  overwrite?: string;
  /**
   * @remarks
   * The associated resources. The value is in the JSON array format.
   * > A maximum of 100 resource instances can be added at a time, and an alert rule can be associated with a maximum of 3,000 instances.
   * >
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

