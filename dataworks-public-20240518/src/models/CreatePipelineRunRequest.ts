// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRunRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the stage in the publish process. This parameter takes effect only when RunMode is set to Auto. After the publish process is created, it automatically runs to the specified stage.
   * 
   * >Notice: The specified stage is automatically completed. For example, if you set this parameter to DEV, the automatic run stops after the DEV stage reaches the desired state.
   * 
   * @example
   * DEV
   */
  autoRunUntilStage?: string;
  /**
   * @remarks
   * The description of the publish process.
   * 
   * @example
   * This is a OdpsSQL-node publishing process. The function is XXXX.
   */
  description?: string;
  /**
   * @remarks
   * The list of entity IDs that you want to publish in this publish process.
   * >Notice: Only a single entity and its child entities can be published at a time. Only the first entity in this array and its child entities are published. Make sure that the length of this array is 1. Entities beyond the first one are ignored.
   * 
   * This parameter is required.
   */
  objectIds?: string[];
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
   * This parameter specifies the DataWorks workspace for this API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The run mode of the publish process. Default value: Normal. If you set this parameter to Auto, the publish process is automatically driven to the specified stage. This parameter is used together with the AutoRunUntilStage parameter.
   * 
   * Valid values:
   * - Normal
   * - Auto
   * 
   * @example
   * Normal
   */
  runMode?: string;
  /**
   * @remarks
   * Specifies whether the publish process is used to bring an entity online or offline.
   * 
   * - Online: online
   * 
   * - Offline: offline
   * 
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoRunUntilStage: 'AutoRunUntilStage',
      description: 'Description',
      objectIds: 'ObjectIds',
      projectId: 'ProjectId',
      runMode: 'RunMode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRunUntilStage: 'string',
      description: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'number',
      runMode: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectIds)) {
      $dara.Model.validateArray(this.objectIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

