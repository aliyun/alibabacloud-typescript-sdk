// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExperimentGroupRequest extends $dara.Model {
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
   * 3
   */
  debugCrowdId?: string;
  /**
   * @example
   * user1,user2,user3
   */
  debugUsers?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
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
   * pairec-cn-abcdefg1234
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
   * experiment_group1
   */
  name?: string;
  /**
   * @example
   * true
   */
  needAA?: boolean;
  randomFlow?: number;
  /**
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

