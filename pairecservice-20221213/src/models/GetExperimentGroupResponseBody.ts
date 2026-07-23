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
   * The method for targeting traffic to the experiment group. Valid values:
   * 
   * - `All`: all traffic
   * 
   * - `Filter`: traffic that matches the filter
   * 
   * - `CrowdId`: traffic from the specified crowd
   * 
   * - `Random`: a random percentage of traffic
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
   * The user IDs for debugging, separated by commas.
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
   * The distribution duration.
   * 
   * @example
   * 5
   */
  distributionTimeDuration?: number;
  /**
   * @remarks
   * The traffic distribution method.
   * ● `UserId`: Distributes traffic by user ID.
   * ● `TimeDuration`: Distributes traffic by time period.
   * 
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @remarks
   * The filter.
   * 
   * @example
   * gender=female
   */
  filter?: string;
  /**
   * @remarks
   * The bucket IDs that correspond to the `RandomFlow` percentage. This parameter is returned only when `CrowdTargetType` is set to `Random`.
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
   * Indicates whether an A/B test is required.
   * 
   * @example
   * true
   */
  needAA?: boolean;
  /**
   * @remarks
   * The owner of the experiment group.
   * 
   * @example
   * 1124512470******
   */
  owner?: string;
  /**
   * @remarks
   * The percentage of traffic from 0 to 100 that is randomly allocated to this experiment group. This parameter is returned only when `CrowdTargetType` is set to `Random`.
   * 
   * @example
   * 20
   */
  randomFlow?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDB621CB-A81E-5D39-8793-39A365CBCC74
   */
  requestId?: string;
  /**
   * @remarks
   * The reserved bucket IDs.
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
   * ● `Offline`: The experiment group is not launched.
   * ● `Online`: The experiment group is launched.
   * ● `Pushed`: The experiment group is fully launched.
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

