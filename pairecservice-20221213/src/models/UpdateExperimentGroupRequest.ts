// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration of the experiment group.
   * 
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the crowd for crowd targeting. You can obtain this ID by calling the ListCrowds API.
   * 
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * The type of crowd targeting for the experiment group. Valid values:
   * 
   * - All: all traffic
   * 
   * - Filter: traffic that matches the filter condition
   * 
   * - CrowdId: traffic from the specified crowd ID
   * 
   * - Random: a random percentage of traffic
   * 
   * @example
   * All
   */
  crowdTargetType?: string;
  /**
   * @remarks
   * The ID of the debug crowd. You can obtain this ID by calling the ListCrowds API.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * A comma-separated list of UIDs for debug users. The UIDs can belong to Alibaba Cloud main accounts or sub-accounts.
   * 
   * @example
   * user1,user2,user3
   */
  debugUsers?: string;
  /**
   * @remarks
   * The description of the experiment group.
   * 
   * This parameter is required.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The time duration for traffic distribution.
   * 
   * @example
   * 3
   */
  distributionTimeDuration?: number;
  /**
   * @remarks
   * The distribution type. ● UserId: Distributes traffic by user ID. ● TimeDuration: Distributes traffic by time duration.
   * 
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @remarks
   * The filter condition for crowd targeting.
   * 
   * @example
   * gender=male
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the instance. You can obtain this ID by calling the ListInstances API.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the layer. You can obtain this ID by calling the ListLayers API.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * The name of the experiment group.
   * 
   * This parameter is required.
   * 
   * @example
   * experiment_group1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether an AA experiment group is required.
   * 
   * @example
   * true
   */
  needAA?: boolean;
  /**
   * @remarks
   * If CrowdTargetType is set to Random, this parameter specifies the percentage of traffic (from 0 to 100) to route to the experiment group.
   * 
   * @example
   * 20
   */
  randomFlow?: number;
  /**
   * @remarks
   * The reserved buckets.
   * 
   * @example
   * 1,2,3
   */
  reservcedBuckets?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      crowdId: 'CrowdId',
      crowdTargetType: 'CrowdTargetType',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      distributionTimeDuration: 'DistributionTimeDuration',
      distributionType: 'DistributionType',
      filter: 'Filter',
      instanceId: 'InstanceId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      randomFlow: 'RandomFlow',
      reservcedBuckets: 'ReservcedBuckets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      crowdId: 'string',
      crowdTargetType: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      distributionTimeDuration: 'number',
      distributionType: 'string',
      filter: 'string',
      instanceId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      randomFlow: 'number',
      reservcedBuckets: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

