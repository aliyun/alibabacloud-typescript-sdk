// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgSceneQuerySceneListByNameResponseBodyDataProjects extends $dara.Model {
  /**
   * @remarks
   * The ID of the E-MapReduce (EMR) cluster. This parameter is returned only if the `DbType` is `EMR`.
   * 
   * @example
   * c-123456
   */
  clusterId?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * - MaxCompute: `ODPS.ODPS`
   * 
   * - Hologres: `HOLO.POSTGRES`
   * 
   * - E-MapReduce (EMR): `EMR`
   * 
   * @example
   * ODPS.ODPS
   */
  dbType?: string;
  /**
   * @remarks
   * The name of the engine instance.
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
   * The nested data masking scenarios.
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
   * The engine instances to which the data masking scenario applies.
   */
  projects?: DsgSceneQuerySceneListByNameResponseBodyDataProjects[];
  /**
   * @remarks
   * The code for the level-1 scenario. Valid values:
   * 
   * - Data masking in Data Map and DataStudio: `dataworks_display_desense_code`
   * 
   * - Data masking at the MaxCompute engine layer: `maxcompute_desense_code`
   * 
   * - Data masking at the MaxCompute engine layer (new): `maxcompute_new_desense_code`
   * 
   * - Data masking at the Hologres engine layer: `hologres_display_desense_code`
   * 
   * - Static data masking in Data Integration: `dataworks_data_integration_desense_code`
   * 
   * - Data masking in Data Analysis: `dataworks_analysis_desense_code`
   * 
   * @example
   * dataworks_display_desense_code
   */
  sceneCode?: string;
  /**
   * @remarks
   * The level of the data masking scenario. Valid values:
   * 
   * - `0`: level-1 scenario
   * 
   * - `1`: level-2 scenario
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
   * The user groups to which the data masking scenario applies. Multiple user group names are separated by a comma (,).
   * 
   * @example
   * user1,user2
   */
  userGroups?: string;
  scenceDbType?: string;
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
      scenceDbType: 'scenceDbType',
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
      scenceDbType: 'string',
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
   * The list of data masking scenarios.
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
   * The ID of the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
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

