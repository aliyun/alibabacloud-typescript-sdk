// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The target compute resource rule for the cluster.
   * 
   * @example
   * selectdb.2xlarge
   */
  clusterClass?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-nwy3jv1oa02-be
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * selectdb-cn-7213cjv****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The start time of the time-based elastic rule. The time is in the HH:mm format.
   * 
   * @example
   * 00:00
   */
  elasticRuleStartTime?: string;
  /**
   * @remarks
   * The execution period.
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
  /**
   * @remarks
   * The cloud service type.
   * 
   * @example
   * selectdb
   */
  product?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5467
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      product: 'Product',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      clusterId: 'string',
      dbInstanceId: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      product: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
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

