// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublicMediaInfoResponseBodyMediaInfoDynamicMetaData extends $dara.Model {
  /**
   * @remarks
   * Metadata in JSON format
   * 
   * @example
   * {"AuditionUrl": "http://example-bucket.cdn.domain.com/example.mp4", "AuditionCount": 3}
   */
  data?: string;
  /**
   * @remarks
   * Type. Valid values:
   * 
   * - "ai": AI data processed from raw AI results
   * 
   * - "user-defined": User-defined metadata
   * 
   * - "system": System-provided
   * 
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
   * @remarks
   * bitrate
   * 
   * @example
   * 192.0
   */
  bitrate?: string;
  /**
   * @remarks
   * Sound channel output layout
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * the number of sound channels
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * Long name of the encoding format
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * short name of the encoding format
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * Encoding format tag
   * 
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * Encoding format tag text
   * 
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @remarks
   * Codec time base
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 16.2
   */
  duration?: string;
  /**
   * @remarks
   * Audio frame rate
   * 
   * @example
   * 10
   */
  fps?: string;
  /**
   * @remarks
   * Audio stream ordinal number
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * Language
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * Total number of frames
   * 
   * @example
   * 162
   */
  numFrames?: string;
  /**
   * @remarks
   * codec profile
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * Sampling format
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * Sample rate
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  /**
   * @remarks
   * Timebase
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * Bitrate
   * 
   * @example
   * 192.0
   */
  bitrate?: string;
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 16.2
   */
  duration?: string;
  /**
   * @remarks
   * File name
   * 
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * File Size (bytes)
   * 
   * @example
   * 27007
   */
  fileSize?: string;
  /**
   * @remarks
   * File status
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * File type
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * Preview or sample playback URL for the copyrighted media asset.
   * 
   * @example
   * http://example-bucket.cdn.domain.com/example.mp4
   */
  fileUrl?: string;
  /**
   * @remarks
   * Container format
   * 
   * @example
   * mp4
   */
  formatName?: string;
  /**
   * @remarks
   * Height
   * 
   * @example
   * 0
   */
  height?: string;
  /**
   * @remarks
   * File storage area
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * Width
   * 
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
   * @remarks
   * Long name of encoding format
   * 
   * @example
   * SubRip Text
   */
  codecLongName?: string;
  /**
   * @remarks
   * Brief name of encoding format
   * 
   * @example
   * srt
   */
  codecName?: string;
  /**
   * @remarks
   * Encoding format tag
   * 
   * @example
   * unicode
   */
  codecTag?: string;
  /**
   * @remarks
   * Encoding format mark text
   * 
   * @example
   * unicode
   */
  codecTagString?: string;
  /**
   * @remarks
   * Codec time base
   * 
   * @example
   * 29.97
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * Caption stream ordinal number
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * Language
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 0
   */
  startTime?: string;
  /**
   * @remarks
   * Time base
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * average frame rate
   * 
   * @example
   * 24.0
   */
  avgFPS?: string;
  /**
   * @remarks
   * bitrate
   * 
   * @example
   * 1001.594
   */
  bitrate?: string;
  /**
   * @remarks
   * Long name of the encoding format
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * Encoding format short name
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * Encoding format tag
   * 
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @remarks
   * Encoding format mark text
   * 
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * Codec time base
   * 
   * @example
   * 1/48
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * Encoded display aspect ratio
   * 
   * @example
   * 0:1
   */
  dar?: string;
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 216.206706
   */
  duration?: string;
  /**
   * @remarks
   * video frame rate
   * 
   * @example
   * 24.0
   */
  fps?: string;
  /**
   * @remarks
   * Whether B-frames are present
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * Height
   * 
   * @example
   * 540
   */
  height?: string;
  /**
   * @remarks
   * Video stream ordinal number
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * Language
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * Encoding Level
   * 
   * @example
   * 30
   */
  level?: string;
  /**
   * @remarks
   * total number of frames
   * 
   * @example
   * 5184
   */
  nbFrames?: string;
  /**
   * @remarks
   * Total number of frames
   * 
   * @example
   * 5184
   */
  numFrames?: string;
  /**
   * @remarks
   * Pixel format
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * codec profile
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * rotate
   * 
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @remarks
   * Sample Aspect Ratio (SAR)
   * 
   * @example
   * 0:1
   */
  sar?: string;
  /**
   * @remarks
   * start time
   * 
   * @example
   * 0.081706
   */
  startTime?: string;
  /**
   * @remarks
   * time base
   * 
   * @example
   * 1/12288
   */
  timebase?: string;
  /**
   * @remarks
   * Width
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

export class GetPublicMediaInfoResponseBodyMediaInfoFileInfoList extends $dara.Model {
  /**
   * @remarks
   * Audio stream information. A media asset may contain multiple audio streams.
   */
  audioStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  /**
   * @remarks
   * Basic file information, including duration and size.
   */
  fileBasicInfo?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  /**
   * @remarks
   * Caption stream information. A media asset may have multiple caption streams.
   */
  subtitleStreamInfoList?: GetPublicMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  /**
   * @remarks
   * Video stream information; a media asset may contain multiple video streams.
   */
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
   * @remarks
   * Media asset business type
   * 
   * @example
   * general
   */
  businessType?: string;
  /**
   * @remarks
   * categorization
   * 
   * @example
   * category
   */
  category?: string;
  /**
   * @remarks
   * thumbnail URL
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @remarks
   * Media asset creation time
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * Media asset deletion time
   * 
   * @example
   * 2020-12-26T04:11:15Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * Content description
   * 
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
  /**
   * @remarks
   * label
   * 
   * @example
   * tag1
   */
  mediaTags?: string;
  /**
   * @remarks
   * media asset Type
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * sprite
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * Resource status
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * title
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * User Data
   * 
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
  /**
   * @remarks
   * Public media asset dynamic metadata
   */
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
   * @remarks
   * Media asset ID
   * 
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
  /**
   * @remarks
   * Media asset information
   */
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

