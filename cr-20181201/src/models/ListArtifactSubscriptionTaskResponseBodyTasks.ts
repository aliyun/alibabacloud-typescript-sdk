// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactSubscriptionTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The type of the artifact.
   * 
   * @example
   * IMAGE
   */
  artifactType?: string;
  /**
   * @remarks
   * The end time of the artifact subscription task.
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
   * test-repo
   */
  repoName?: string;
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
   * The type of the source artifact.
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
   * 1695348301000
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of subscribed tags.
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
   * The status of the task.
   * 
   * @example
   * RUNNING
   */
  taskStatus?: string;
  /**
   * @remarks
   * The type of the task.
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

