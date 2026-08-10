// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 192.0
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
   * The long name of the codec.
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
   * The codec tag.
   * 
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 16.2
   */
  duration?: string;
  /**
   * @remarks
   * The audio frame rate.
   * 
   * @example
   * 10
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
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
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
   * The sample rate.
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
   * 2026-02-04T02:13:00Z
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

export class GetMediaResponseBodyMediaInfoFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 30
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
   * 6
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
   * The file size in bytes.
   * 
   * @example
   * 27007
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
   * mp4
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
   * The storage region of the file.
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

export class GetMediaResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The long name of the codec.
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
   * The codec tag.
   * 
   * @example
   * unicode
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * unicode
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
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
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-03-07T01:30Z
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

export class GetMediaResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $dara.Model {
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
   * The bitrate.
   * 
   * @example
   * 20
   */
  bitrate?: string;
  /**
   * @remarks
   * The long name of the codec.
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
   * The codec tag.
   * 
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
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
   * Indicates whether the video stream contains B-frames.
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
   * The video stream index.
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
   * zh
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
   * The total number of frames.
   * 
   * @example
   * xxx
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
   * 2025-08-04T12:00:00Z
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

export class GetMediaResponseBodyMediaInfoFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The audio stream information. A media asset may have multiple audio streams.
   */
  audioStreamInfoList?: GetMediaResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information, including duration and size.
   */
  fileBasicInfo?: GetMediaResponseBodyMediaInfoFileInfoListFileBasicInfo;
  /**
   * @remarks
   * The subtitle stream information. A media asset may have multiple subtitle streams.
   */
  subtitleStreamInfoList?: GetMediaResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  /**
   * @remarks
   * The video stream information. A media asset may contain multiple video streams.
   */
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
   * @remarks
   * The business type of the media asset (currently unavailable).
   * 
   * @example
   * general
   */
  businessType?: string;
  categoryId?: number;
  categoryName?: string;
  /**
   * @remarks
   * The cover URL, which is an authenticated access URL.
   * 
   * @example
   * https://dtlive-vip.oss-cn-shanghai.aliyuncs.com/cover/4e88a055-75fc-4ff5-8b8a-f32224917514_open_live_cover.jpg
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
   * The content description (the request parameter value of the register media asset API).
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 1586676
   */
  entityId?: string;
  /**
   * @remarks
   * The publicly accessible HTTP URL (the request parameter value of the register media asset API).
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
   * The tags, separated by commas (the request parameter value of the register media asset API).
   * 
   * @example
   * pitaya,prd-wuxi,248
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media type of the media asset: image/audio/video.
   * 
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @remarks
   * The time when the media asset was last modified.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The snapshots.
   * 
   * @example
   * []
   */
  snapshots?: string;
  /**
   * @remarks
   * The source (currently unavailable).
   * 
   * @example
   * /
   */
  source?: string;
  /**
   * @remarks
   * The sprite images.
   * 
   * @example
   * []
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
   * The title (the request parameter value of the register media asset API).
   * 
   * @example
   * T32
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
   * The custom user data (the request parameter value of the register media asset API).
   * 
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
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
      categoryId: 'number',
      categoryName: 'string',
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
   * @remarks
   * The dynamic metadata content.
   * 
   * @example
   * {}
   */
  data?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * 4614131
   */
  entityId?: string;
  /**
   * @remarks
   * Currently not in use.
   * 
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
  /**
   * @remarks
   * The dynamic metadata.
   */
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
  /**
   * @remarks
   * The list of file information.
   */
  fileInfoList?: GetMediaResponseBodyMediaInfoFileInfoList[];
  /**
   * @remarks
   * The basic information of the media asset.
   */
  mediaBasicInfo?: GetMediaResponseBodyMediaInfoMediaBasicInfo;
  /**
   * @remarks
   * The dynamic data of the entity.
   */
  mediaDynamicInfo?: GetMediaResponseBodyMediaInfoMediaDynamicInfo;
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
  /**
   * @remarks
   * The media asset information.
   */
  mediaInfo?: GetMediaResponseBodyMediaInfo;
  /**
   * @remarks
   * The request ID.
   * 
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

