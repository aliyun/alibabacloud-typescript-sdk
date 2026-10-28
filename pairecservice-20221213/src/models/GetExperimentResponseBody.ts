// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alias of the experiment ID.
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
   * {"RankBy": "Score"}
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
   * The debug users. The value must be the UIDs of Alibaba Cloud accounts or RAM users. Separate multiple UIDs with commas.
   * 
   * @example
   * 1124512470******,1124512471******,1124512472******
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
   * The traffic allocation percentage.
   * 
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
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
   * Id of the request
   * 
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
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
   * The status filter. Valid values:
   * - Offline: offline
   * - Online: online
   * 
   * @example
   * Offline
   */
  status?: string;
  /**
   * @remarks
   * The type of the experiment. Valid values:
   * - Baseline: baseline experiment
   * - Normal: normal experiment
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
      flowPercent: 'FlowPercent',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      laboratoryId: 'LaboratoryId',
      layerId: 'LayerId',
      name: 'Name',
      requestId: 'RequestId',
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
      flowPercent: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      laboratoryId: 'string',
      layerId: 'string',
      name: 'string',
      requestId: 'string',
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

