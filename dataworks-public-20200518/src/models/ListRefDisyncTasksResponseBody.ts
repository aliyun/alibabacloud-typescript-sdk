// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRefDISyncTasksResponseBodyDataDISyncTasks extends $dara.Model {
  /**
   * @remarks
   * The destination of the synchronization task. If the synchronization task has multiple destinations, the return value is a JSON array, such as \\\\"odps_writer\\\\", \\\\"mysql\\\\". If the RefType parameter is set to to, the synchronization tasks that use the specified data source as the destination are returned. In this case, the value of this parameter indicates the specified data source.
   * 
   * @example
   * [\\"qcc_polardb2\\"]
   */
  diDestinationDatasource?: string;
  /**
   * @remarks
   * The source of the synchronization task. If the synchronization task has multiple sources, the return value is a JSON array, such as \\\\"odps_writer\\\\", \\\\"mysql\\\\". If the RefType parameter is set to from, the synchronization tasks that use the specified data source as the source are returned. In this case, the value of this parameter indicates the specified data source.
   * 
   * @example
   * [\\"odps_writer\\"]
   */
  diSourceDatasource?: string;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 100000
   */
  nodeId?: number;
  /**
   * @remarks
   * The name of the synchronization task.
   * 
   * @example
   * abcd1234
   */
  nodeName?: string;
  /**
   * @remarks
   * The type of the synchronization task. Valid values:
   * 
   * *   DI_OFFLINE: batch synchronization task
   * *   DI_REALTIME: real-time synchronization task
   * 
   * @example
   * DI_OFFLINE
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      diDestinationDatasource: 'DiDestinationDatasource',
      diSourceDatasource: 'DiSourceDatasource',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diDestinationDatasource: 'string',
      diSourceDatasource: 'string',
      nodeId: 'number',
      nodeName: 'string',
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

export class ListRefDISyncTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the synchronization tasks. In most cases, a data source is used by multiple synchronization tasks. Therefore, the value of this parameter is an array. The following parameters are the elements in the array. The sample values of these parameters show the details of a synchronization task.
   */
  DISyncTasks?: ListRefDISyncTasksResponseBodyDataDISyncTasks[];
  static names(): { [key: string]: string } {
    return {
      DISyncTasks: 'DISyncTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DISyncTasks: { 'type': 'array', 'itemType': ListRefDISyncTasksResponseBodyDataDISyncTasks },
    };
  }

  validate() {
    if(Array.isArray(this.DISyncTasks)) {
      $dara.Model.validateArray(this.DISyncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRefDISyncTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: ListRefDISyncTasksResponseBodyData;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListRefDISyncTasksResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

