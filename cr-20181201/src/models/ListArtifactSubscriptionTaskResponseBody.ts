// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactSubscriptionTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The artifact type.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The end time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1692756630000
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-7pd01myak****
   */
  instanceId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test-ns
   */
  namespaceName?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The source namespace.
   * 
   * @example
   * library
   */
  sourceNamespaceName?: string;
  /**
   * @remarks
   * The artifact source.
   * 
   * @example
   * DOCKER_HUB
   */
  sourceProvider?: string;
  /**
   * @remarks
   * The source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The source artifact type.
   * 
   * @example
   * PUBLIC
   */
  sourceRepoType?: string;
  /**
   * @remarks
   * The start time, in UNIX timestamp format. Unit: milliseconds.
   * 
   * @example
   * 1695348301000
   */
  startTime?: string;
  /**
   * @remarks
   * The number of subscribed tags.
   * 
   * @example
   * 3
   */
  tagSubscriptionCount?: number;
  /**
   * @remarks
   * The total number of tags.
   * 
   * @example
   * 311
   */
  tagTotalCount?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * crast-40le4es9yh0p****
   */
  taskId?: string;
  /**
   * @remarks
   * The task result.
   * 
   * @example
   * SUCCESS
   */
  taskResult?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * AUTO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      message: 'Message',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      sourceNamespaceName: 'SourceNamespaceName',
      sourceProvider: 'SourceProvider',
      sourceRepoName: 'SourceRepoName',
      sourceRepoType: 'SourceRepoType',
      startTime: 'StartTime',
      tagSubscriptionCount: 'TagSubscriptionCount',
      tagTotalCount: 'TagTotalCount',
      taskId: 'TaskId',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      endTime: 'string',
      instanceId: 'string',
      message: 'string',
      namespaceName: 'string',
      repoName: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      sourceRepoType: 'string',
      startTime: 'string',
      tagSubscriptionCount: 'number',
      tagTotalCount: 'number',
      taskId: 'string',
      taskResult: 'string',
      taskStatus: 'string',
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

export class ListArtifactSubscriptionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - `true`: The API call is successful.
   * 
   * - `false`: The API call failed.
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
   * 81E7A039-A4EF-57D9-A100-88E5DCEF9D56
   */
  requestId?: string;
  /**
   * @remarks
   * The task list.
   */
  tasks?: ListArtifactSubscriptionTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
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
      tasks: { 'type': 'array', 'itemType': ListArtifactSubscriptionTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

