// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosResponseBodyMediaInfosFileInfoListAudioStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   */
  bitrate?: string;
  /**
   * @remarks
   * The channel layout.
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of audio channels.
   */
  channels?: string;
  /**
   * @remarks
   * The full name of the codec.
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration.
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate.
   */
  fps?: string;
  /**
   * @remarks
   * The index of the stream.
   */
  index?: string;
  /**
   * @remarks
   * The language.
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
   */
  numFrames?: string;
  /**
   * @remarks
   * The profile.
   */
  profile?: string;
  /**
   * @remarks
   * The sample format.
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sample rate.
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time.
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
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

export class BatchGetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $dara.Model {
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
   * The duration.
   * 
   * @example
   * 200
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * example
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in bytes.
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
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The region where the file is stored.
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
   * 1920
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

export class BatchGetMediaInfosResponseBodyMediaInfosFileInfoListSubtitleStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The full name of the codec.
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration.
   */
  duration?: string;
  /**
   * @remarks
   * The index of the stream.
   */
  index?: string;
  /**
   * @remarks
   * The language.
   */
  lang?: string;
  /**
   * @remarks
   * The start time.
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
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

export class BatchGetMediaInfosResponseBodyMediaInfosFileInfoListVideoStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate.
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the codec.
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the codec.
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR).
   */
  dar?: string;
  /**
   * @remarks
   * The duration.
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate.
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether B-frames exist.
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the video.
   */
  height?: string;
  /**
   * @remarks
   * The index of the stream.
   */
  index?: string;
  /**
   * @remarks
   * The language.
   */
  lang?: string;
  /**
   * @remarks
   * The level.
   */
  level?: string;
  /**
   * @remarks
   * This parameter is an alias for `NumFrames`.
   */
  nbFrames?: string;
  /**
   * @remarks
   * The total number of frames.
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format.
   */
  pixFmt?: string;
  /**
   * @remarks
   * The profile.
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle.
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR).
   */
  sar?: string;
  /**
   * @remarks
   * The start time.
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video.
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

export class BatchGetMediaInfosResponseBodyMediaInfosFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The audio streams.
   */
  audioStreamInfoList?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoListAudioStreamInfoList[];
  /**
   * @remarks
   * The basic information about the file, such as the duration and file size.
   */
  fileBasicInfo?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  /**
   * @remarks
   * The subtitle streams.
   */
  subtitleStreamInfoList?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoListSubtitleStreamInfoList[];
  /**
   * @remarks
   * The video streams.
   */
  videoStreamInfoList?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoListVideoStreamInfoList[];
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
      audioStreamInfoList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosFileInfoListAudioStreamInfoList },
      fileBasicInfo: BatchGetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosFileInfoListVideoStreamInfoList },
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

export class BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo extends $dara.Model {
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
   * The category.
   * 
   * @example
   * category1
   */
  category?: string;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @remarks
   * The time the media asset was created.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the media asset was deleted.
   * 
   * @example
   * 2020-12-26T04:11:10Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The URL of the media asset in its source system.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The media ID.
   * 
   * @example
   * ******c48fb37407365d4f2cd8******
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * tag1, tag2
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * - `Image`
   * 
   * - `Video`
   * 
   * - `Audio`
   * 
   * - `Text`
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The time the media asset was last modified.
   * 
   * @example
   * 2020-12-26T04:11:12Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The snapshots.
   * 
   * @example
   * [
   *     "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00001.png?Expires=&OSSAccessKeyId=&Signature=&security-token=",
   *     "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00002.jpg?Expires=&OSSAccessKeyId=&Signature=&security-token=",
   *     "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00003.jpg?Expires=&OSSAccessKeyId=&Signature=&security-token="
   * ]
   */
  snapshots?: string;
  /**
   * @remarks
   * The source. Valid values:
   * 
   * - `OSS`
   * 
   * - `VOD`
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The sprite images.
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
   * The title.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The transcoding status.
   * 
   * @example
   * Init
   */
  transcodeStatus?: string;
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
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
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
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
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

export class BatchGetMediaInfosResponseBodyMediaInfosMediaDynamicInfoDynamicMetaData extends $dara.Model {
  /**
   * @remarks
   * The content of the dynamic metadata.
   * 
   * @example
   * system
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

export class BatchGetMediaInfosResponseBodyMediaInfosMediaDynamicInfo extends $dara.Model {
  /**
   * @remarks
   * The type of dynamic metadata. Valid values:
   * 
   * - `"ai"`: Standardized data derived from raw AI results.
   * 
   * - `"user-defined"`: The user-defined metadata.
   * 
   * - `"system"`: The system-generated data.
   */
  dynamicMetaData?: BatchGetMediaInfosResponseBodyMediaInfosMediaDynamicInfoDynamicMetaData;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: BatchGetMediaInfosResponseBodyMediaInfosMediaDynamicInfoDynamicMetaData,
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

export class BatchGetMediaInfosResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * A list of basic file information.
   */
  fileInfoList?: BatchGetMediaInfosResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information about the media asset.
   */
  mediaBasicInfo?: BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The dynamic information about the media asset.
   */
  mediaDynamicInfo?: BatchGetMediaInfosResponseBodyMediaInfosMediaDynamicInfo;
  /**
   * @remarks
   * The media ID.
   * 
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
      fileInfoList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: BatchGetMediaInfosResponseBodyMediaInfosMediaBasicInfo,
      mediaDynamicInfo: BatchGetMediaInfosResponseBodyMediaInfosMediaDynamicInfo,
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

export class BatchGetMediaInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of media IDs for which information could not be retrieved.
   */
  ignoredList?: string[];
  /**
   * @remarks
   * A list of media assets.
   */
  mediaInfos?: BatchGetMediaInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
      mediaInfos: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfos },
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

