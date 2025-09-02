// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDISyncInstanceInfoRequest extends $dara.Model {
  /**
   * @remarks
   * *   If you set the TaskType parameter to DI_REALTIME, set the FileId parameter to the ID of the real-time synchronization task that you want to query.
   * *   If you set the TaskType parameter to DI_SOLUTION, set the FileId parameter to the ID of the data synchronization solution that you want to query.
   * 
   * You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID of the real-time synchronization task or data synchronization solution.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  fileId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
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
   * The type of the object that you want to query. Valid values:
   * 
   * *   DI_REALTIME: real-time synchronization task
   * *   DI_SOLUTION: data synchronization solution
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

