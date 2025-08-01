// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExportZookeeperDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the task.
   * 
   * @example
   * {}
   */
  contentMap?: string;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 1631001140913
   */
  createTime?: number;
  /**
   * @remarks
   * The type of the object that is exported. Valid values:
   * 
   * *   transactionLog: transaction logs
   * *   snapshot: snapshots
   * 
   * @example
   * snapshot
   */
  exportType?: string;
  /**
   * @remarks
   * The extension information that is in the JSON format. The extension information facilitates addition of parameters.
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the instance
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the associated task at the underlying layer. This parameter is used only to troubleshoot failures.
   * 
   * @example
   * 10
   */
  kubeoneTaskIds?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   CREATE: The task is being created.
   * *   RUNNING: The task is being executed.
   * *   FINISH: The task is completed.
   * *   FAILED: The task failed.
   * *   EXPIRE: The task has expired.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was updated.
   * 
   * @example
   * 1632979237663
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      contentMap: 'ContentMap',
      createTime: 'CreateTime',
      exportType: 'ExportType',
      extend: 'Extend',
      id: 'Id',
      instanceId: 'InstanceId',
      kubeoneTaskIds: 'KubeoneTaskIds',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentMap: 'string',
      createTime: 'number',
      exportType: 'string',
      extend: 'string',
      id: 'number',
      instanceId: 'string',
      kubeoneTaskIds: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExportZookeeperDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: ListExportZookeeperDataResponseBodyData[];
  /**
   * @remarks
   * The dynamic part in the error message. This parameter is used to replace the \\*\\*%s\\*\\* variable in the **ErrMessage** parameter.
   * 
   * > If the return value of the **ErrMessage** parameter is **The Value of Input Parameter %s is not valid** and the return value of the **DynamicMessage** parameter is **DtsJobId**, the specified **DtsJobId** parameter is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8BD1E58D-0755-42AC-A599-E6B55112****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      dynamicMessage: 'DynamicMessage',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListExportZookeeperDataResponseBodyData },
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

