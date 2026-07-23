// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentGroupsResponseBodyExperimentGroups extends $dara.Model {
  /**
   * @remarks
   * The configuration for the experiment group, in JSON format.
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
   * The traffic targeting method for the experiment group. Valid values:
   * 
   * - `All`: All traffic.
   * 
   * - `Filter`: Traffic that matches the filter.
   * 
   * - `CrowdId`: Traffic from a specified crowd.
   * 
   * - `Random`: A random percentage of traffic.
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
   * The IDs of debug users, separated by commas.
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
   * The distribution duration. This parameter is required only when `DistributionType` is `TimeDuration`.
   * 
   * @example
   * 5
   */
  distributionTimeDuration?: number;
  /**
   * @remarks
   * The traffic distribution method.<br>● `UserId`: by user ID<br>● `TimeDuration`: by time duration<br><br>
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
   * If `CrowdTargetType` is set to `Random`, this parameter returns the comma-separated IDs of buckets allocated based on the `RandomFlow` value.
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
   * Specifies whether to enable A/B testing for the experiment group.
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
   * If `CrowdTargetType` is set to `Random`, this parameter specifies the percentage of traffic (an integer from 0 to 100) randomly allocated to the experiment group.
   * 
   * @example
   * 20
   */
  randomFlow?: number;
  /**
   * @remarks
   * The IDs of reserved buckets, separated by commas.
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
   * The status of the experiment group. Valid values:<br>● `Offline`: The experiment group is inactive.<br>● `Online`: The experiment group is active.<br>● `Pushed`: The experiment group is fully rolled out.<br><br><br>
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
   * The ID of the request.
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

