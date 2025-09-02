// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDISyncTaskConfigProcessResultRequest extends $dara.Model {
  /**
   * @remarks
   * The asynchronous thread ID. You can call the [GenerateDISyncTaskConfigForCreating](https://help.aliyun.com/document_detail/383463.html) or [GenerateDISyncTaskConfigForUpdating](https://help.aliyun.com/document_detail/383464.html) operation to obtain the ID.
   * 
   * *   The GenerateDISyncTaskConfigForCreating operation is used to generate the ID of the asynchronous thread that is used to create a real-time synchronization task in Data Integration.
   * *   The GenerateDISyncTaskConfigForUpdating operation is used to generate the ID of the asynchronous thread that is used to update a real-time synchronization task in Data Integration.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  asyncProcessId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
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
   * The type of the object that you want to create or update in Data Integration in asynchronous mode. Valid values:
   * 
   * *   DI_REALTIME: real-time synchronization task
   * *   DI_SOLUTION: synchronization solution DataWorks allows you to create or update real-time synchronization tasks and synchronization solutions in Data Integration only in asynchronous mode.
   * 
   * Valid values:
   * 
   * *   DI_OFFLINE
   * *   DI_REALTIME
   * *   DI_SOLUTION
   * 
   * This parameter is required.
   * 
   * @example
   * DI_REALTIME
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      asyncProcessId: 'AsyncProcessId',
      projectId: 'ProjectId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncProcessId: 'number',
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

