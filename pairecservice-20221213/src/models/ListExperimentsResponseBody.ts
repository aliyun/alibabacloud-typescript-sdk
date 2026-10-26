// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExperimentsResponseBodyExperiments extends $dara.Model {
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
   * The allocated bucket number.
   * 
   * @example
   * 1,2,3
   */
  buckets?: string;
  /**
   * @remarks
   * The experiment configuration.
   * 
   * @example
   * {}
   */
  config?: string;
  /**
   * @remarks
   * The debug crowd ID.
   * 
   * @example
   * 3
   */
  debugCrowdId?: string;
  /**
   * @remarks
   * The debug users.
   * 
   * @example
   * uid1,uid2,uid3
   */
  debugUsers?: string;
  /**
   * @remarks
   * The experiment description.
   * 
   * @example
   * This is a test.
   */
  description?: string;
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
   * The experiment ID.
   * 
   * @example
   * 3
   */
  experimentId?: string;
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
   * The creation time. The value is in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time. The value is in ISO 8601 format and includes the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The laboratory ID.
   * 
   * @example
   * 3
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
   * The experiment name.
   * 
   * @example
   * experiment_test1
   */
  name?: string;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 3
   */
  sceneId?: string;
  /**
   * @remarks
   * The status filter. Valid values:
   * 
   * - Offline: Not online.
   * - Online: Online.
   * 
   * @example
   * Offline
   */
  status?: string;
  /**
   * @remarks
   * The experiment type. Valid values:
   * 
   * - Baseline: Baseline experiment.
   * - Normal: Common experiment.
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
   * The experiment list.
   */
  experiments?: ListExperimentsResponseBodyExperiments[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 68075085-1A7D-55C2-B51D-7AD9B02A6DD6
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

