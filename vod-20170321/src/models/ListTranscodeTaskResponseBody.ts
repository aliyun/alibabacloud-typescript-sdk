// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeTaskResponseBodyTranscodeTaskList extends $dara.Model {
  /**
   * @remarks
   * The time when the transcoding task was complete. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-01-23T12:40:12Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the transcoding task was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-01-23T12:35:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The status of the transcoding task.
   * 
   * - **Processing**: in progress.
   * - **Partial**: partially completed.
   * - **CompleteAllSucc**: all transcoding jobs are complete and successful.
   * - **CompleteAllFail**: all transcoding jobs are complete but all failed. If the source file has issues, no transcoding jobs are initiated and the entire transcoding task fails.
   * - **CompletePartialSucc**: all transcoding jobs are complete but only some are successful.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The transcoding task ID.
   * 
   * @example
   * b1b65ab107*****ba3dbb900f6c1fe0
   */
  transcodeTaskId?: string;
  /**
   * @remarks
   * The ID of the transcoding template group used for transcoding.
   * 
   * @example
   * b500c7094bd24*****f3e9900752d7c3
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * - **Auto**: automatically triggered after a video is uploaded.
   * - **Manual**: triggered by calling the SubmitTranscodeJobs operation.
   * 
   * @example
   * Auto
   */
  trigger?: string;
  /**
   * @remarks
   * The audio or video ID.
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
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The list of transcoding task information.
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

