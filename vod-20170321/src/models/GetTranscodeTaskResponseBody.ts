// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTaskResponseBodyTranscodeJobInfoListOutputFile extends $dara.Model {
  /**
   * @remarks
   * List of audio streams.
   * 
   * @example
   * "AudioStreamList": "[{\\"Bitrate\\":\\"64.533\\",\\"ChannelLayout\\":\\"stereo\\",\\"Channels\\":\\"2\\",\\"CodecLongName\\":\\"AAC (Advanced Audio Coding)\\",\\"CodecName\\":\\"aac\\",\\"CodecTag\\":\\"0x6134706d\\",\\"CodecTagString\\":\\"mp4a\\",\\"CodecTimeBase\\":\\"1/44100\\",\\"Duration\\":\\"12.615533\\",\\"Index\\":\\"1\\",\\"Lang\\":\\"und\\",\\"SampleFmt\\":\\"fltp\\",\\"Samplerate\\":\\"44100\\",\\"StartTime\\":\\"-0.046440\\",\\"Timebase\\":\\"1/44100\\"}]
   */
  audioStreamList?: string;
  /**
   * @remarks
   * Average bitrate of the transcoded output file. Unit: Kbps.
   * 
   * @example
   * 964
   */
  bitrate?: string;
  /**
   * @remarks
   * Duration of the transcoded output file. Unit: seconds (s).
   * 
   * @example
   * 12
   */
  duration?: string;
  /**
   * @remarks
   * Encryption configuration used for the transcoded output file. Values:
   * 
   * - AliyunVoDEncryption: Alibaba Cloud Video Encryption (private encryption).
   * - HLSEncryption: HLS standard encryption.
   * 
   * @example
   * {\\"EncryptType\\":\\"AliyunVoDEncryption\\"}
   */
  encryption?: string;
  /**
   * @remarks
   * Size of the transcoded output file. Unit: bytes (B).
   * 
   * @example
   * 851076
   */
  filesize?: number;
  /**
   * @remarks
   * Container format of the transcoded output file.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * Frame rate of the transcoded output file. Unit: frames per second (fps).
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * Height of the video frame in the transcoded output file. Unit: pixels (px).
   * 
   * @example
   * 360
   */
  height?: string;
  /**
   * @remarks
   * OSS address of the transcoded output file.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/883f5d*****f20aaa352f/c3be4f073*****7d5193ec8-{DestMd5}-od-S00000001-200000.mp4
   */
  outputFileUrl?: string;
  /**
   * @remarks
   * List of subtitle streams.
   * 
   * @example
   * []
   */
  subtitleStreamList?: string;
  /**
   * @remarks
   * List of video streams.
   * 
   * @example
   * [{\\"AvgFPS\\":\\"30.0\\",\\"Bitrate\\":\\"933.814\\",\\"CodecLongName\\":\\"H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10\\",\\"CodecName\\":\\"h264\\",\\"CodecTag\\":\\"0x31637661\\",\\"CodecTagString\\":\\"avc1\\",\\"CodecTimeBase\\":\\"1/60\\",\\"Dar\\":\\"9:16\\",\\"Duration\\":\\"12.033333\\",\\"Fps\\":\\"30.0\\",\\"HasBFrames\\":\\"2\\",\\"Height\\":\\"360\\",\\"Index\\":\\"0\\",\\"Lang\\":\\"und\\",\\"Level\\":\\"30\\",\\"PixFmt\\":\\"yuv420p\\",\\"Profile\\":\\"High\\",\\"Sar\\":\\"81:256\\",\\"StartTime\\":\\"0.000000\\",\\"Timebase\\":\\"1/15360\\",\\"Width\\":\\"640\\"}]
   */
  videoStreamList?: string;
  /**
   * @remarks
   * List of watermarks used for transcoding.
   */
  watermarkIdList?: string[];
  /**
   * @remarks
   * Width of the video frame in the transcoded output file. Unit: pixels (px).
   * 
   * @example
   * 640
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      bitrate: 'Bitrate',
      duration: 'Duration',
      encryption: 'Encryption',
      filesize: 'Filesize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      outputFileUrl: 'OutputFileUrl',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
      watermarkIdList: 'WatermarkIdList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: 'string',
      bitrate: 'string',
      duration: 'string',
      encryption: 'string',
      filesize: 'number',
      format: 'string',
      fps: 'string',
      height: 'string',
      outputFileUrl: 'string',
      subtitleStreamList: 'string',
      videoStreamList: 'string',
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

export class GetTranscodeTaskResponseBodyTranscodeJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The complete time of the transcoding job. The format is yyyy-MM-dd\\"T\\"HH:mm:ssZ (UTC time).
   * 
   * @example
   * 2019-02-26T08:30:16Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The creation time of the transcoding job. The format is yyyy-MM-dd\\"T\\"HH:mm:ssZ (UTC time).
   * 
   * @example
   * 2019-02-26T08:27:16Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The clarity and audio quality types are defined as follows:
   * 
   * - SD: Standard Definition.
   * - HD: High Definition.
   * - FHD: Full High Definition.
   * - OD: Original Definition.
   * - 2K: 2K.
   * - 4K: 4K.
   * - SQ: Standard Audio Quality.
   * - HQ: High Audio Quality.
   * - AUTO: Adaptive Bitrate.  This is only available when the transcoding template is configured with packaging settings. Please refer to [the Transcoding Template Configuration - Package Setting](https://api.aliyun-inc.com/~~52839~~?spm=openapi-amp.newDocPublishment.0.0.65b0281fNUFIXC) for more details.
   * 
   * > This value represents the clarity label configured in the transcoding template and does not indicate the actual resolution range of the transcoded output file.
   * 
   * @example
   * LD
   */
  definition?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * ErrorMessage
   */
  errorMessage?: string;
  /**
   * @remarks
   * The OSS address of the source file for transcoding.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/customerTrans/5b95e568f8e*****47f38e/31f1184c-*****b2a2-f94-c213f.wmv
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * Information about the transcoded output files.
   */
  outputFile?: GetTranscodeTaskResponseBodyTranscodeJobInfoListOutputFile;
  /**
   * @remarks
   * The priority of the transcoding task.
   * 
   * @example
   * 6
   */
  priority?: string;
  /**
   * @remarks
   * The ID of the transcode job.
   * 
   * @example
   * 38f0e513c88*****85515f9d50be188
   */
  transcodeJobId?: string;
  /**
   * @remarks
   * The status of the transcoding job:
   * 
   * Transcoding: Transcoding in progress.
   * TranscodeSuccess: Transcoding successful.
   * TranscodeFail: Transcoding failed.
   * 
   * @example
   * Transcoding
   */
  transcodeJobStatus?: string;
  /**
   * @remarks
   * The processing progress of the transcoding job. The value range is [0, 100].
   * 
   * @example
   * 80
   */
  transcodeProgress?: number;
  /**
   * @remarks
   * The ID of the template used for the transcode job.
   * 
   * @example
   * 174b0534fea3*****b51c8f0ad1374
   */
  transcodeTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      definition: 'Definition',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      inputFileUrl: 'InputFileUrl',
      outputFile: 'OutputFile',
      priority: 'Priority',
      transcodeJobId: 'TranscodeJobId',
      transcodeJobStatus: 'TranscodeJobStatus',
      transcodeProgress: 'TranscodeProgress',
      transcodeTemplateId: 'TranscodeTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      definition: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      inputFileUrl: 'string',
      outputFile: GetTranscodeTaskResponseBodyTranscodeJobInfoListOutputFile,
      priority: 'string',
      transcodeJobId: 'string',
      transcodeJobStatus: 'string',
      transcodeProgress: 'number',
      transcodeTemplateId: 'string',
    };
  }

  validate() {
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   * 
   * @example
   * "AudioStreamList": "[{\\"Bitrate\\":\\"64.533\\",\\"ChannelLayout\\":\\"stereo\\",\\"Channels\\":\\"2\\",\\"CodecLongName\\":\\"AAC (Advanced Audio Coding)\\",\\"CodecName\\":\\"aac\\",\\"CodecTag\\":\\"0x6134706d\\",\\"CodecTagString\\":\\"mp4a\\",\\"CodecTimeBase\\":\\"1/44100\\",\\"Duration\\":\\"12.615533\\",\\"Index\\":\\"1\\",\\"Lang\\":\\"und\\",\\"SampleFmt\\":\\"fltp\\",\\"Samplerate\\":\\"44100\\",\\"StartTime\\":\\"-0.046440\\",\\"Timebase\\":\\"1/44100\\"}]
   */
  audioStreamList?: string;
  /**
   * @remarks
   * The average bitrate of the output file. Unit: Kbit/s.
   * 
   * @example
   * 964
   */
  bitrate?: string;
  /**
   * @remarks
   * The length of the output file. Unit: seconds.
   * 
   * @example
   * 12
   */
  duration?: string;
  /**
   * @remarks
   * The encryption method of the output file. Valid values:
   * 
   * *   **AliyunVoDEncryption**: Alibaba Cloud proprietary cryptography
   * *   **HLSEncryption**: HTTP Live Streaming (HLS) encryption
   * 
   * @example
   * {\\"EncryptType\\":\\"AliyunVoDEncryption\\"}
   */
  encryption?: string;
  /**
   * @remarks
   * The size of the output file. Unit: byte.
   * 
   * @example
   * 851076
   */
  filesize?: number;
  /**
   * @remarks
   * The container format of the output file.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the output file. Unit: frames per second.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The height of the output video. Unit: pixels.
   * 
   * @example
   * 360
   */
  height?: string;
  /**
   * @remarks
   * The OSS URL of the output file.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/883f5d*****f20aaa352f/c3be4f073*****7d5193ec8-{DestMd5}-od-S00000001-200000.mp4
   */
  outputFileUrl?: string;
  /**
   * @remarks
   * The subtitle streams.
   * 
   * @example
   * []
   */
  subtitleStreamList?: string;
  /**
   * @remarks
   * The video streams.
   * 
   * @example
   * [{\\"AvgFPS\\":\\"30.0\\",\\"Bitrate\\":\\"933.814\\",\\"CodecLongName\\":\\"H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10\\",\\"CodecName\\":\\"h264\\",\\"CodecTag\\":\\"0x31637661\\",\\"CodecTagString\\":\\"avc1\\",\\"CodecTimeBase\\":\\"1/60\\",\\"Dar\\":\\"9:16\\",\\"Duration\\":\\"12.033333\\",\\"Fps\\":\\"30.0\\",\\"HasBFrames\\":\\"2\\",\\"Height\\":\\"360\\",\\"Index\\":\\"0\\",\\"Lang\\":\\"und\\",\\"Level\\":\\"30\\",\\"PixFmt\\":\\"yuv420p\\",\\"Profile\\":\\"High\\",\\"Sar\\":\\"81:256\\",\\"StartTime\\":\\"0.000000\\",\\"Timebase\\":\\"1/15360\\",\\"Width\\":\\"640\\"}]
   */
  videoStreamList?: string;
  /**
   * @remarks
   * The IDs of the watermarks used by the output file.
   */
  watermarkIdList?: string[];
  /**
   * @remarks
   * The width of the output video. Unit: pixels.
   * 
   * @example
   * 640
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      bitrate: 'Bitrate',
      duration: 'Duration',
      encryption: 'Encryption',
      filesize: 'Filesize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      outputFileUrl: 'OutputFileUrl',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
      watermarkIdList: 'WatermarkIdList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: 'string',
      bitrate: 'string',
      duration: 'string',
      encryption: 'string',
      filesize: 'number',
      format: 'string',
      fps: 'string',
      height: 'string',
      outputFileUrl: 'string',
      subtitleStreamList: 'string',
      videoStreamList: 'string',
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

export class GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList extends $dara.Model {
  /**
   * @remarks
   * The time when the transcoding job was complete. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-26T08:30:16Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the transcoding job was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-02-26T08:27:16Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The video resolution. Valid values:
   * 
   * *   **LD**: low definition
   * *   **SD**: standard definition
   * *   **HD**: high definition
   * *   **FHD**: ultra high definition
   * *   **OD**: original definition
   * *   **2K**: 2K
   * *   **4K**: 4K
   * *   **SQ**: standard sound quality
   * *   **HQ**: high sound quality
   * *   **AUTO**: adaptive bitrate Adaptive bitrate streams are returned only if PackageSetting is set in the transcoding template. For more information, see [Basic structures](https://help.aliyun.com/document_detail/52839.html).
   * 
   * > This parameter indicates the definition that is configured in the transcoding template and does not indicate the actual resolution of the output video.
   * 
   * @example
   * LD
   */
  definition?: string;
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
   * The Object Storage Service (OSS) URL of the input file.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/customerTrans/5b95e568f8e*****47f38e/31f1184c-*****b2a2-f94-c213f.wmv
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * The information about the output file.
   */
  outputFile?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile;
  /**
   * @remarks
   * The priority of the transcoding job.
   * 
   * @example
   * 6
   */
  priority?: string;
  /**
   * @remarks
   * The ID of the transcoding job.
   * 
   * @example
   * 38f0e513c88*****85515f9d50be188
   */
  transcodeJobId?: string;
  /**
   * @remarks
   * The status of the transcoding job.
   * 
   * *   **Transcoding**
   * *   **TranscodeSuccess**
   * *   **TranscodeFail**
   * 
   * @example
   * Transcoding
   */
  transcodeJobStatus?: string;
  /**
   * @remarks
   * The progress of the transcoding job. Valid values: `[0,100]`.
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
   * 174b0534fea3*****b51c8f0ad1374
   */
  transcodeTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      definition: 'Definition',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      inputFileUrl: 'InputFileUrl',
      outputFile: 'OutputFile',
      priority: 'Priority',
      transcodeJobId: 'TranscodeJobId',
      transcodeJobStatus: 'TranscodeJobStatus',
      transcodeProgress: 'TranscodeProgress',
      transcodeTemplateId: 'TranscodeTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeTime: 'string',
      creationTime: 'string',
      definition: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      inputFileUrl: 'string',
      outputFile: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile,
      priority: 'string',
      transcodeJobId: 'string',
      transcodeJobStatus: 'string',
      transcodeProgress: 'number',
      transcodeTemplateId: 'string',
    };
  }

  validate() {
    if(this.outputFile && typeof (this.outputFile as any).validate === 'function') {
      (this.outputFile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBodyTranscodeTask extends $dara.Model {
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
   * 
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
   * Details about transcoding jobs.
   */
  transcodeJobInfoList?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList[];
  /**
   * @remarks
   * The ID of the transcoding task.
   * 
   * @example
   * b1b65ab107e14*****3dbb900f6c1fe0
   */
  transcodeTaskId?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * b500c7094bd241*****3e9900752d7c3
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * The mode in which the transcoding task is triggered. Valid values:
   * 
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
   * 883f5d98107*****b7f20aaa352f
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      completeTime: 'CompleteTime',
      creationTime: 'CreationTime',
      taskStatus: 'TaskStatus',
      transcodeJobInfoList: 'TranscodeJobInfoList',
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
      transcodeJobInfoList: { 'type': 'array', 'itemType': GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList },
      transcodeTaskId: 'string',
      transcodeTemplateGroupId: 'string',
      trigger: 'string',
      videoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.transcodeJobInfoList)) {
      $dara.Model.validateArray(this.transcodeJobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTranscodeTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The nonexistent job ID.
   */
  nonExistJobIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F4C6D5BE-BF13-45*****6C-516EA8906DCD
   */
  requestId?: string;
  /**
   * @remarks
   * List of transcode job information.
   */
  transcodeJobInfoList?: GetTranscodeTaskResponseBodyTranscodeJobInfoList[];
  /**
   * @remarks
   * Details about transcoding tasks.
   */
  transcodeTask?: GetTranscodeTaskResponseBodyTranscodeTask;
  static names(): { [key: string]: string } {
    return {
      nonExistJobIds: 'NonExistJobIds',
      requestId: 'RequestId',
      transcodeJobInfoList: 'TranscodeJobInfoList',
      transcodeTask: 'TranscodeTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistJobIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      transcodeJobInfoList: { 'type': 'array', 'itemType': GetTranscodeTaskResponseBodyTranscodeJobInfoList },
      transcodeTask: GetTranscodeTaskResponseBodyTranscodeTask,
    };
  }

  validate() {
    if(Array.isArray(this.nonExistJobIds)) {
      $dara.Model.validateArray(this.nonExistJobIds);
    }
    if(Array.isArray(this.transcodeJobInfoList)) {
      $dara.Model.validateArray(this.transcodeJobInfoList);
    }
    if(this.transcodeTask && typeof (this.transcodeTask as any).validate === 'function') {
      (this.transcodeTask as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

