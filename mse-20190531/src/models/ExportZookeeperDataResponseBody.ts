// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportZookeeperDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The task content.
   */
  contentMap?: { [key: string]: any };
  /**
   * @remarks
   * The time when the task was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1631001140913
   */
  createTime?: number;
  /**
   * @remarks
   * The export type. Valid values:
   * - transactionLog: transaction log
   * - snapshot: snapshot file
   * 
   * @example
   * snapshot
   */
  exportType?: string;
  /**
   * @remarks
   * The extended information.
   * 
   * @example
   * {}
   */
  extend?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The associated underlying task ID. This parameter is used only for troubleshooting when a task fails.
   * 
   * @example
   * 10
   */
  kubeoneTaskIds?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - CREATE: creating
   * - RUNNING: running
   * - FINISH: completed
   * - FAILED: failed
   * - EXPIRE: expired
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The time when the task was updated. The value is a UNIX timestamp in milliseconds.
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
      contentMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
    if(this.contentMap) {
      $dara.Model.validateMap(this.contentMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportZookeeperDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   */
  data?: ExportZookeeperDataResponseBodyData;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the **%s** placeholder in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the specified **DtsJobId** request parameter is invalid.
   * 
   * @example
   * The specified parameter is invalid.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * The returned message.
   * - If the request succeeds, a success message is returned.
   * - If the request fails, the cause of the failure is returned.
   * 
   * @example
   * Request processed successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25EA0A83-9007-4E87-808C-637BE1A****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request succeeded.
   * - `false`: The request failed.
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
      data: ExportZookeeperDataResponseBodyData,
      dynamicMessage: 'string',
      errorCode: 'string',
      httpStatusCode: 'string',
      message: 'string',
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

