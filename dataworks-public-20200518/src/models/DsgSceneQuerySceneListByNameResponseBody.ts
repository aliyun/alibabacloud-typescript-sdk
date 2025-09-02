// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgSceneQuerySceneListByNameResponseBodyDataProjects extends $dara.Model {
  /**
   * @remarks
   * The ID of the EMR cluster. This parameter is returned only when the data scope that takes effect in the data masking scenario is an EMR compute engine.
   * 
   * @example
   * c-1234
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the compute engine. Valid values:
   * 
   * *   ODPS: ODPS.ODPS
   * *   HOLO: HOLO.POSTGRES
   * *   EMR: EMR
   * 
   * @example
   * ODPS.ODPS
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the compute engine.
   * 
   * @example
   * dev_project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dbType: 'DbType',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dbType: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgSceneQuerySceneListByNameResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about multiple levels of data masking scenarios.
   */
  children?: any[];
  /**
   * @remarks
   * The description of the data masking scenario.
   * 
   * @example
   * Test scenarios
   */
  desc?: string;
  /**
   * @remarks
   * The ID of the data masking scenario.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The information about the compute engine for which the data masking scenario takes effect.
   */
  projects?: DsgSceneQuerySceneListByNameResponseBodyDataProjects[];
  /**
   * @remarks
   * The code of the level-1 data masking scenario. Valid values:
   * 
   * *   dataworks_display_desense_code: masking of displayed data in DataStudio and Data Map
   * *   maxcompute_desense_code: data masking at the MaxCompute compute engine layer
   * *   maxcompute_new_desense_code: data masking at the MaxCompute compute engine layer (new)
   * *   hologres_display_desense_code: data masking at the Hologres compute engine layer
   * *   dataworks_data_integration_desense_code: static data masking in Data Integration
   * *   dataworks_analysis_desense_code: masking of displayed data in DataAnalysis
   * 
   * @example
   * dataworks_display_desense_code
   */
  sceneCode?: string;
  /**
   * @remarks
   * The level of the data masking scenario. Valid values:
   * 
   * *   0: level-1 data masking scenario
   * *   1: level-2 data masking scenario
   * 
   * @example
   * 1
   */
  sceneLevel?: number;
  /**
   * @remarks
   * The name of the data masking scenario.
   * 
   * @example
   * test_scene
   */
  sceneName?: string;
  /**
   * @remarks
   * The list of user groups in the data masking scenario. Separate user groups with commas (,).
   * 
   * @example
   * user1,user2
   */
  userGroups?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      desc: 'Desc',
      id: 'Id',
      projects: 'Projects',
      sceneCode: 'SceneCode',
      sceneLevel: 'SceneLevel',
      sceneName: 'SceneName',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      desc: 'string',
      id: 'number',
      projects: { 'type': 'array', 'itemType': DsgSceneQuerySceneListByNameResponseBodyDataProjects },
      sceneCode: 'string',
      sceneLevel: 'number',
      sceneName: 'string',
      userGroups: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgSceneQuerySceneListByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DsgSceneQuerySceneListByNameResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1029030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DsgSceneQuerySceneListByNameResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

