// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList extends $dara.Model {
  /**
   * @remarks
   * The average bitrate of the output video. Unit: Kbit/s.
   * 
   * @example
   * 749
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the transcoding job was complete. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-27T03:40:51Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the transcoding job was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-27T03:34:46Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The duration of the output video. Unit: seconds.
   * 
   * @example
   * 12
   */
  duration?: string;
  /**
   * @remarks
   * The error code returned when the transcoding job failed.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the transcoding job failed.
   * 
   * @example
   * ErrorMessage
   */
  errorMessage?: string;
  /**
   * @remarks
   * The size of the output video. Unit: bytes.
   * 
   * @example
   * 1144259
   */
  filesize?: number;
  /**
   * @remarks
   * The container format of the output video.
   * 
   * @example
   * mp4
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the output video. Unit: frames per second.
   * 
   * @example
   * 30
   */
  fps?: string;
  /**
   * @remarks
   * The height of the output video. Unit: pixels.
   * 
   * @example
   * 960
   */
  height?: string;
  /**
   * @remarks
   * The status of the transcoding job. Valid values:
   * 
   * *   **Transcoding**: Transcoding is in process.
   * *   **TranscodeSuccess**: The job was successful.
   * *   **TranscodeFail**: The job failed.
   * 
   * @example
   * Transcoding
   */
  transcodeJobStatus?: string;
  /**
   * @remarks
   * The transcoding progress. Valid values: `[0,100]`.
   * 
   * @example
   * 100
   */
  transcodeProgress?: number;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * 57496724ae2*****0968d6e08acc8f6
   */
  transcodeTemplateId?: string;
  /**
   * @remarks
   * The IDs of the watermarks that are applied to the output video.
   */
  watermarkIdList?: string[];
  /**
   * @remarks
   * The width of the output video. Unit: pixels.
   * 
   * @example
   * 544
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      duration: 'Duration',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      filesize: 'Filesize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      transcodeJobStatus: 'TranscodeJobStatus',
      transcodeProgress: 'TranscodeProgress',
      transcodeTemplateId: 'TranscodeTemplateId',
      watermarkIdList: 'WatermarkIdList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      completeTime: 'string',
      creationTime: 'string',
      duration: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      filesize: 'number',
      format: 'string',
      fps: 'string',
      height: 'string',
      transcodeJobStatus: 'string',
      transcodeProgress: 'number',
      transcodeTemplateId: 'string',
      watermarkIdList: { 'type': 'array', 'itemType': 'string' },
      width: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.watermarkIdList)) {
      $dara.Model.validateArray(this.watermarkIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponseBodyTranscodeSummaryList extends $dara.Model {
  /**
   * @remarks
   * The time when the transcoding task was complete. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-23T12:40:12Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the transcoding task was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-01-23T12:35:12Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The summaries of transcoding jobs.
   */
  transcodeJobInfoSummaryList?: GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList[];
  /**
   * @remarks
   * The status of the transcoding task. Valid values:
   * 
   * *   **Processing**: Transcoding is in process.
   * *   **Partial**: Some transcoding jobs were complete.
   * *   **CompleteAllSucc**: All transcoding jobs were successful.
   * *   **CompleteAllFail**: All transcoding jobs failed. If an exception occurs in the source file, no transcoding job is initiated and the transcoding task fails.
   * *   **CompletePartialSucc**: All transcoding jobs were complete but only some were successful.
   * 
   * @example
   * Processing
   */
  transcodeStatus?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * 44f9e406bbb*****736a9abe876ecc0
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The ID of the audio or video file.
   * 
   * @example
   * e1db68cc586644b83e562bcd94****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      transcodeJobInfoSummaryList: 'TranscodeJobInfoSummaryList',
      transcodeStatus: 'TranscodeStatus',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      transcodeJobInfoSummaryList: { 'type': 'array', 'itemType': GetTranscodeSummaryResponseBodyTranscodeSummaryListTranscodeJobInfoSummaryList },
      transcodeStatus: 'string',
      transcodeTemplateGroupId: 'string',
      videoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transcodeJobInfoSummaryList)) {
      $dara.Model.validateArray(this.transcodeJobInfoSummaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the audio or video files that do not exist.
   */
  nonExistVideoIds?: string[];
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
   * The transcoding summary of the file.
   */
  transcodeSummaryList?: GetTranscodeSummaryResponseBodyTranscodeSummaryList[];
  static names(): { [key: string]: string } {
    return {
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
      transcodeSummaryList: 'TranscodeSummaryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      transcodeSummaryList: { 'type': 'array', 'itemType': GetTranscodeSummaryResponseBodyTranscodeSummaryList },
    };
  }

  validate() {
    if(Array.isArray(this.nonExistVideoIds)) {
      $dara.Model.validateArray(this.nonExistVideoIds);
    }
    if(Array.isArray(this.transcodeSummaryList)) {
      $dara.Model.validateArray(this.transcodeSummaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

