// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchGetMediasResponseBodyMediaInfosFileInfoListAudioStreamInfoList extends $dara.Model {
  /**
   * @example
   * 48236800
   */
  bitrate?: string;
  /**
   * @example
   * -
   */
  channelLayout?: string;
  /**
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=fe58c6512a1c59524c199577c833abee23f9a16bc549815ca157c46d28fe6ffa
   */
  channels?: string;
  /**
   * @example
   * xx
   */
  codecLongName?: string;
  /**
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @example
   * xx
   */
  codecTag?: string;
  /**
   * @example
   * xx
   */
  codecTagString?: string;
  /**
   * @example
   * xx
   */
  codecTimeBase?: string;
  /**
   * @example
   * 15
   */
  duration?: string;
  /**
   * @example
   * 32
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
   * 32
   */
  numFrames?: string;
  /**
   * @example
   * {\\"ApiKey\\":\\"c0358c6e51c1013b446fdeb21a3a5d1c\\",\\"AppId\\":\\"5b347bfb\\",\\"ApiSecret\\":\\"a9872e2342952e248727798f642936b6\\"}
   */
  profile?: string;
  /**
   * @example
   * xx
   */
  sampleFmt?: string;
  /**
   * @example
   * 0.01
   */
  sampleRate?: string;
  /**
   * @example
   * 1779850920
   */
  startTime?: string;
  /**
   * @example
   * -
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

export class BatchGetMediasResponseBodyMediaInfosFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @example
   * 30
   */
  bitrate?: string;
  /**
   * @example
   * 200
   */
  duration?: string;
  /**
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @example
   * 191
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
   * jpg
   */
  formatName?: string;
  /**
   * @example
   * 416
   */
  height?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 640
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
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

export class BatchGetMediasResponseBodyMediaInfosFileInfoListSubtitleStreamInfoList extends $dara.Model {
  /**
   * @example
   * xx
   */
  codecLongName?: string;
  /**
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @example
   * xx
   */
  codecTag?: string;
  /**
   * @example
   * xx
   */
  codecTagString?: string;
  /**
   * @example
   * xx
   */
  codecTimeBase?: string;
  /**
   * @example
   * 6
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
   * 1767953790
   */
  startTime?: string;
  /**
   * @example
   * xx
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

export class BatchGetMediasResponseBodyMediaInfosFileInfoListVideoStreamInfoList extends $dara.Model {
  /**
   * @example
   * xx
   */
  avgFPS?: string;
  /**
   * @example
   * 23736607
   */
  bitrate?: string;
  /**
   * @example
   * xx
   */
  codecLongName?: string;
  /**
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @example
   * xx
   */
  codecTag?: string;
  /**
   * @example
   * xx
   */
  codecTagString?: string;
  /**
   * @example
   * xx
   */
  codecTimeBase?: string;
  /**
   * @example
   * xx
   */
  dar?: string;
  /**
   * @example
   * 6
   */
  duration?: string;
  /**
   * @example
   * xx
   */
  fps?: string;
  /**
   * @example
   * xx
   */
  hasBFrames?: string;
  /**
   * @example
   * 0
   */
  height?: string;
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
   * loose
   */
  level?: string;
  /**
   * @example
   * xx
   */
  nbFrames?: string;
  /**
   * @example
   * xx
   */
  numFrames?: string;
  /**
   * @example
   * xx
   */
  pixFmt?: string;
  /**
   * @example
   * {\\"ApiKey\\":\\"c0358c6e51c1013b446fdeb21a3a5d1c\\",\\"AppId\\":\\"5b347bfb\\",\\"ApiSecret\\":\\"a9872e2342952e248727798f642936b6\\"}
   */
  profile?: string;
  /**
   * @example
   * xx
   */
  rotate?: string;
  /**
   * @example
   * xx
   */
  sar?: string;
  /**
   * @example
   * 1779850920
   */
  startTime?: string;
  /**
   * @example
   * xx
   */
  timebase?: string;
  /**
   * @example
   * 720
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

export class BatchGetMediasResponseBodyMediaInfosFileInfoList extends $dara.Model {
  audioStreamInfoList?: BatchGetMediasResponseBodyMediaInfosFileInfoListAudioStreamInfoList[];
  fileBasicInfo?: BatchGetMediasResponseBodyMediaInfosFileInfoListFileBasicInfo;
  subtitleStreamInfoList?: BatchGetMediasResponseBodyMediaInfosFileInfoListSubtitleStreamInfoList[];
  videoStreamInfoList?: BatchGetMediasResponseBodyMediaInfosFileInfoListVideoStreamInfoList[];
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
      audioStreamInfoList: { 'type': 'array', 'itemType': BatchGetMediasResponseBodyMediaInfosFileInfoListAudioStreamInfoList },
      fileBasicInfo: BatchGetMediasResponseBodyMediaInfosFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': BatchGetMediasResponseBodyMediaInfosFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': BatchGetMediasResponseBodyMediaInfosFileInfoListVideoStreamInfoList },
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

export class BatchGetMediasResponseBodyMediaInfosMediaBasicInfo extends $dara.Model {
  /**
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/01e1271d-ff4f-4689-9c20-e1df81486859_open_live_cover.jpg
   */
  coverURL?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @example
   * sample_description
   */
  description?: string;
  /**
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @example
   * *****64623a94eca8516569c8f*****
   */
  mediaId?: string;
  /**
   * @example
   * tag1，tag2
   */
  mediaTags?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * 2021-01-08T16:52:04Z
   */
  modifiedTime?: string;
  /**
   * @example
   * []
   */
  snapshots?: string;
  /**
   * @example
   * oss
   */
  source?: string;
  /**
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      description: 'Description',
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
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      createTime: 'string',
      description: 'string',
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

export class BatchGetMediasResponseBodyMediaInfosMediaDynamicInfoDynamicMetaData extends $dara.Model {
  /**
   * @example
   * 05D92F7EE52363AE3C95FB23EC56611929613720
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediasResponseBodyMediaInfosMediaDynamicInfo extends $dara.Model {
  dynamicMetaData?: BatchGetMediasResponseBodyMediaInfosMediaDynamicInfoDynamicMetaData;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: BatchGetMediasResponseBodyMediaInfosMediaDynamicInfoDynamicMetaData,
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

export class BatchGetMediasResponseBodyMediaInfos extends $dara.Model {
  fileInfoList?: BatchGetMediasResponseBodyMediaInfosFileInfoList[];
  mediaBasicInfo?: BatchGetMediasResponseBodyMediaInfosMediaBasicInfo;
  mediaDynamicInfo?: BatchGetMediasResponseBodyMediaInfosMediaDynamicInfo;
  /**
   * @example
   * ******c48fb37407365d4f2cd8******
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
      fileInfoList: { 'type': 'array', 'itemType': BatchGetMediasResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: BatchGetMediasResponseBodyMediaInfosMediaBasicInfo,
      mediaDynamicInfo: BatchGetMediasResponseBodyMediaInfosMediaDynamicInfo,
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

export class BatchGetMediasResponseBody extends $dara.Model {
  ignoredList?: string[];
  mediaInfos?: BatchGetMediasResponseBodyMediaInfos[];
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredList: 'IgnoredList',
      mediaInfos: 'MediaInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      mediaInfos: { 'type': 'array', 'itemType': BatchGetMediasResponseBodyMediaInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ignoredList)) {
      $dara.Model.validateArray(this.ignoredList);
    }
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

