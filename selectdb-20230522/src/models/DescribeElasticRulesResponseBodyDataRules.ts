// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The rule for computing resources of the required cluster.
   * 
   * @example
   * selectdb.2xlarge
   */
  clusterClass?: string;
  /**
   * @remarks
   * The time when you want to execute the scheduled scaling rule.
   * 
   * @example
   * 00:00
   */
  elasticRuleStartTime?: string;
  /**
   * @remarks
   * The execution cycle.
   * 
   * Valid value:
   * 
   * *   Day
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 5467
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

