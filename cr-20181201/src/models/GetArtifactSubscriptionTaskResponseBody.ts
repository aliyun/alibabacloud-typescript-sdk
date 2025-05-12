// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArtifactSubscriptionTaskResponseBody extends $dara.Model {
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
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The end time of the artifact subscription task.
   * 
   * @example
   * 1691979202000
   */
  endTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-xkx6vujuhay0****
   */
  instanceId?: string;
  /**
   * @remarks
   * Indicates whether the API request is successful. Valid values:
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
   * The return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the Container Registry namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The name of the Container Registry repository.
   * 
   * @example
   * test-repo
   */
  repoName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12589EF7-96E2-4554-AAD7-F7209E88CAD3
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the source namespace.
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
   * The name of the source repository.
   * 
   * @example
   * nginx
   */
  sourceRepoName?: string;
  /**
   * @remarks
   * The type of the source repository.
   * 
   * @example
   * PUBLIC
   */
  sourceRepoType?: string;
  /**
   * @remarks
   * The start time of the artifact subscription task.
   * 
   * @example
   * 1568718468000
   */
  startTime?: number;
  /**
   * @remarks
   * The total subscribed tags.
   * 
   * @example
   * 1
   */
  tagSubscriptionCount?: number;
  /**
   * @remarks
   * The total number of tags.
   * 
   * @example
   * 6
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
   * The task results.
   * 
   * @example
   * SUCCESS
   */
  taskResult?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * @example
   * AUTO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      code: 'Code',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      message: 'Message',
      namespaceName: 'NamespaceName',
      repoName: 'RepoName',
      requestId: 'RequestId',
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
      code: 'string',
      endTime: 'number',
      instanceId: 'string',
      isSuccess: 'boolean',
      message: 'string',
      namespaceName: 'string',
      repoName: 'string',
      requestId: 'string',
      sourceNamespaceName: 'string',
      sourceProvider: 'string',
      sourceRepoName: 'string',
      sourceRepoType: 'string',
      startTime: 'number',
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

