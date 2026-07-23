// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentsResponseBodyExperiments extends $dara.Model {
  /**
   * @remarks
   * The alias for the experiment ID.
   * 
   * @example
   * L1#EG1#E1
   */
  aliasExperimentId?: string;
  /**
   * @remarks
   * The allocated bucket numbers.
   * 
   * @example
   * 1,2,3
   */
  buckets?: string;
  /**
   * @remarks
   * The configuration of the experiment.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The ID of the debug crowd.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * A comma-separated list of user IDs for debugging.
   * 
   * @example
   * uid1,uid2,uid3
   */
  debugUsers?: string;
  /**
   * @remarks
   * The description of the experiment.
   * 
   * @example
   * This is a test.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the experiment group.
   * 
   * @example
   * 3
   */
  experimentGroupId?: string;
  /**
   * @remarks
   * The ID of the experiment.
   * 
   * @example
   * 3
   */
  experimentId?: string;
  /**
   * @remarks
   * The percentage of flow allocated to the experiment.
   * 
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @remarks
   * The timestamp indicating when the experiment was created.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The timestamp indicating when the experiment was last modified.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the laboratory.
   * 
   * @example
   * 3
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
   * The name of the experiment.
   * 
   * @example
   * experiment_test1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The status of the experiment. Valid values:
   * 
   * - `Offline`: The experiment is inactive and does not receive flow.
   * 
   * - `Online`: The experiment is active and can receive flow.
   * 
   * @example
   * Offline
   */
  status?: string;
  /**
   * @remarks
   * The type of the experiment. Valid values:
   * 
   * - `Baseline`: The control experiment.
   * 
   * - `Normal`: A variant experiment.
   * 
   * @example
   * Baseline
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasExperimentId: 'AliasExperimentId',
      buckets: 'Buckets',
      config: 'Config',
      debugCrowdId: 'DebugCrowdId',
      debugUsers: 'DebugUsers',
      description: 'Description',
      experimentGroupId: 'ExperimentGroupId',
      experimentId: 'ExperimentId',
      flowPercent: 'FlowPercent',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      sceneId: 'SceneId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasExperimentId: 'string',
      buckets: 'string',
      config: 'string',
      debugCrowdId: 'string',
      debugUsers: 'string',
      description: 'string',
      experimentGroupId: 'string',
      experimentId: 'string',
      flowPercent: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      sceneId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of experiments.
   */
  experiments?: ListExperimentsResponseBodyExperiments[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 68075085-1A7D-55C2-B51D-7AD9B02A6DD6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of experiments returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': ListExperimentsResponseBodyExperiments },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.experiments)) {
      $dara.Model.validateArray(this.experiments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

