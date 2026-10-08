// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineRunShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the stage in the deployment process. This parameter takes effect only when RunMode is set to Auto. After the deployment process is created, it automatically runs to the specified stage.
   * 
   * 
   * 
   * 
   * > &lt;notice&gt;The specified stage is automatically completed. For example, if you set this parameter to DEV, the automatic run stops after the DEV stage reaches the terminal state.&gt;&lt;/notice&gt;
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
   * The list of entity IDs that you want to deploy in this deployment process.
   * 
   * 
   * 
   * 
   * > &lt;notice&gt;Only a single entity and its child entities can be deployed at a time. Only the first entity in this array and its child entities are deployed. Make sure that the length of this array is 1. Entities beyond the first one are ignored.&gt;&lt;/notice&gt;
   * 
   * This parameter is required.
   */
  objectIdsShrink?: string;
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
   * The run mode of the deployment process. Default value: Normal. If you set this parameter to Auto, the deployment process is automatically driven to the specified stage. This parameter is used together with the AutoRunUntilStage parameter.
   * 
   * 
   * 
   * 
   * Valid values:
   * 
   * 
   * 
   * 
   * - Normal
   * - Auto
   * 
   * @example
   * Normal
   */
  runMode?: string;
  /**
   * @remarks
   * Specifies whether the deployment process is used to deploy or undeploy an entity.
   * 
   * 
   * 
   * 
   * - Online: deploy
   * - Offline: undeploy
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

