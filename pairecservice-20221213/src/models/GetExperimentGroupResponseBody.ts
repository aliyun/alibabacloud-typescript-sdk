// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentGroupResponseBody extends $dara.Model {
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
   * The ID of the crowd.
   * 
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * The type of traffic targeting for the experiment group. Valid values:
   * - All: All traffic.
   * - Filter: Traffic that uses filter conditions.
   * - CrowdId: Traffic targeted by a specified crowd ID.
   * - Random: Random traffic based on a percentage.
   * 
   * @example
   * All
   */
  crowdTargetType?: string;
  /**
   * @remarks
   * The ID of the debug crowd.
   * 
   * @example
   * 4
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The debug users. Separate multiple users with commas.
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
   * The time period for traffic distribution.
   * 
   * @example
   * 5
   */
  distributionTimeDuration?: number;
  /**
   * @remarks
   * The traffic distribution method. Valid values:
   * - UserId: User ID.
   * - TimeDuration: Time period.
   * 
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @remarks
   * The filter conditions.
   * 
   * @example
   * gender=female
   */
  filter?: string;
  /**
   * @remarks
   * The specific bucket numbers returned based on the RandomFlow value when the traffic targeting type is Random.
   * 
   * @example
   * 1,2,3,4
   */
  holdingBuckets?: string;
  /**
   * @remarks
   * The ID of the laboratory.
   * 
   * @example
   * 4
   */
  laboratoryId?: string;
  /**
   * @remarks
   * The ID of the layer.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * The name of the experiment group.
   * 
   * @example
   * experiment_group1
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether an AB experiment group is required.
   * 
   * @example
   * true
   */
  needAA?: boolean;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 1124512470******
   */
  owner?: string;
  /**
   * @remarks
   * The percentage of random traffic used to match the experiment group when the traffic targeting type is Random. Valid values: 0 to 100.
   * 
   * @example
   * 20
   */
  randomFlow?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  /**
   * @remarks
   * The reserved bucket numbers.
   * 
   * @example
   * 1,2,3,4
   */
  reservedBuckets?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The status of the experiment group. Valid values:
   * - Offline: Not online.
   * - Online: Online.
   * - Pushed: Fully rolled out.
   * 
   * @example
   * Offline
   */
  status?: string;
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
      holdingBuckets: 'HoldingBuckets',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      owner: 'Owner',
      randomFlow: 'RandomFlow',
      requestId: 'RequestId',
      reservedBuckets: 'ReservedBuckets',
      sceneId: 'SceneId',
      status: 'Status',
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
      holdingBuckets: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      owner: 'string',
      randomFlow: 'number',
      requestId: 'string',
      reservedBuckets: 'string',
      sceneId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

