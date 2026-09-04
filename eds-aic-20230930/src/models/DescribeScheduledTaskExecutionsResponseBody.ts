// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScheduledTaskExecutionsResponseBodyExecutionsArtifacts extends $dara.Model {
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
   * The OSS pre-signed download URL.
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

export class DescribeScheduledTaskExecutionsResponseBodyExecutions extends $dara.Model {
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
  artifacts?: DescribeScheduledTaskExecutionsResponseBodyExecutionsArtifacts[];
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-06-12T00:05:30
   */
  completedAt?: string;
  /**
   * @remarks
   * The configuration snapshot in JSON format.
   * 
   * @example
   * {"maxSteps":10}
   */
  configSnapshot?: string;
  /**
   * @remarks
   * The execution duration in milliseconds.
   * 
   * @example
   * 330000
   */
  durationMs?: number;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * TaskTimeout
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * task timeout after 600s
   */
  errorMessage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * acp-axxkuuxahbu1*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The execution output in JSON format.
   * 
   * @example
   * {"result":"ok"}
   */
  output?: string;
  /**
   * @remarks
   * The ID of the scheduled task.
   * 
   * @example
   * sch-260705-agb*****
   */
  scheduledId?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2026-06-12T00:00:00
   */
  startedAt?: string;
  /**
   * @remarks
   * The execution status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The ID of the scheduled task execution record.
   * 
   * @example
   * t-260703-gby*****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      artifactCount: 'ArtifactCount',
      artifacts: 'Artifacts',
      completedAt: 'CompletedAt',
      configSnapshot: 'ConfigSnapshot',
      durationMs: 'DurationMs',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      instanceId: 'InstanceId',
      output: 'Output',
      scheduledId: 'ScheduledId',
      startedAt: 'StartedAt',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactCount: 'number',
      artifacts: { 'type': 'array', 'itemType': DescribeScheduledTaskExecutionsResponseBodyExecutionsArtifacts },
      completedAt: 'string',
      configSnapshot: 'string',
      durationMs: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      instanceId: 'string',
      output: 'string',
      scheduledId: 'string',
      startedAt: 'string',
      status: 'string',
      taskId: 'string',
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

export class DescribeScheduledTaskExecutionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the operation.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of task execution records.
   */
  executions?: DescribeScheduledTaskExecutionsResponseBodyExecutions[];
  /**
   * @remarks
   * The maximum number of results returned in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
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
   * The pagination token for the next page.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kU****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A51B1DF-96FF-3BCC-B08C-783161D3****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of results returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      executions: 'Executions',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      executions: { 'type': 'array', 'itemType': DescribeScheduledTaskExecutionsResponseBodyExecutions },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executions)) {
      $dara.Model.validateArray(this.executions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

