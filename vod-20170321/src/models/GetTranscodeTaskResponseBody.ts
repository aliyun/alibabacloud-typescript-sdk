// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranscodeTaskResponseBodyTranscodeJobInfoListOutputFile extends $dara.Model {
  /**
   * @remarks
   * The list of audio streams.
   * 
   * @example
   * "AudioStreamList": "[{\\"Bitrate\\":\\"64.533\\",\\"ChannelLayout\\":\\"stereo\\",\\"Channels\\":\\"2\\",\\"CodecLongName\\":\\"AAC (Advanced Audio Coding)\\",\\"CodecName\\":\\"aac\\",\\"CodecTag\\":\\"0x6134706d\\",\\"CodecTagString\\":\\"mp4a\\",\\"CodecTimeBase\\":\\"1/44100\\",\\"Duration\\":\\"12.615533\\",\\"Index\\":\\"1\\",\\"Lang\\":\\"und\\",\\"SampleFmt\\":\\"fltp\\",\\"Samplerate\\":\\"44100\\",\\"StartTime\\":\\"-0.046440\\",\\"Timebase\\":\\"1/44100\\"}]
   */
  audioStreamList?: string;
  /**
   * @remarks
   * The average bitrate of the transcoding output file. Unit: Kbps.
   * 
   * @example
   * 964
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the transcoding output file. Unit: seconds.
   * 
   * @example
   * 12
   */
  duration?: string;
  /**
   * @remarks
   * The encryption configuration used for the transcoding output file. Valid values:
   * 
   * - **AliyunVoDEncryption**: Alibaba Cloud video encryption (proprietary encryption).
   * - **HLSEncryption**: HLS encryption.
   * 
   * @example
   * {\\"EncryptType\\":\\"AliyunVoDEncryption\\"}
   */
  encryption?: string;
  /**
   * @remarks
   * The size of the transcoding output file. Unit: bytes.
   * 
   * @example
   * 851076
   */
  filesize?: number;
  /**
   * @remarks
   * The container format of the transcoding output file.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the transcoding output file. Unit: frames per second.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The height of the transcoding output video. Unit: px.
   * 
   * @example
   * 360
   */
  height?: string;
  /**
   * @remarks
   * The OSS URL of the transcoding output file.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/883f5d*****f20aaa352f/c3be4f073*****7d5193ec8-{DestMd5}-od-S00000001-200000.mp4
   */
  outputFileUrl?: string;
  /**
   * @remarks
   * The list of subtitle streams.
   * 
   * @example
   * []
   */
  subtitleStreamList?: string;
  /**
   * @remarks
   * The list of video streams.
   * 
   * @example
   * [{\\"AvgFPS\\":\\"30.0\\",\\"Bitrate\\":\\"933.814\\",\\"CodecLongName\\":\\"H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10\\",\\"CodecName\\":\\"h264\\",\\"CodecTag\\":\\"0x31637661\\",\\"CodecTagString\\":\\"avc1\\",\\"CodecTimeBase\\":\\"1/60\\",\\"Dar\\":\\"9:16\\",\\"Duration\\":\\"12.033333\\",\\"Fps\\":\\"30.0\\",\\"HasBFrames\\":\\"2\\",\\"Height\\":\\"360\\",\\"Index\\":\\"0\\",\\"Lang\\":\\"und\\",\\"Level\\":\\"30\\",\\"PixFmt\\":\\"yuv420p\\",\\"Profile\\":\\"High\\",\\"Sar\\":\\"81:256\\",\\"StartTime\\":\\"0.000000\\",\\"Timebase\\":\\"1/15360\\",\\"Width\\":\\"640\\"}]
   */
  videoStreamList?: string;
  /**
   * @remarks
   * The list of watermarks used for transcoding.
   */
  watermarkIdList?: string[];
  /**
   * @remarks
   * The width of the transcoding output video. Unit: px.
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
   * The time when the transcoding job was completed. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-02-26T08:30:16Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the transcoding job was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-02-26T08:27:16Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The video definition. Valid values:
   * 
   * - **LD**: fluent.
   * - **SD**: standard definition.
   * - **HD**: high definition.
   * - **FHD**: ultra high definition.
   * - **OD**: original quality.
   * - **2K**: 2K.
   * - **4K**: 4K.
   * - **SQ**: standard sound quality.
   * - **HQ**: high sound quality.
   * - **AUTO**: adaptive bitrate streaming. This definition is available only when packaging is configured in the transcoding template. For more information, see [Transcoding template configuration - PackageSetting](https://help.aliyun.com/document_detail/52839.html).
   * 
   * > This value is the definition label configured in the transcoding template and does not indicate the actual resolution range of the transcoded output file.
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
   * The OSS URL of the transcoding source file.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/customerTrans/5b95e568f8e*****47f38e/31f1184c-*****b2a2-f94-c213f.wmv
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * The information about the transcoding output file.
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
   * The transcoding job ID.
   * 
   * @example
   * 38f0e513c88*****85515f9d50be188
   */
  transcodeJobId?: string;
  /**
   * @remarks
   * The status of the transcoding job. Valid values:
   * - **Transcoding**: transcoding in progress.
   * - **TranscodeSuccess**: transcoding succeeded.
   * - **TranscodeFail**: transcoding failed.
   * 
   * @example
   * Transcoding
   */
  transcodeJobStatus?: string;
  /**
   * @remarks
   * The transcoding job progress. Value range: `[0,100]`.
   * 
   * @example
   * 2019-02-26T08:30:16Z
   */
  transcodeProgress?: number;
  /**
   * @remarks
   * The ID of the transcoding template used for transcoding.
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
   * The list of audio streams.
   * 
   * @example
   * "AudioStreamList": "[{\\"Bitrate\\":\\"64.533\\",\\"ChannelLayout\\":\\"stereo\\",\\"Channels\\":\\"2\\",\\"CodecLongName\\":\\"AAC (Advanced Audio Coding)\\",\\"CodecName\\":\\"aac\\",\\"CodecTag\\":\\"0x6134706d\\",\\"CodecTagString\\":\\"mp4a\\",\\"CodecTimeBase\\":\\"1/44100\\",\\"Duration\\":\\"12.615533\\",\\"Index\\":\\"1\\",\\"Lang\\":\\"und\\",\\"SampleFmt\\":\\"fltp\\",\\"Samplerate\\":\\"44100\\",\\"StartTime\\":\\"-0.046440\\",\\"Timebase\\":\\"1/44100\\"}]
   */
  audioStreamList?: string;
  /**
   * @remarks
   * The average bitrate of the transcoding output file. Unit: Kbps.
   * 
   * @example
   * 964
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the transcoding output file. Unit: seconds.
   * 
   * @example
   * 12
   */
  duration?: string;
  /**
   * @remarks
   * The encryption configuration used for the transcoding output file. Valid values:
   * 
   * - **AliyunVoDEncryption**: Alibaba Cloud video encryption (proprietary encryption).
   * - **HLSEncryption**: HLS encryption.
   * 
   * @example
   * {\\"EncryptType\\":\\"AliyunVoDEncryption\\"}
   */
  encryption?: string;
  /**
   * @remarks
   * The size of the transcoding output file. Unit: bytes.
   * 
   * @example
   * 851076
   */
  filesize?: number;
  /**
   * @remarks
   * The container format of the transcoding output file.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the transcoding output file. Unit: frames per second.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The height of the transcoding output video. Unit: px.
   * 
   * @example
   * 360
   */
  height?: string;
  /**
   * @remarks
   * The OSS URL of the transcoding output file.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/883f5d*****f20aaa352f/c3be4f073*****7d5193ec8-{DestMd5}-od-S00000001-200000.mp4
   */
  outputFileUrl?: string;
  /**
   * @remarks
   * The list of subtitle streams.
   * 
   * @example
   * []
   */
  subtitleStreamList?: string;
  /**
   * @remarks
   * The list of video streams.
   * 
   * @example
   * [{\\"AvgFPS\\":\\"30.0\\",\\"Bitrate\\":\\"933.814\\",\\"CodecLongName\\":\\"H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10\\",\\"CodecName\\":\\"h264\\",\\"CodecTag\\":\\"0x31637661\\",\\"CodecTagString\\":\\"avc1\\",\\"CodecTimeBase\\":\\"1/60\\",\\"Dar\\":\\"9:16\\",\\"Duration\\":\\"12.033333\\",\\"Fps\\":\\"30.0\\",\\"HasBFrames\\":\\"2\\",\\"Height\\":\\"360\\",\\"Index\\":\\"0\\",\\"Lang\\":\\"und\\",\\"Level\\":\\"30\\",\\"PixFmt\\":\\"yuv420p\\",\\"Profile\\":\\"High\\",\\"Sar\\":\\"81:256\\",\\"StartTime\\":\\"0.000000\\",\\"Timebase\\":\\"1/15360\\",\\"Width\\":\\"640\\"}]
   */
  videoStreamList?: string;
  /**
   * @remarks
   * The list of watermark IDs used for the transcoding output file.
   */
  watermarkIdList?: string[];
  /**
   * @remarks
   * The width of the transcoding output video. Unit: px.
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
   * The time when the transcoding job was completed. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-02-26T08:30:16Z
   */
  completeTime?: string;
  /**
   * @remarks
   * The time when the transcoding job was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2019-02-26T08:27:16Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The video definition. Valid values:
   * 
   * - **LD**: fluent.
   * - **SD**: standard definition.
   * - **HD**: high definition.
   * - **FHD**: ultra high definition.
   * - **OD**: original quality.
   * - **2K**: 2K.
   * - **4K**: 4K.
   * - **SQ**: standard sound quality.
   * - **HQ**: high sound quality.
   * - **AUTO**: adaptive bitrate streaming. This definition is available only when packaging is configured in the transcoding template. For more information, see [Transcoding template configuration - PackageSetting](https://help.aliyun.com/document_detail/52839.html).
   * 
   * > This value is the definition label configured in the transcoding template and does not indicate the actual resolution range of the transcoded output file.
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
   * The OSS URL of the transcoding source file.
   * 
   * @example
   * http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/customerTrans/5b95e568f8e*****47f38e/31f1184c-*****b2a2-f94-c213f.wmv
   */
  inputFileUrl?: string;
  /**
   * @remarks
   * The information about the transcoding output file.
   */
  outputFile?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoListOutputFile;
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
   * The transcoding job ID.
   * 
   * @example
   * 38f0e513c88*****85515f9d50be188
   */
  transcodeJobId?: string;
  /**
   * @remarks
   * The status of the transcoding job. Valid values:
   * - **Transcoding**: transcoding in progress.
   * - **TranscodeSuccess**: transcoding succeeded.
   * - **TranscodeFail**: transcoding failed.
   * 
   * @example
   * Transcoding
   */
  transcodeJobStatus?: string;
  /**
   * @remarks
   * The transcoding job progress. Value range: `[0,100]`.
   * 
   * @example
   * 100
   */
  transcodeProgress?: number;
  /**
   * @remarks
   * The ID of the transcoding template used for transcoding.
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
   * The time when the transcoding task was completed. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
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
   * The status of the transcoding task. Valid values:
   * 
   * - **Processing**: processing in progress.
   * - **Partial**: partially completed.
   * - **CompleteAllSucc**: all transcoding jobs are completed and succeeded.
   * - **CompleteAllFail**: all transcoding jobs are completed but failed. If the source file has issues, no transcoding jobs are initiated and the entire transcoding task fails.
   * - **CompletePartialSucc**: all transcoding jobs are completed but only some succeeded.
   * 
   * @example
   * Processing
   */
  taskStatus?: string;
  /**
   * @remarks
   * The transcoding job information.
   */
  transcodeJobInfoList?: GetTranscodeTaskResponseBodyTranscodeTaskTranscodeJobInfoList[];
  /**
   * @remarks
   * The transcoding task ID.
   * 
   * @example
   * b1b65ab107e14*****3dbb900f6c1fe0
   */
  transcodeTaskId?: string;
  /**
   * @remarks
   * The ID of the transcoding template group used for transcoding.
   * 
   * @example
   * b500c7094bd241*****3e9900752d7c3
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
   * The IDs of transcoding jobs that do not exist.
   */
  nonExistJobIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F4C6D5BE-BF13-45*****6C-516EA8906DCD
   */
  requestId?: string;
  /**
   * @remarks
   * The transcoding job information.
   */
  transcodeJobInfoList?: GetTranscodeTaskResponseBodyTranscodeJobInfoList[];
  /**
   * @remarks
   * The transcoding task information.
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

