// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgentTaskResponseBodyTasksArtifacts extends $dara.Model {
  /**
   * @remarks
   * The MIME type.
   * 
   * @example
   * image/png
   */
  contentType?: string;
  /**
   * @remarks
   * The presigned OSS download URL.
   * 
   * @example
   * https://bucket.oss-cn-hangzhou.aliyuncs.com/...
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * screenshot.png
   */
  name?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 1024
   */
  size?: number;
  /**
   * @remarks
   * The upload time in ISO 8601 format.
   * 
   * @example
   * 2026-08-05T10:00:00+08:00
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      downloadUrl: 'DownloadUrl',
      name: 'Name',
      size: 'Size',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      downloadUrl: 'string',
      name: 'string',
      size: 'number',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgentTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The number of task artifacts.
   * 
   * @example
   * 2
   */
  artifactCount?: number;
  /**
   * @remarks
   * The list of uploaded task artifacts.
   */
  artifacts?: DescribeAgentTaskResponseBodyTasksArtifacts[];
  /**
   * @remarks
   * The current status of the task. Valid values:
   * - PENDING: The task is being created.
   * - RUNNING: The task is running.
   * - COMPLETED: The task is completed.
   * - FAILED: The task failed.
   * - TIMEOUT: The task execution timed out.
   * 
   * @example
   * COMPLETED
   */
  currentStatus?: string;
  /**
   * @remarks
   * The source of the digest. Valid values: PROMPT_AUTO (automatically generated), RESULT_AUTO (refined from the result), and USER (edited by the user).
   * 
   * @example
   * PROMPT_AUTO
   */
  digestSource?: string;
  /**
   * @remarks
   * The ID of the mobile node.
   * 
   * @example
   * acp-anzzuho371azi44xr
   */
  instanceId?: string;
  /**
   * @remarks
   * The reason for the task status.
   */
  reason?: string;
  /**
   * @remarks
   * The time when the task was created, in ISO 8601 format.
   * 
   * @example
   * 2026-04-13T17:42:19Z
   */
  runningAt?: string;
  /**
   * @remarks
   * The number of executed steps.
   * 
   * @example
   * 30
   */
  steps?: string;
  /**
   * @remarks
   * The task digest text, up to 25 characters in length.
   * 
   * @example
   * Download DingTalk
   */
  taskDigest?: string;
  /**
   * @remarks
   * The duration of the task. This field is returned only when CurrentStatus is FAILED or COMPLETED.
   * 
   * @example
   * 50
   */
  taskDuration?: string;
  /**
   * @remarks
   * The globally unique task ID.
   * 
   * @example
   * t-imr0fufqd7cle****
   */
  taskId?: string;
  /**
   * @remarks
   * The task result (desired state) of the node. This field is returned only when CurrentStatus is COMPLETED or FAILED.
   * 
   * @example
   * DingTalk downloaded successfully
   */
  taskResult?: string;
  /**
   * @remarks
   * The user prompt in natural language that instructs the agent to perform operations.
   * 
   * @example
   * Download DingTalk from the app store
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      artifactCount: 'ArtifactCount',
      artifacts: 'Artifacts',
      currentStatus: 'CurrentStatus',
      digestSource: 'DigestSource',
      instanceId: 'InstanceId',
      reason: 'Reason',
      runningAt: 'RunningAt',
      steps: 'Steps',
      taskDigest: 'TaskDigest',
      taskDuration: 'TaskDuration',
      taskId: 'TaskId',
      taskResult: 'TaskResult',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactCount: 'number',
      artifacts: { 'type': 'array', 'itemType': DescribeAgentTaskResponseBodyTasksArtifacts },
      currentStatus: 'string',
      digestSource: 'string',
      instanceId: 'string',
      reason: 'string',
      runningAt: 'string',
      steps: 'string',
      taskDigest: 'string',
      taskDuration: 'string',
      taskId: 'string',
      taskResult: 'string',
      userPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgentTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * For example, "200" indicates success
   */
  code?: string;
  /**
   * @remarks
   * The number of tasks.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 310A783E-CC46-5452-A8A3-71AE5DB5****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tasks.
   */
  tasks?: DescribeAgentTaskResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      message: 'Message',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      message: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': DescribeAgentTaskResponseBodyTasks },
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

