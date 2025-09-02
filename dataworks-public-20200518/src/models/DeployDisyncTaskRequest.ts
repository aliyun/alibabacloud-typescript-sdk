// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployDISyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * *   If you set the TaskType parameter to DI_REALTIME, set the FileId parameter to the ID of the real-time synchronization task that you want to deploy.
   * *   If you set the TaskType parameter to DI_SOLUTION, set the FileId parameter to the ID of the synchronization task that you want to deploy.
   * 
   * You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID of the real-time synchronization task or the synchronization task created in Data Integration.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  fileId?: number;
  /**
   * @remarks
   * The type of the object that you want to deploy. Valid values:
   * 
   * *   DI_REALTIME: real-time synchronization node
   * *   DI_SOLUTION: data synchronization solution
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The type of the object that you want to deploy. Valid values:
   * 
   * *   DI_REALTIME: real-time synchronization task
   * *   DI_SOLUTION: synchronization task created in Data Integration
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

