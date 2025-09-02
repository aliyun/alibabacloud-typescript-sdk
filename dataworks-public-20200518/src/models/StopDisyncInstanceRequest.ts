// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDISyncInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization task. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the synchronization task that you want to stop. Set the value to DI_REALTIME.
   * 
   * DI_REALTIME indicates a real-time synchronization task.
   * 
   * This parameter is required.
   * 
   * @example
   * DI_REALTIME
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      projectId: 'number',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

