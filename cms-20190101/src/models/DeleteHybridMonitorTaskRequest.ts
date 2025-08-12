// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHybridMonitorTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the namespace.
   * 
   * The name can contain uppercase letters, lowercase letters, digits, and hyphens (-).
   * 
   * > This parameter is required only if you call this operation to delete metric import tasks for Alibaba Cloud services. In this case, the `TaskType` parameter is set to `aliyun_fc`.
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * > This parameter is required only if you use a management account to call this operation to query metric import tasks that belong to a member in a resource directory. In this case, the `TaskType` parameter is set to `aliyun_fc`.
   * 
   * @example
   * 120886317861****
   */
  targetUserId?: string;
  /**
   * @remarks
   * The ID of the metric import task.
   * 
   * For information about how to obtain the ID of a metric import task, see [DescribeHybridMonitorTaskList](https://help.aliyun.com/document_detail/428624.html).
   * 
   * > This parameter is required only if you call this operation to delete metrics for the logs that are imported from Log Service. In this case, the `TaskType` parameter is set to `aliyun_sls`.
   * 
   * @example
   * 36****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      regionId: 'RegionId',
      targetUserId: 'TargetUserId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      regionId: 'string',
      targetUserId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

