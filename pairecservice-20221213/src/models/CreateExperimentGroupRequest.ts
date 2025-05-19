// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExperimentGroupRequest extends $dara.Model {
  /**
   * @example
   * {"RankBy": "Score"}
   */
  config?: string;
  /**
   * @example
   * 1
   */
  crowdId?: string;
  crowdTargetType?: string;
  /**
   * @example
   * 3
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
   * 3
   */
  distributionTimeDuration?: number;
  /**
   * @example
   * UserId
   */
  distributionType?: string;
  /**
   * @example
   * gender=male
   */
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pairec-test1
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3
   */
  layerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * experiment_group_test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  needAA?: boolean;
  randomFlow?: number;
  /**
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

