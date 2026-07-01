// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults extends $dara.Model {
  /**
   * @remarks
   * The detailed analysis result is a JSON string. For the data structure of each Type, see [Result parameter description](~~478787#api-detail-40~~).
   * 
   * @example
   * {"autoChapters": [...]}
   */
  data?: string;
  /**
   * @remarks
   * The tag identification type. Valid values:
   * 
   * - NLP: The result from Natural Language Processing (NLP).
   * 
   * - TextLabel: A text tag.
   * 
   * - VideoLabel: A video tag.
   * 
   * - ASR: The raw result from Automatic Speech Recognition (ASR).
   * 
   * - OCR: The raw result from Optical Character Recognition (OCR).
   * 
   * @example
   * NLP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob extends $dara.Model {
  /**
   * @remarks
   * The AI job ID.
   * 
   * @example
   * ****483915d4f2cd8ac20b48fb04****
   */
  aiJobId?: string;
  /**
   * @remarks
   * The tag result URL.
   * 
   * @example
   * http://xx.oss-cn-shanghai.aliyuncs.com/result2.txt
   */
  resultUrl?: string;
  /**
   * @remarks
   * A list of tag recognition results.
   */
  results?: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults[];
  /**
   * @remarks
   * The AI analysis status:
   * 
   * - **Analyzing**: The analysis is in progress.
   * 
   * - **AnalyzeSuccess**: The analysis is successful.
   * 
   * - **AnalyzeFailed**: The analysis failed.
   * 
   * @example
   * Analyzing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiJobId: 'AiJobId',
      resultUrl: 'ResultUrl',
      results: 'Results',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiJobId: 'string',
      resultUrl: 'string',
      results: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoAiRoughData extends $dara.Model {
  /**
   * @remarks
   * The AI category. Valid values:
   * 
   * - Lifestyle
   * 
   * - Appearance
   * 
   * - Pets
   * 
   * - News
   * 
   * - Advertisement
   * 
   * - Environment
   * 
   * - Automobile
   * 
   * @example
   * 生活
   */
  aiCategory?: string;
  /**
   * @remarks
   * The AI job ID.
   * 
   * @example
   * ****483915d4f2cd8ac20b48fb04****
   */
  aiJobId?: string;
  /**
   * @remarks
   * The raw AI analysis result.
   * 
   * @example
   * https://sample-bucket.cn-shanghai.aliyuncs.com/result.json
   */
  result?: string;
  /**
   * @remarks
   * The save type. Specifies whether to save the results to the search index after the AI analysis is complete. Valid values:
   * 
   * - TEXT: The text index.
   * 
   * @example
   * TEXT
   */
  saveType?: string;
  /**
   * @remarks
   * The tag job.
   */
  standardSmartTagJob?: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob;
  /**
   * @remarks
   * The status of the AI analysis:
   * 
   * - Analyzing: The analysis is in progress.
   * 
   * - AnalyzeSuccess: The analysis is successful.
   * 
   * - AnalyzeFailed: The analysis failed.
   * 
   * - Saving: The data is being saved.
   * 
   * - SaveSuccess: The data is saved.
   * 
   * - SaveFailed: The data failed to save.
   * 
   * - Deleting: The data is being deleted.
   * 
   * - DeleteSuccess: The data is deleted.
   * 
   * - DeleteFailed: The data failed to delete.
   * 
   * @example
   * Analyzing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiCategory: 'AiCategory',
      aiJobId: 'AiJobId',
      result: 'Result',
      saveType: 'SaveType',
      standardSmartTagJob: 'StandardSmartTagJob',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCategory: 'string',
      aiJobId: 'string',
      result: 'string',
      saveType: 'string',
      standardSmartTagJob: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob,
      status: 'string',
    };
  }

  validate() {
    if(this.standardSmartTagJob && typeof (this.standardSmartTagJob as any).validate === 'function') {
      (this.standardSmartTagJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The bitrate, in kbit/s.
   * 
   * @example
   * 127.794
   */
  bitrate?: string;
  /**
   * @remarks
   * The channel layout.
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of audio channels.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the codec.
   * 
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   * 
   * @example
   * 1/24000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration, in seconds.
   * 
   * @example
   * 16.200998
   */
  duration?: string;
  /**
   * @remarks
   * The audio frame rate.
   * 
   * @example
   * 8
   */
  fps?: string;
  /**
   * @remarks
   * The index of the audio stream.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The total number of audio frames.
   * 
   * @example
   * 10
   */
  numFrames?: string;
  /**
   * @remarks
   * The encoding profile.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The sample format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sample rate, in Hz.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time, in seconds.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/44100
   */
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channelLayout: 'ChannelLayout',
      channels: 'Channels',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      fps: 'Fps',
      index: 'Index',
      lang: 'Lang',
      numFrames: 'NumFrames',
      profile: 'Profile',
      sampleFmt: 'SampleFmt',
      sampleRate: 'SampleRate',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channelLayout: 'string',
      channels: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      fps: 'string',
      index: 'string',
      lang: 'string',
      numFrames: 'string',
      profile: 'string',
      sampleFmt: 'string',
      sampleRate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The file bitrate in kbit/s.
   * 
   * @example
   * 1132.68
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the file was created. The time is in UTC and follows the `YYYY-MM-DDTHH:MM:SSZ` format.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The file duration in seconds.
   * 
   * @example
   * 216.206667
   */
  duration?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The file size in bytes.
   * 
   * @example
   * 30611502
   */
  fileSize?: string;
  /**
   * @remarks
   * The status of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The type of the file.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The file\\"s OSS URL.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  fileUrl?: string;
  /**
   * @remarks
   * The container format.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * The video height in pixels.
   * 
   * @example
   * 540
   */
  height?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time is in UTC and follows the `YYYY-MM-DDTHH:MM:SSZ` format.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The Region where the file is stored.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The video width in pixels.
   * 
   * @example
   * 960
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      createTime: 'CreateTime',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      createTime: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      modifiedTime: 'string',
      region: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * SubRip Text
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * srt
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * unicode
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the codec.
   * 
   * @example
   * unicode
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   * 
   * @example
   * 29.97
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * The index of the subtitle stream.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The start time, in seconds.
   * 
   * @example
   * 0
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 30
   */
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 24.0
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate, in kbit/s.
   * 
   * @example
   * 1001.594
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the codec.
   * 
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the codec.
   * 
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   * 
   * @example
   * 1/48
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR).
   * 
   * @example
   * 0:1
   */
  dar?: string;
  /**
   * @remarks
   * The duration, in seconds.
   * 
   * @example
   * 216.206706
   */
  duration?: string;
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * 24.0
   */
  fps?: string;
  /**
   * @remarks
   * Specifies whether B-frames exist.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The video height in pixels.
   * 
   * @example
   * 540
   */
  height?: string;
  /**
   * @remarks
   * The index of the video stream.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The encoding level.
   * 
   * @example
   * 30
   */
  level?: string;
  /**
   * @remarks
   * The total number of video frames.
   * 
   * @example
   * 5184
   */
  nbFrames?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 5184
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The encoding profile.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle of the video.
   * 
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR).
   * 
   * @example
   * 0:1
   */
  sar?: string;
  /**
   * @remarks
   * The start time, in seconds.
   * 
   * @example
   * 0.081706
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/12288
   */
  timebase?: string;
  /**
   * @remarks
   * The video width in pixels.
   * 
   * @example
   * 960
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFPS: 'AvgFPS',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      nbFrames: 'Nb_frames',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'StartTime',
      timebase: 'Timebase',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFPS: 'string',
      bitrate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      dar: 'string',
      duration: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      nbFrames: 'string',
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      rotate: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoFileInfoList extends $dara.Model {
  /**
   * @remarks
   * A list of audio stream information. A media asset may contain multiple audio streams.
   */
  audioStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  /**
   * @remarks
   * The basic information about the file, such as the duration and size.
   */
  fileBasicInfo?: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  /**
   * @remarks
   * A list of subtitle stream information. A media asset may contain multiple subtitle streams.
   */
  subtitleStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  /**
   * @remarks
   * A list of video stream information. A media asset may contain multiple video streams.
   */
  videoStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      subtitleStreamInfoList: 'SubtitleStreamInfoList',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.audioStreamInfoList)) {
      $dara.Model.validateArray(this.audioStreamInfoList);
    }
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
    }
    if(Array.isArray(this.subtitleStreamInfoList)) {
      $dara.Model.validateArray(this.subtitleStreamInfoList);
    }
    if(Array.isArray(this.videoStreamInfoList)) {
      $dara.Model.validateArray(this.videoStreamInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfoMediaBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The business associated with the media asset.
   * 
   * @example
   * ICE
   */
  biz?: string;
  /**
   * @remarks
   * The business type of the media asset.
   * 
   * @example
   * general
   */
  businessType?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 3048
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * cateName
   */
  cateName?: string;
  /**
   * @remarks
   * The category of the media asset.
   * 
   * @example
   * Category
   */
  category?: string;
  /**
   * @remarks
   * The cover image URL.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created. The time is in UTC and follows the `YYYY-MM-DDTHH:MM:SSZ` format.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the media asset was deleted. The time is in UTC and follows the `YYYY-MM-DDTHH:MM:SSZ` format.
   * 
   * @example
   * 2020-12-26T04:11:15Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The description of the media asset.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The media asset URL.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * A comma-separated list of tags for the media asset.
   * 
   * @example
   * tag1
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media asset type.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The time when the media asset was last modified. The time is in UTC and follows the `YYYY-MM-DDTHH:MM:SSZ` format.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * A custom, user-unique ID. It must be 6 to 64 characters long and can only contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * 123-1234
   */
  referenceId?: string;
  /**
   * @remarks
   * A list of snapshot URLs.
   * 
   * @example
   * [
   *     "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00001.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>",
   *     "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00002.jpg?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>",
   *     "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00003.jpg?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>"
   * ]
   */
  snapshots?: string;
  /**
   * @remarks
   * The source of the media asset.
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The details of the generated sprite images.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * The status of the media asset.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title of the media asset.
   * 
   * @example
   * Title
   */
  title?: string;
  /**
   * @remarks
   * The upload source of the media asset.
   * 
   * @example
   * general
   */
  uploadSource?: string;
  /**
   * @remarks
   * Custom user data.
   * 
   * @example
   * userDataTest
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      businessType: 'BusinessType',
      cateId: 'CateId',
      cateName: 'CateName',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      referenceId: 'ReferenceId',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      uploadSource: 'UploadSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
      cateId: 'number',
      cateName: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      referenceId: 'string',
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      uploadSource: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBodyMediaInfo extends $dara.Model {
  /**
   * @remarks
   * The raw data from the AI analysis.
   */
  aiRoughData?: GetMediaInfoResponseBodyMediaInfoAiRoughData;
  /**
   * @remarks
   * A list of file information objects.
   */
  fileInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoList[];
  /**
   * @remarks
   * Basic information about the media asset.
   */
  mediaBasicInfo?: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiRoughData: 'AiRoughData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiRoughData: GetMediaInfoResponseBodyMediaInfoAiRoughData,
      fileInfoList: { 'type': 'array', 'itemType': GetMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.aiRoughData && typeof (this.aiRoughData as any).validate === 'function') {
      (this.aiRoughData as any).validate();
    }
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
    }
    if(this.mediaBasicInfo && typeof (this.mediaBasicInfo as any).validate === 'function') {
      (this.mediaBasicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Information about the media asset.
   */
  mediaInfo?: GetMediaInfoResponseBodyMediaInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FDE2411-DB8D-4A9A-875B-275798F14A5E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfo: 'MediaInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfo: GetMediaInfoResponseBodyMediaInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaInfo && typeof (this.mediaInfo as any).validate === 'function') {
      (this.mediaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

