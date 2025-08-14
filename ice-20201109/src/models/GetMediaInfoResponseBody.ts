// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults extends $dara.Model {
  /**
   * @remarks
   * The result data. The value is a JSON string. For information about the data structures of different data types<props="china">, see [Description of the Results parameter](https://help.aliyun.com/zh/ims/developer-reference/api-ice-2020-11-09-querysmarttagjob?spm=a2c4g.11186623.0.0.521d48b7KfapOL#api-detail-40).
   * 
   * @example
   * {"autoChapters": [...]}
   */
  data?: string;
  /**
   * @remarks
   * The tagging type. Valid values:
   * 
   * *   NLP: natural language processing (NLP)-based tagging
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
   * The ID of the AI task.
   * 
   * @example
   * ****483915d4f2cd8ac20b48fb04****
   */
  aiJobId?: string;
  /**
   * @remarks
   * The URL of the tagging result.
   * 
   * @example
   * http://xx.oss-cn-shanghai.aliyuncs.com/result2.txt
   */
  resultUrl?: string;
  /**
   * @remarks
   * The recognized tags.
   */
  results?: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJobResults[];
  /**
   * @remarks
   * The analysis status. Valid values:
   * 
   * *   Analyzing
   * *   AnalyzeSuccess
   * *   AnalyzeFailed
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
   * *   Life
   * *   Good-looking
   * *   Cute pets
   * *   News
   * *   Ads
   * *   Environmental resources
   * *   Automobile
   */
  aiCategory?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * ****483915d4f2cd8ac20b48fb04****
   */
  aiJobId?: string;
  /**
   * @remarks
   * The analysis result.
   * 
   * @example
   * https://sample-bucket.cn-shanghai.aliyuncs.com/result.json
   */
  result?: string;
  /**
   * @remarks
   * The storage type. This parameter indicates the library in which the analysis data is stored. Valid values:
   * 
   * *   TEXT: the text library.
   * 
   * @example
   * TEXT
   */
  saveType?: string;
  /**
   * @remarks
   * The information about the tagging job.
   */
  standardSmartTagJob?: GetMediaInfoResponseBodyMediaInfoAiRoughDataStandardSmartTagJob;
  /**
   * @remarks
   * The analysis status. Valid values:
   * 
   * *   Analyzing
   * *   AnalyzeSuccess
   * *   AnalyzeFailed
   * *   Saving
   * *   SaveSuccess
   * *   SaveFailed
   * *   Deleting
   * *   DeleteSuccess
   * *   DeleteFailed
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
   * The bitrate.
   * 
   * @example
   * 127.794
   */
  bitrate?: string;
  /**
   * @remarks
   * The output layout of sound channels.
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of sound channels.
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
   * The duration.
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
   * The sequence number of the audio track.
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
   * The number of frames.
   * 
   * @example
   * 10
   */
  numFrames?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The sampling format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time.
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
   * The bitrate.
   * 
   * @example
   * 1132.68
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the file was created.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 216.206667
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 30611502
   */
  fileSize?: string;
  /**
   * @remarks
   * The file status.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The OSS URL of the file.
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
   * The height.
   * 
   * @example
   * 540
   */
  height?: string;
  /**
   * @remarks
   * The time when the file was last modified.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region in which the file is stored.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The width.
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
   * The sequence number of the subtitle track.
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
   * The start time.
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
   * The average video frame rate.
   * 
   * @example
   * 24.0
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate.
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
   * The duration.
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
   * Indicates whether the video track contains bidirectional frames (B-frames).
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 540
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video track.
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
   * The codec level.
   * 
   * @example
   * 30
   */
  level?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 5184
   */
  nbFrames?: string;
  /**
   * @remarks
   * The number of frames.
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
   * The codec profile.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle.
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
   * The start time.
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
   * The width.
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
   * The information about the audio tracks. A media asset may have multiple audio tracks.
   */
  audioStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  /**
   * @remarks
   * The basic information about the file, including the duration and size.
   */
  fileBasicInfo?: GetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  /**
   * @remarks
   * The information about the subtitle tracks. A media asset may have multiple subtitle tracks.
   */
  subtitleStreamInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  /**
   * @remarks
   * The information about the video tracks. A media asset may have multiple video tracks.
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
   * The service to which the media asset belongs.
   * 
   * @example
   * ICE
   */
  biz?: string;
  /**
   * @remarks
   * The business type.
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
   * The category name.
   * 
   * @example
   * cateName
   */
  cateName?: string;
  /**
   * @remarks
   * The category.
   */
  category?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the media asset was deleted.
   * 
   * @example
   * 2020-12-26T04:11:15Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The content description.
   */
  description?: string;
  /**
   * @remarks
   * The input URL of the media asset in another service.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media asset.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The time when the media asset was last modified.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The custom ID. The ID can be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_). The ID is unique among users.
   * 
   * @example
   * 123-1234
   */
  referenceId?: string;
  /**
   * @remarks
   * The snapshots.
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
   * The source.
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The sprite.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title.
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
   * The user data.
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
   * The original AI analysis data.
   */
  aiRoughData?: GetMediaInfoResponseBodyMediaInfoAiRoughData;
  /**
   * @remarks
   * The file information.
   */
  fileInfoList?: GetMediaInfoResponseBodyMediaInfoFileInfoList[];
  /**
   * @remarks
   * The basic information about the media asset.
   */
  mediaBasicInfo?: GetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
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
   * The information about the media asset.
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

