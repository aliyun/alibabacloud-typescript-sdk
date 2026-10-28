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
   * The ID of the specified crowd for crowd targeting. You can call the ListCrowds operation to obtain the ID.
   * 
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * The type of traffic targeting for the experiment group. Valid values:
   * * All: All traffic.
   * * Filter: Traffic that uses filter conditions.
   * * CrowdId: Traffic specified by a crowd ID.
   * * Random: Random traffic based on a percentage.
   * 
   * @example
   * All
   */
  crowdTargetType?: string;
  /**
   * @remarks
   * The ID of the debug crowd. You can call the ListCrowds operation to obtain the ID.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The debug users. The value must be the UID of an Alibaba Cloud account or RAM user. Separate multiple UIDs with commas (,).
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
   * The time period for traffic distribution.
   * 
   * @example
   * 3
   */
  distributionTimeDuration?: number;
  /**
   * @remarks
   * The traffic distribution method. Valid values:
   * ● UserId: User ID.
   * ● TimeDuration: Time period.
   * 
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @remarks
   * The filter conditions specified for crowd targeting.
   * 
   * @example
   * gender=male
   */
  filter?: string;
  /**
   * @remarks
   * Instance ID of the instance. You can call the ListInstances operation to obtain instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-cn-abcdefg1234
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the layer. You can call the ListLayers operation to obtain the ID.
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
   * The percentage of random traffic used to match the experiment group when the traffic targeting type is set to Random. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  randomFlow?: number;
  /**
   * @remarks
   * The reserved bucket numbers.
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

