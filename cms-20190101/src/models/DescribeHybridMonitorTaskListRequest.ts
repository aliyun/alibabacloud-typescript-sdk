// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridMonitorTaskListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * For information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/115032.html).
   * 
   * @example
   * 3607****
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether the returned result includes metric import tasks for Alibaba Cloud services. Valid values:
   * 
   * *   true (default): The returned result includes metric import tasks for Alibaba Cloud services.
   * *   false: The returned result excludes metric import tasks for Alibaba Cloud services.
   * 
   * @example
   * true
   */
  includeAliyunTask?: boolean;
  /**
   * @remarks
   * The keyword that is used for the search.
   * 
   * @example
   * task
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * For information about how to obtain the name of a namespace, see [DescribeHybridMonitorNamespaceList](https://help.aliyun.com/document_detail/428880.html).
   * 
   * @example
   * aliyun
   */
  namespace?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Pages start from page 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * > This parameter is required only if you use a management account to call this operation to delete the metric import tasks that belong to a member in a resource directory. In this case, the `TaskType` parameter is set to `aliyun_fc`.
   * 
   * @example
   * 120886317861****
   */
  targetUserId?: number;
  /**
   * @remarks
   * The ID of the metric import task.
   * 
   * @example
   * 36****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the metric import task. Valid values:
   * 
   * *   aliyun_fc: metric import tasks for Alibaba Cloud services
   * *   aliyun_sls: metrics for logs imported from Log Service
   * 
   * @example
   * aliyun_fc
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      includeAliyunTask: 'IncludeAliyunTask',
      keyword: 'Keyword',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      targetUserId: 'TargetUserId',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      includeAliyunTask: 'boolean',
      keyword: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      targetUserId: 'number',
      taskId: 'string',
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

