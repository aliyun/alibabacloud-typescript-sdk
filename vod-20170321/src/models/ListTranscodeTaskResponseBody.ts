// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeTaskResponseBodyTranscodeTaskList extends $dara.Model {
  /**
   * @remarks
   * The time when the transcoding task was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-23T12:40:12Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the transcoding task was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-23T12:35:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The status of the transcoding task. Valid values:
   * *   **Processing**: In progress.
   * *   **Partial**: Some transcoding jobs were complete.
   * *   **CompleteAllSucc**: All transcoding jobs were successful.
   * *   **CompleteAllFail**: All transcoding jobs failed. If an exception occurs in the source file, no transcoding job is initiated and the transcoding task fails.
   * *   **CompletePartialSucc**: All transcoding jobs were complete but only some were successful.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The ID of the transcoding task.
   * 
   * @example
   * b1b65ab107*****ba3dbb900f6c1fe0
   */
  transcodeTaskId?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * b500c7094bd24*****f3e9900752d7c3
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The mode in which the transcoding task is triggered. Valid values:
   * *   **Auto**: The transcoding task is automatically triggered when the video is uploaded.
   * *   **Manual**: The transcoding task is triggered by calling the SubmitTranscodeJobs operation.
   * 
   * @example
   * Auto
   */
  trigger?: string;
  /**
   * @remarks
   * The ID of the audio or video file.
   * 
   * @example
   * d4860fcc6a5*****bce9fed52e893824
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      taskStatus: 'TaskStatus',
      transcodeTaskId: 'TranscodeTaskId',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      trigger: 'Trigger',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      taskStatus: 'string',
      transcodeTaskId: 'string',
      transcodeTemplateGroupId: 'string',
      trigger: 'string',
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

export class ListTranscodeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * Details about transcoding tasks.
   */
  transcodeTaskList?: ListTranscodeTaskResponseBodyTranscodeTaskList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transcodeTaskList: 'TranscodeTaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transcodeTaskList: { 'type': 'array', 'itemType': ListTranscodeTaskResponseBodyTranscodeTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.transcodeTaskList)) {
      $dara.Model.validateArray(this.transcodeTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

