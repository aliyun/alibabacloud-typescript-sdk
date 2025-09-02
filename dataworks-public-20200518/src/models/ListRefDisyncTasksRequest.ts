// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRefDISyncTasksRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data source. You can call the [ListDataSources](https://help.aliyun.com/document_detail/211431.html) operation to query the name of the data source.
   * 
   * This parameter is required.
   * 
   * @example
   * mysql_datasource
   */
  datasourceName?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The condition used to filter synchronization tasks. Valid values:
   * 
   * *   from: queries the synchronization tasks that use the data source as the source.
   * *   to: queries the synchronization tasks that use the data source as the destination.
   * 
   * This parameter is required.
   * 
   * @example
   * from
   */
  refType?: string;
  /**
   * @remarks
   * The type of the synchronization task that you want to query. Valid values:
   * 
   * *   DI_OFFLINE: batch synchronization task
   * *   DI_REALTIME: real-time synchronization task
   * 
   * You can call the ListRefDISyncTasks operation to query only one type of the task.
   * 
   * This parameter is required.
   * 
   * @example
   * DI_OFFLINE
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'DatasourceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      refType: 'RefType',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      refType: 'string',
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

