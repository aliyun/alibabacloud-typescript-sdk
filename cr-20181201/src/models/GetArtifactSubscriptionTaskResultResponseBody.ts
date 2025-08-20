// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactSubscriptionTaskResultResponseBodyTaskResults extends $dara.Model {
  /**
   * @remarks
   * The end time of the subscription task.
   * 
   * @example
   * 1692756630000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-isj2wgaw4z9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * test-reop
   */
  repoName?: string;
  /**
   * @remarks
   * The result of the task.
   * 
   * @example
   * SUCCESS
   */
  result?: string;
  /**
   * @remarks
   * The start time of the subscription task.
   * 
   * @example
   * 1691719501000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v2.0
   */
  tag?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-wkpfwqozjiq****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      result: 'Result',
      startTime: 'StartTime',
      status: 'Status',
      tag: 'Tag',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      namespaceName: 'string',
      repoName: 'string',
      result: 'string',
      startTime: 'number',
      status: 'string',
      tag: 'string',
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

export class GetArtifactSubscriptionTaskResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A8768F6-9B47-5127-A075-9CFB9F79181F
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the artifact subscription task.
   */
  taskResults?: GetArtifactSubscriptionTaskResultResponseBodyTaskResults[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      taskResults: 'TaskResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      taskResults: { 'type': 'array', 'itemType': GetArtifactSubscriptionTaskResultResponseBodyTaskResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskResults)) {
      $dara.Model.validateArray(this.taskResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

