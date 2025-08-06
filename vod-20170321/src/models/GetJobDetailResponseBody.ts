// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobDetailResponseBodyAIJobDetail extends $dara.Model {
  /**
   * @remarks
   * The end time of the task.
   * 
   * @example
   * 2024-10-14T07:39:46Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-10-14T07:39:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 5c9dff751ba**********59d50a967f5
   */
  jobId?: string;
  /**
   * @remarks
   * The type of the AI task.
   * 
   * @example
   * AIVideoCensor
   */
  jobType?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 30e5d7**********bd900764de7c0102
   */
  mediaId?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   reserved
   * *   init
   * *   success
   * *   fail
   * *   processing
   * *   analysing
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The template configuration.
   * 
   * @example
   * {"AuditRange":["video","image-cover","text-title"],"AuditContent":["screen"],"AuditItem":["terrorism","porn"],"AuditAutoBlock":"no"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The trigger mode. Valid values:
   * 
   * *   Auto
   * *   Manual
   * 
   * @example
   * Auto
   */
  trigger?: string;
  /**
   * @remarks
   * The ID of the user who submitted the task.
   * 
   * @example
   * 139109*****84930
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      jobId: 'JobId',
      jobType: 'JobType',
      mediaId: 'MediaId',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      trigger: 'Trigger',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      createTime: 'string',
      jobId: 'string',
      jobType: 'string',
      mediaId: 'string',
      status: 'string',
      templateConfig: 'string',
      trigger: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBodySnapshotJobDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * 2024-10-14T07:39:45Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-10-14T07:39:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 63df12s0**********4hdq249t82kr91
   */
  jobId?: string;
  /**
   * @remarks
   * Configuration of normal snapshots.
   * 
   * @example
   * {"inl":0,"num":32,"tm":5,"wd":"352","ft":"normal","hg":"640"}
   */
  normalConfig?: string;
  /**
   * @remarks
   * The sprite configuration.
   * 
   * @example
   * {"pad":"0","lines":"10","mgin":"0","cols":"10","ikcp":"false","hg":"68"}
   */
  spriteConfig?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   Processing
   * *   Fail
   * *   Success
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The trigger mode. Valid values:
   * 
   * *   Auto
   * *   Manual
   * 
   * @example
   * Auto
   */
  trigger?: string;
  /**
   * @remarks
   * The ID of the user who submitted the task.
   * 
   * @example
   * 139109*****84930
   */
  userId?: number;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 30e5d7**********bd900764de7c0102
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      jobId: 'JobId',
      normalConfig: 'NormalConfig',
      spriteConfig: 'SpriteConfig',
      status: 'Status',
      trigger: 'Trigger',
      userId: 'UserId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      createTime: 'string',
      jobId: 'string',
      normalConfig: 'string',
      spriteConfig: 'string',
      status: 'string',
      trigger: 'string',
      userId: 'number',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBodyTranscodeJobDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * 2024-10-14T07:39:34Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-10-14T07:39:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The definition.
   * 
   * @example
   * HD
   */
  definition?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 2dc1634e**********3f1d22d1a0174e
   */
  jobId?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   Submitted
   * *   Transcoding
   * *   TranscodeSuccess
   * *   TranscodeFail
   * *   TranscodeCancelled
   * 
   * @example
   * TranscodeSuccess
   */
  status?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * dbfaaec9e**********bf0b81219244c
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the user who submitted the task.
   * 
   * @example
   * 139109*****84930
   */
  userId?: number;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 30e5d7**********bd900764de7c0102
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      createTime: 'CreateTime',
      definition: 'Definition',
      jobId: 'JobId',
      status: 'Status',
      templateId: 'TemplateId',
      userId: 'UserId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      createTime: 'string',
      definition: 'string',
      jobId: 'string',
      status: 'string',
      templateId: 'string',
      userId: 'number',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBodyWorkflowTaskDetailWorkflow extends $dara.Model {
  appId?: string;
  createTime?: string;
  modifiedTime?: string;
  name?: string;
  status?: string;
  type?: string;
  workflowId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      status: 'Status',
      type: 'Type',
      workflowId: 'WorkflowId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      createTime: 'string',
      modifiedTime: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
      workflowId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBodyWorkflowTaskDetail extends $dara.Model {
  activityResults?: string;
  createTime?: string;
  finishTime?: string;
  status?: string;
  taskId?: string;
  taskInput?: string;
  userData?: string;
  workflow?: GetJobDetailResponseBodyWorkflowTaskDetailWorkflow;
  static names(): { [key: string]: string } {
    return {
      activityResults: 'ActivityResults',
      createTime: 'CreateTime',
      finishTime: 'FinishTime',
      status: 'Status',
      taskId: 'TaskId',
      taskInput: 'TaskInput',
      userData: 'UserData',
      workflow: 'Workflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityResults: 'string',
      createTime: 'string',
      finishTime: 'string',
      status: 'string',
      taskId: 'string',
      taskInput: 'string',
      userData: 'string',
      workflow: GetJobDetailResponseBodyWorkflowTaskDetailWorkflow,
    };
  }

  validate() {
    if(this.workflow && typeof (this.workflow as any).validate === 'function') {
      (this.workflow as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the AI task. This parameter takes effect only when the TaskType parameter is set to AI.
   */
  AIJobDetail?: GetJobDetailResponseBodyAIJobDetail;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * @example
   * transcode
   */
  jobType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6708D849-F109-1A6C-AC91-************
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the snapshot task. This parameter takes effect only when the jobType parameter is set to Snapshot.
   */
  snapshotJobDetail?: GetJobDetailResponseBodySnapshotJobDetail;
  /**
   * @remarks
   * The details of the transcoding task. This parameter takes effect only when the jobType parameter is set to Transcode.
   */
  transcodeJobDetail?: GetJobDetailResponseBodyTranscodeJobDetail;
  workflowTaskDetail?: GetJobDetailResponseBodyWorkflowTaskDetail;
  static names(): { [key: string]: string } {
    return {
      AIJobDetail: 'AIJobDetail',
      jobType: 'JobType',
      requestId: 'RequestId',
      snapshotJobDetail: 'SnapshotJobDetail',
      transcodeJobDetail: 'TranscodeJobDetail',
      workflowTaskDetail: 'WorkflowTaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIJobDetail: GetJobDetailResponseBodyAIJobDetail,
      jobType: 'string',
      requestId: 'string',
      snapshotJobDetail: GetJobDetailResponseBodySnapshotJobDetail,
      transcodeJobDetail: GetJobDetailResponseBodyTranscodeJobDetail,
      workflowTaskDetail: GetJobDetailResponseBodyWorkflowTaskDetail,
    };
  }

  validate() {
    if(this.AIJobDetail && typeof (this.AIJobDetail as any).validate === 'function') {
      (this.AIJobDetail as any).validate();
    }
    if(this.snapshotJobDetail && typeof (this.snapshotJobDetail as any).validate === 'function') {
      (this.snapshotJobDetail as any).validate();
    }
    if(this.transcodeJobDetail && typeof (this.transcodeJobDetail as any).validate === 'function') {
      (this.transcodeJobDetail as any).validate();
    }
    if(this.workflowTaskDetail && typeof (this.workflowTaskDetail as any).validate === 'function') {
      (this.workflowTaskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

