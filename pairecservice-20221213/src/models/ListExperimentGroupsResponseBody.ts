// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentGroupsResponseBodyExperimentGroups extends $dara.Model {
  /**
   * @remarks
   * The experiment group configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The crowd ID.
   * 
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * The traffic targeting type of the experiment group. Valid values:
   * 
   * * All: All traffic.
   * * Filter: Traffic that matches the filter condition.
   * * CrowdId: Traffic targeted by a specified crowd ID.
   * * Random: Traffic randomly selected by percentage.
   * 
   * @example
   * All
   */
  crowdTargetType?: string;
  /**
   * @remarks
   * The debug crowd ID.
   * 
   * @example
   * 4
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The debug users.
   * 
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @remarks
   * The experiment group description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The distribution time period.
   * 
   * @example
   * 5
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
   * The experiment group ID.
   * 
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * @example
   * gender=female
   */
  filter?: string;
  /**
   * @remarks
   * When the traffic targeting type of the experiment group is Random, this field returns the specific bucket numbers assigned based on the RandomFlow value.
   * 
   * @example
   * 1,2,3,4
   */
  holdingBuckets?: string;
  /**
   * @remarks
   * The laboratory ID.
   * 
   * @example
   * 4
   */
  laboratoryId?: string;
  /**
   * @remarks
   * The layer ID.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * The experiment group name.
   * 
   * @example
   * experiment_group1
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether an AB experiment group is required.
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
   * When the traffic targeting type of the experiment group is Random, this field specifies the percentage of random traffic matched to the experiment group. Valid values: 0 to 100.
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
   * 1,2,3,4
   */
  reservedBuckets?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1
   */
  sceneId?: string;
  /**
   * @remarks
   * The experiment group status. Valid values:
   * ● Offline: Not online.
   * ● Online: Online.
   * ● Pushed: Fully pushed.
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
      experimentGroupId: 'ExperimentGroupId',
      filter: 'Filter',
      holdingBuckets: 'HoldingBuckets',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      needAA: 'NeedAA',
      owner: 'Owner',
      randomFlow: 'RandomFlow',
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
      experimentGroupId: 'string',
      filter: 'string',
      holdingBuckets: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      needAA: 'boolean',
      owner: 'string',
      randomFlow: 'number',
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

export class ListExperimentGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of experiment groups.
   */
  experimentGroups?: ListExperimentGroupsResponseBodyExperimentGroups[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of elements in the list.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experimentGroups: 'ExperimentGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroups: { 'type': 'array', 'itemType': ListExperimentGroupsResponseBodyExperimentGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.experimentGroups)) {
      $dara.Model.validateArray(this.experimentGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

