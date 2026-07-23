// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperimentGroupRequest extends $dara.Model {
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
   * The ID of the crowd for crowd targeting. You can obtain this ID by calling the ListCrowds operation.
   * 
   * @example
   * 1
   */
  crowdId?: string;
  /**
   * @remarks
   * The crowd targeting type for the experiment group. Valid values:
   * 
   * - `All`: All traffic
   * 
   * - `Filter`: Traffic that matches the filter condition
   * 
   * - `CrowdId`: Traffic from a specific crowd
   * 
   * - `Random`: A random percentage of traffic
   * 
   * @example
   * All
   */
  crowdTargetType?: string;
  /**
   * @remarks
   * The ID of the debug crowd. You can obtain this ID by calling the ListCrowds operation.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The UIDs of the debug users. The value must be the UID of an Alibaba Cloud account or a RAM user. Separate multiple UIDs with a comma.
   * 
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @remarks
   * The description of the experiment group.
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
   * The distribution type. Valid values: `UserId` (by user ID) and `TimeDuration` (by time duration).
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
   * The instance ID. You can obtain this ID by calling the ListInstances operation.
   * 
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the layer. You can obtain this ID by calling the ListLayers operation.
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
   * experiment_group_test
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to create an A/A experiment group.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  needAA?: boolean;
  /**
   * @remarks
   * The percentage of traffic to randomly allocate to this experiment group. This parameter is used only when `CrowdTargetType` is set to `Random`. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  randomFlow?: number;
  /**
   * @remarks
   * A comma-separated list of reserved bucket numbers.
   * 
   * @example
   * 1,2,3
   */
  reservedBuckets?: string;
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
      reservedBuckets: 'ReservedBuckets',
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
      reservedBuckets: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

