// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The rule for computing resources of the required cluster.
   * 
   * This parameter is required.
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
   * selectdb-xxxb9f2w-be
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
   * The time when you want to execute the scheduled scaling rule.
   * 
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * Day
   */
  executionPeriod?: string;
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
  static names(): { [key: string]: string } {
    return {
      clusterClass: 'ClusterClass',
      clusterId: 'ClusterId',
      dbInstanceId: 'DbInstanceId',
      elasticRuleStartTime: 'ElasticRuleStartTime',
      executionPeriod: 'ExecutionPeriod',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterClass: 'string',
      clusterId: 'string',
      dbInstanceId: 'string',
      elasticRuleStartTime: 'string',
      executionPeriod: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

