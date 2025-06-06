// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentGroupResponseBody extends $dara.Model {
  /**
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @example
   * 3
   */
  crowdId?: string;
  crowdTargetType?: string;
  /**
   * @example
   * 4
   */
  debugCrowdId?: string;
  /**
   * @example
   * 1124512470******,1124512471******,1124512472******
   */
  debugUsers?: string;
  /**
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @example
   * 5
   */
  distributionTimeDuration?: number;
  /**
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @example
   * gender=female
   */
  filter?: string;
  holdingBuckets?: string;
  /**
   * @example
   * 4
   */
  laboratoryId?: string;
  /**
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @example
   * experiment_group1
   */
  name?: string;
  /**
   * @example
   * true
   */
  needAA?: boolean;
  /**
   * @example
   * 1124512470******
   */
  owner?: string;
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
   * @example
   * 1,2,3,4
   */
  reservedBuckets?: string;
  /**
   * @example
   * 1
   */
  sceneId?: string;
  /**
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

