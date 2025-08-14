// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData extends $dara.Model {
  /**
   * @example
   * {"AuditionUrl": "http://example-bucket.cdn.domain.com/example.mp4", "AuditionCount": 3}
   */
  data?: string;
  /**
   * @example
   * system
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $dara.Model {
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
   * und
   */
  lang?: string;
  /**
   * @example
   * 162
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
   * 0.000000
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @example
   * 192.0
   */
  bitrate?: string;
  /**
   * @example
   * 16.2
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
   * http://example-bucket.cdn.domain.com/example.mp4
   */
  fileUrl?: string;
  /**
   * @example
   * mp4
   */
  formatName?: string;
  /**
   * @example
   * 0
   */
  height?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 0
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $dara.Model {
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
   * und
   */
  lang?: string;
  /**
   * @example
   * 0
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $dara.Model {
  /**
   * @example
   * 24.0
   */
  avgFPS?: string;
  /**
   * @example
   * 1001.594
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
   * und
   */
  lang?: string;
  /**
   * @example
   * 30
   */
  level?: string;
  /**
   * @example
   * 5184
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
   * 0.081706
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoList extends $dara.Model {
  audioStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  fileBasicInfo?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  subtitleStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  videoStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
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
      audioStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
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

export class GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo extends $dara.Model {
  /**
   * @example
   * general
   */
  businessType?: string;
  /**
   * @example
   * category
   */
  category?: string;
  /**
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @example
   * 2020-12-26T04:11:15Z
   */
  deletedTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * MediaId
   * 
   * @example
   * icepublic-****14e501538aeef0a3140176f6****
   */
  mediaId?: string;
  mediaTags?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
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
   * {"key":"value"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
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

export class GetPublicMediaInfoResponseBodyMediaInfo extends $dara.Model {
  dynamicMetaData?: GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData;
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoList[];
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  /**
   * @example
   * icepublic-****14e501538aeef0a3140176f6****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData,
      fileInfoList: { 'type': 'array', 'itemType': GetPublicMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetPublicMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.dynamicMetaData && typeof (this.dynamicMetaData as any).validate === 'function') {
      (this.dynamicMetaData as any).validate();
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

export class GetPublicMediaInfoResponseBody extends $dara.Model {
  mediaInfo?: GetPublicMediaInfoResponseBodyMediaInfo;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
      mediaInfo: GetPublicMediaInfoResponseBodyMediaInfo,
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

