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
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds.
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
   * Indicates whether the API call was successful. Valid values:
   * 
   * - `true`: The API call was successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
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
   * The ACR namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The ACR repository.
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
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1568718468000
   */
  startTime?: number;
  /**
   * @remarks
   * The number of subscribed tags.
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

