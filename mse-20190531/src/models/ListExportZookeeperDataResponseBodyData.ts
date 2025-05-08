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

