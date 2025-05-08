// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportZookeeperDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The content of a task.
   */
  contentMap?: { [key: string]: any };
  /**
   * @remarks
   * The creation time.
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
   * The extended information.
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
   * *   CREATE: The object is being created.
   * *   RUNNING: The task is running.
   * *   FINISH: The task is completed.
   * *   FAILED: The task fails.
   * *   EXPIRE: The task has expired.
   * 
   * @example
   * FINISH
   */
  status?: string;
  /**
   * @remarks
   * The last update time.
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

