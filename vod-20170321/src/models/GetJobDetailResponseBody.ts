// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobDetailResponseBodyAIJobDetail extends $dara.Model {
  /**
   * @remarks
   * The time when the task ended. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2024-10-14T07:39:46Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2024-10-14T07:39:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 5c9dff751ba**********59d50a967f5
   */
  jobId?: string;
  /**
   * @remarks
   * The AI task type.
   * 
   * @example
   * AIVideoCensor
   */
  jobType?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 30e5d7**********bd900764de7c0102
   */
  mediaId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - reserved: The task is submitted.
   * - init: The task is started.
   * - success: The task succeeded.
   * - fail: The task failed.
   * - processing: The task is being processed.
   * - analysing: The task is being analyzed.
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
   * The trigger method. Valid values:
   * 
   * - Auto: Automatically triggered by a workflow.
   * - Manual: Manually submitted.
   * 
   * @example
   * Auto
   */
  trigger?: string;
  /**
   * @remarks
   * The ID of the user who initiated the task.
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
   * The time when the task was completed. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2024-10-14T07:39:45Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2024-10-14T07:39:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 63df12s0**********4hdq249t82kr91
   */
  jobId?: string;
  /**
   * @remarks
   * The normal snapshot configuration.
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
   * The task status. Valid values:
   * 
   * - Processing: The task is being processed.
   * - Fail: The task failed.
   * - Success: The task succeeded.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The trigger method. Valid values:
   * 
   * - Auto: Automatically triggered by a workflow.
   * - Manual: Manually submitted.
   * 
   * @example
   * Auto
   */
  trigger?: string;
  /**
   * @remarks
   * The ID of the user who initiated the task.
   * 
   * @example
   * 139109*****84930
   */
  userId?: number;
  /**
   * @remarks
   * The media asset ID.
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
   * The time when the task was completed. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2024-10-14T07:39:34Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
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
   * The job ID.
   * 
   * @example
   * 2dc1634e**********3f1d22d1a0174e
   */
  jobId?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Submitted: The task is submitted.
   * - Transcoding: The task is being transcoded.
   * - TranscodeSuccess: Transcoding succeeded.
   * - TranscodeFail: Transcoding failed.
   * - TranscodeCancelled: Transcoding is canceled.
   * 
   * @example
   * TranscodeSuccess
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * dbfaaec9e**********bf0b81219244c
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the user who initiated the task.
   * 
   * @example
   * 139109*****84930
   */
  userId?: number;
  /**
   * @remarks
   * The media asset ID.
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
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The time when the workflow was created. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2025-03-26T05:50:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the workflow was modified. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2025-03-26T07:51:55Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The workflow name.
   * 
   * @example
   * All_Activity_New_1_app-1000000
   */
  name?: string;
  /**
   * @remarks
   * The workflow status. Valid values:
   * - Active: The workflow is activated.
   * - Inactive: The workflow is not activated.
   * - Deleted: The workflow is deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The workflow type. By default, this field is not populated.
   */
  type?: string;
  /**
   * @remarks
   * The workflow ID.
   * 
   * @example
   * vw_09d6*****b5c5b19a0c891e02
   */
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
  /**
   * @remarks
   * The processing results of each node in the workflow, in JSON format.
   * 
   * @example
   * {\"VodSnapshot_123\":{\"ActivityId\":\"VodSnapshot\",\"ActivityInstanceId\":\"c8cf62d53bef4e04bf703976bae6d0b9\",\"EndTime\":\"2025-03-27T08:15:51Z\",\"Result\":\"{\\\"RequestId\\\":\\\"8B3649AF-5A6B-1099-BEB6-164D81067398\\\",\\\"EventType\\\":\\\"SnapshotComplete\\\",\\\"UserId\\\":1797131669910763,\\\"MessageBody\\\":{\\\"Status\\\":\\\"success\\\",\\\"VideoId\\\":\\\"00f985a50ae371f0ad1c4106e0ea0102\\\",\\\"EventType\\\":\\\"SnapshotComplete\\\",\\\"EventTime\\\":\\\"2025-03-27T08:15:50Z\\\",\\\"TriggerSource\\\":\\\"{\\\\\\\"ActivityInstanceId\\\\\\\":\\\\\\\"c8cf62d53bef4e04bf703976bae6d0b9\\\\\\\",\\\\\\\"BizType\\\\\\\":\\\\\\\"ice-workflow\\\\\\\"}\\\"}}\",\"StartTime\":\"2025-03-27T08:15:47Z\",\"Status\":\"Succeed\"},\"Translate_zh_en\":{\"ActivityId\":\"VodTranslation\",\"ActivityInstanceId\":\"c043a872bb044763a3d293a5c2458b50\",\"EndTime\":\"2025-03-27T08:20:19Z\",\"Result\":\"{\\\"Type\\\":\\\"VideoTranslationAll\\\",\\\"Success\\\":false}\",\"StartTime\":\"2025-03-27T08:15:46Z\",\"Status\":\"Failed\"},\"Act_Start\":{\"ActivityId\":\"start\",\"ActivityInstanceId\":\"8a9402f4ff064084bf496707fb2d664a\",\"Result\":\"{\\\"Type\\\":\\\"Media\\\",\\\"bizType\\\":6,\\\"Media\\\":\\\"00f985a50ae371f0ad1c4106e0ea0102\\\",\\\"Title\\\":\\\"2.mp4\\\",\\\"taskInput\\\":\\\"{\\\\\\\"Type\\\\\\\":\\\\\\\"Media\\\\\\\",\\\\\\\"Media\\\\\\\":\\\\\\\"00f985a50ae371f0ad1c4106e0ea0102\\\\\\\"}\\\",\\\"userTaskInput\\\":\\\"{\\\\\\\"Type\\\\\\\":\\\\\\\"Media\\\\\\\",\\\\\\\"Media\\\\\\\":\\\\\\\"00f985a50ae371f0ad1c4106e0ea0102\\\\\\\",\\\\\\\"Title\\\\\\\":\\\\\\\"2.mp4\\\\\\\",\\\\\\\"StorageLocation\\\\\\\":\\\\\\\"yiming-pre.oss-cn-shanghai.aliyuncs.com\\\\\\\"}\\\",\\\"StorageLocation\\\":\\\"yiming-pre.oss-cn-shanghai.aliyuncs.com\\\",\\\"callerUid\\\":1797131669910763,\\\"CUR_NODE_NAME\\\":\\\"Act_Start\\\"}\",\"StartTime\":\"2025-03-27T08:15:45Z\",\"Status\":\"Succeed\"},\"VodDynamicImage_123\":{\"ActivityId\":\"VodDynamicImage\",\"ActivityInstanceId\":\"26e8dab82ab84110b1150f146caf633c\",\"EndTime\":\"2025-03-27T08:15:55Z\",\"Result\":\"{\\\"RequestId\\\":\\\"7120B5D5-430F-14AD-8922-577F072DDD64\\\",\\\"EventType\\\":\\\"DynamicImageComplete\\\",\\\"UserId\\\":1797131669910763,\\\"MessageBody\\\":{\\\"Status\\\":\\\"success\\\",\\\"VideoId\\\":\\\"00f985a50ae371f0ad1c4106e0ea0102\\\",\\\"EventType\\\":\\\"DynamicImageComplete\\\",\\\"EventTime\\\":\\\"2025-03-27T08:15:52Z\\\",\\\"TriggerSource\\\":\\\"{\\\\\\\"ActivityInstanceId\\\\\\\":\\\\\\\"26e8dab82ab84110b1150f146caf633c\\\\\\\",\\\\\\\"BizType\\\\\\\":\\\\\\\"ice-workflow\\\\\\\"}\\\"}}\",\"StartTime\":\"2025-03-27T08:15:47Z\",\"Status\":\"Succeed\"}}
   */
  activityResults?: string;
  /**
   * @remarks
   * The time when the task was created. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2025-03-27T08:15:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the task was completed. The time is displayed in UTC in the YYYY-MM-DDTHH:MM:SSZ format.
   * 
   * @example
   * 2025-03-27T08:20:19Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Init: The task is started.
   * - Processing: The task is being processed.
   * - Succeed: The task succeeded.
   * - Failed: The task failed.
   * - Canceled: The task is canceled.
   * - Skip: The task is skipped.
   * 
   * @example
   * Succeed
   */
  status?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 46ecc024******92c8e26237e51
   */
  taskId?: string;
  /**
   * @remarks
   * The media asset information.
   * 
   * @example
   * {\"Type\":\"Media\",\"Media\":\"00f985a50ae371f0ad1c4106e0ea0102\",\"Title\":\"2.mp4\",\"StorageLocation\":\"yiming-pre.oss-cn-shanghai.aliyuncs.com\"}
   */
  taskInput?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks and upload acceleration.
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The workflow details.
   */
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
   * The details of the AI task. This field has a value only when TaskType is AI.
   */
  AIJobDetail?: GetJobDetailResponseBodyAIJobDetail;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * transcode
   */
  jobType?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 6708D849-F109-1A6C-AC91-************
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the snapshot task. This field has a value only when JobType is Snapshot.
   */
  snapshotJobDetail?: GetJobDetailResponseBodySnapshotJobDetail;
  /**
   * @remarks
   * The details of the transcoding task. This field has a value only when JobType is Transcode.
   */
  transcodeJobDetail?: GetJobDetailResponseBodyTranscodeJobDetail;
  /**
   * @remarks
   * The details of the workflow task. This field has a value only when TaskType is Workflow.
   */
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

