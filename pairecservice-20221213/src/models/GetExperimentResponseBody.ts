// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alias of the experiment.
   * 
   * @example
   * L1#EG1#E1
   */
  aliasExperimentId?: string;
  /**
   * @remarks
   * A comma-separated list of bucket numbers.
   * 
   * @example
   * 1,2,3
   */
  buckets?: string;
  /**
   * @remarks
   * The experiment configuration, in JSON format.
   * 
   * @example
   * {"RankBy": "Score"}
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
   * The UIDs of debug users, which can be the UIDs of an Alibaba Cloud main account or a RAM user. Separate multiple UIDs with a comma (,).
   * 
   * @example
   * 1124512470******,1124512471******,1124512472******
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
   * The traffic percentage.
   * 
   * @example
   * 100
   */
  flowPercent?: number;
  /**
   * @remarks
   * The creation time, in ISO 8601 format.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time, in ISO 8601 format.
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
   * The request ID.
   * 
   * @example
   * 74D958EF-3598-56FA-8296-FF1575CE43DF
   */
  requestId?: string;
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
   * The status of the experiment. Valid values:<br>● Offline<br>● Online<br><br>
   * 
   * @example
   * Offline
   */
  status?: string;
  /**
   * @remarks
   * The type of the experiment. Valid values:<br>● Baseline: a baseline experiment.<br>● Normal: a normal experiment.<br><br>
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

