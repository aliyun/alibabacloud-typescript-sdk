// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRunShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the stage to which the deployment process runs. This parameter takes effect only when the RunMode parameter is set to Auto. After the deployment process is created, it automatically runs to the specified stage.
   * 
   * >Notice: The specified stage is automatically completed. For example, if you set this parameter to DEV, the automatic running stops after the DEV stage reaches the desired state.
   * 
   * @example
   * DEV
   */
  autoRunUntilStage?: string;
  /**
   * @remarks
   * The description of the deployment process.
   * 
   * @example
   * This is a OdpsSQL-node publishing process. The function is XXXX.
   */
  description?: string;
  /**
   * @remarks
   * The list of entity IDs to be deployed in this deployment process.
   * >Notice: Currently, only a single entity and its child entities can be deployed. Therefore, only the first entity and its child entities in the array are deployed. Make sure that the array contains only one element. Additional elements are ignored.
   * 
   * This parameter is required.
   */
  objectIdsShrink?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Configuration page to obtain the workspace ID.
   * This parameter specifies the DataWorks workspace on which the API operation is performed.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The running mode of the deployment process. Default value: Normal. If you set this parameter to Auto, the deployment process automatically runs to the specified stage. This parameter must be used together with the AutoRunUntilStage parameter.
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
   * Specifies the type of the deployment process.
   * 
   * Valid values:
   * - Online: Goes online.
   * - Offline: Goes offline.
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
      objectIdsShrink: 'ObjectIds',
      projectId: 'ProjectId',
      runMode: 'RunMode',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRunUntilStage: 'string',
      description: 'string',
      objectIdsShrink: 'string',
      projectId: 'number',
      runMode: 'string',
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

