// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $dara.Model {
  /**
   * @example
   * 192.0
   */
  bitrate?: string;
  /**
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @example
   * 2
   */
  channels?: string;
  /**
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @example
   * 16.2
   */
  duration?: string;
  /**
   * @example
   * 10
   */
  fps?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 10
   */
  numFrames?: string;
  /**
   * @example
   * High
   */
  profile?: string;
  /**
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @example
   * 2026-02-04T02:13:00Z
   */
  startTime?: string;
  /**
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

export class GetMediaResponseBodyMediaInfoFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @example
   * 30
   */
  bitrate?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @example
   * 6
   */
  duration?: string;
  /**
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @example
   * 27007
   */
  fileSize?: string;
  /**
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  fileUrl?: string;
  /**
   * @example
   * mp4
   */
  formatName?: string;
  /**
   * @example
   * 540
   */
  height?: string;
  /**
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
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

export class GetMediaResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $dara.Model {
  /**
   * @example
   * SubRip Text
   */
  codecLongName?: string;
  /**
   * @example
   * srt
   */
  codecName?: string;
  /**
   * @example
   * unicode
   */
  codecTag?: string;
  /**
   * @example
   * unicode
   */
  codecTagString?: string;
  /**
   * @example
   * 29.97
   */
  codecTimeBase?: string;
  /**
   * @example
   * 1
   */
  duration?: string;
  /**
   * @example
   * 1
   */
  index?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 2025-03-07T01:30Z
   */
  startTime?: string;
  /**
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

export class GetMediaResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $dara.Model {
  /**
   * @example
   * 24.0
   */
  avgFPS?: string;
  /**
   * @example
   * 20
   */
  bitrate?: string;
  /**
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @example
   * 1/48
   */
  codecTimeBase?: string;
  /**
   * @example
   * 0:1
   */
  dar?: string;
  /**
   * @example
   * 216.206706
   */
  duration?: string;
  /**
   * @example
   * 24.0
   */
  fps?: string;
  /**
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @example
   * 540
   */
  height?: string;
  /**
   * @example
   * 0
   */
  index?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 30
   */
  level?: string;
  /**
   * @example
   * xxx
   */
  nbFrames?: string;
  /**
   * @example
   * 5184
   */
  numFrames?: string;
  /**
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @example
   * High
   */
  profile?: string;
  /**
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @example
   * 0:1
   */
  sar?: string;
  /**
   * @example
   * 2025-08-04T12:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 1/12288
   */
  timebase?: string;
  /**
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

export class GetMediaResponseBodyMediaInfoFileInfoList extends $dara.Model {
  audioStreamInfoList?: GetMediaResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  fileBasicInfo?: GetMediaResponseBodyMediaInfoFileInfoListFileBasicInfo;
  subtitleStreamInfoList?: GetMediaResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  videoStreamInfoList?: GetMediaResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
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
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetMediaResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetMediaResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
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

export class GetMediaResponseBodyMediaInfoMediaBasicInfo extends $dara.Model {
  /**
   * @example
   * general
   */
  businessType?: string;
  /**
   * @example
   * https://dtlive-vip.oss-cn-shanghai.aliyuncs.com/cover/4e88a055-75fc-4ff5-8b8a-f32224917514_open_live_cover.jpg
   */
  coverURL?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * 1586676
   */
  entityId?: string;
  /**
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  /**
   * @example
   * pitaya,prd-wuxi,248
   */
  mediaTags?: string;
  /**
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  modifiedTime?: string;
  /**
   * @example
   * []
   */
  snapshots?: string;
  /**
   * @example
   * /
   */
  source?: string;
  /**
   * @example
   * []
   */
  spriteImages?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * T32
   */
  title?: string;
  /**
   * @example
   * general
   */
  uploadSource?: string;
  /**
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      description: 'Description',
      entityId: 'EntityId',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
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
      businessType: 'string',
      coverURL: 'string',
      createTime: 'string',
      description: 'string',
      entityId: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
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

export class GetMediaResponseBodyMediaInfoMediaDynamicInfoDynamicMetaData extends $dara.Model {
  /**
   * @example
   * {}
   */
  data?: string;
  /**
   * @example
   * 4614131
   */
  entityId?: string;
  /**
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      entityId: 'EntityId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      entityId: 'string',
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

export class GetMediaResponseBodyMediaInfoMediaDynamicInfo extends $dara.Model {
  dynamicMetaData?: GetMediaResponseBodyMediaInfoMediaDynamicInfoDynamicMetaData;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: GetMediaResponseBodyMediaInfoMediaDynamicInfoDynamicMetaData,
    };
  }

  validate() {
    if(this.dynamicMetaData && typeof (this.dynamicMetaData as any).validate === 'function') {
      (this.dynamicMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResponseBodyMediaInfo extends $dara.Model {
  fileInfoList?: GetMediaResponseBodyMediaInfoFileInfoList[];
  mediaBasicInfo?: GetMediaResponseBodyMediaInfoMediaBasicInfo;
  mediaDynamicInfo?: GetMediaResponseBodyMediaInfoMediaDynamicInfo;
  /**
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaDynamicInfo: 'MediaDynamicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': GetMediaResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetMediaResponseBodyMediaInfoMediaBasicInfo,
      mediaDynamicInfo: GetMediaResponseBodyMediaInfoMediaDynamicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
    }
    if(this.mediaBasicInfo && typeof (this.mediaBasicInfo as any).validate === 'function') {
      (this.mediaBasicInfo as any).validate();
    }
    if(this.mediaDynamicInfo && typeof (this.mediaDynamicInfo as any).validate === 'function') {
      (this.mediaDynamicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMediaResponseBody extends $dara.Model {
  mediaInfo?: GetMediaResponseBodyMediaInfo;
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
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
      mediaInfo: GetMediaResponseBodyMediaInfo,
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

