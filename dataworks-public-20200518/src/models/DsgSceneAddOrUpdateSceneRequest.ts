// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgSceneAddOrUpdateSceneRequestScenesProjects extends $dara.Model {
  /**
   * @remarks
   * If the data masking scenario takes effect for an E-MapReduce (EMR) compute engine, enter the ID of an EMR cluster. This parameter is required only when you use an EMR compute engine.
   * 
   * @example
   * c-1234
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the compute engine for which the data masking scenario takes effect. Valid values:
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
   * The name of the compute engine instance for which the data masking scenario takes effect.
   * 
   * @example
   * dev_project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      dbType: 'dbType',
      projectName: 'projectName',
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

export class DsgSceneAddOrUpdateSceneRequestScenes extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test scenarios
   */
  desc?: string;
  /**
   * @remarks
   * The ID of the level-2 data masking scenario.
   * 
   * *   If you do not configure this parameter, the current operation is to add a level-2 data masking scenario.
   * *   If you configure this parameter, the current operation is to modify a level-2 data masking scenario. You can call the [DsgSceneQuerySceneListByName](https://help.aliyun.com/document_detail/2786322.html) operation to query the ID of the level-2 data masking scenario.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The information about the compute engine for which the data masking scenario takes effect.
   */
  projects?: DsgSceneAddOrUpdateSceneRequestScenesProjects[];
  /**
   * @remarks
   * The code of the level-1 data masking scenario to which the level-2 data masking scenario belongs. Valid values:
   * 
   * *   dataworks_display_desense_code: masking of displayed data in DataStudio and Data Map
   * *   maxcompute_desense_code: data masking at the MaxCompute compute engine layer
   * *   maxcompute_new_desense_code: data masking at the MaxCompute compute engine layer (new)
   * *   dataworks_analysis_desense_code: masking of displayed data in DataAnalysis
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks_display_desense_code
   */
  sceneCode?: string;
  /**
   * @remarks
   * The name of the level-2 data masking scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * dev_scene
   */
  sceneName?: string;
  /**
   * @remarks
   * The information about the user group for which the data masking scenario takes effect.
   */
  userGroupIds?: number[];
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      id: 'id',
      projects: 'projects',
      sceneCode: 'sceneCode',
      sceneName: 'sceneName',
      userGroupIds: 'userGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      id: 'string',
      projects: { 'type': 'array', 'itemType': DsgSceneAddOrUpdateSceneRequestScenesProjects },
      sceneCode: 'string',
      sceneName: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgSceneAddOrUpdateSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the level-2 data masking scenario.
   * 
   * This parameter is required.
   */
  scenes?: DsgSceneAddOrUpdateSceneRequestScenes[];
  static names(): { [key: string]: string } {
    return {
      scenes: 'scenes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenes: { 'type': 'array', 'itemType': DsgSceneAddOrUpdateSceneRequestScenes },
    };
  }

  validate() {
    if(Array.isArray(this.scenes)) {
      $dara.Model.validateArray(this.scenes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

