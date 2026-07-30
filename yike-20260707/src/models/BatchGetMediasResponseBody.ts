// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchGetMediasResponseBodyMediaInfosFileInfoListAudioStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the file.
   * 
   * @example
   * 48236800
   */
  bitrate?: string;
  /**
   * @remarks
   * The channel output layout.
   * 
   * @example
   * -
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of audio channels.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=fe58c6512a1c59524c199577c833abee23f9a16bc549815ca157c46d28fe6ffa
   */
  channels?: string;
  /**
   * @remarks
   * The long name of the codec.
   * 
   * @example
   * xx
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   * 
   * @example
   * xx
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * xx
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * xx
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the file.
   * 
   * @example
   * 15
   */
  duration?: string;
  /**
   * @remarks
   * The audio frame rate.
   * 
   * @example
   * 32
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
   * 32
   */
  numFrames?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * @example
   * {\\"ApiKey\\":\\"c0358c6e51c1013b446fdeb21a3a5d1c\\",\\"AppId\\":\\"5b347bfb\\",\\"ApiSecret\\":\\"a9872e2342952e248727798f642936b6\\"}
   */
  profile?: string;
  /**
   * @remarks
   * The sample format.
   * 
   * @example
   * xx
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sample rate.
   * 
   * @example
   * 0.01
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1779850920
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
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
   * @remarks
   * The bitrate of the file.
   * 
   * @example
   * 30
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the file.
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
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 191
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
   * The container format of the file.
   * 
   * @example
   * jpg
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the file.
   * 
   * @example
   * 416
   */
  height?: string;
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
   * The width of the file.
   * 
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
   * @remarks
   * The long name of the codec.
   * 
   * @example
   * xx
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   * 
   * @example
   * xx
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * xx
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * xx
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the file.
   * 
   * @example
   * 6
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
   * 1767953790
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
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
   * @remarks
   * The average frame rate.
   * 
   * @example
   * xx
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate of the file.
   * 
   * @example
   * 23736607
   */
  bitrate?: string;
  /**
   * @remarks
   * The long name of the codec.
   * 
   * @example
   * xx
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   * 
   * @example
   * xx
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * xx
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * xx
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR).
   * 
   * @example
   * xx
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the file.
   * 
   * @example
   * 6
   */
  duration?: string;
  /**
   * @remarks
   * The video frame rate.
   * 
   * @example
   * xx
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains B-frames.
   * 
   * @example
   * xx
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the file.
   * 
   * @example
   * 0
   */
  height?: string;
  /**
   * @remarks
   * The video stream index.
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
   * The encoding level.
   * 
   * @example
   * loose
   */
  level?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * xx
   */
  nbFrames?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * xx
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format.
   * 
   * @example
   * xx
   */
  pixFmt?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * @example
   * {\\"ApiKey\\":\\"c0358c6e51c1013b446fdeb21a3a5d1c\\",\\"AppId\\":\\"5b347bfb\\",\\"ApiSecret\\":\\"a9872e2342952e248727798f642936b6\\"}
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle.
   * 
   * @example
   * xx
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR).
   * 
   * @example
   * xx
   */
  sar?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1779850920
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * xx
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the file.
   * 
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
  /**
   * @remarks
   * The audio stream information. A media asset may contain multiple audio streams.
   */
  audioStreamInfoList?: BatchGetMediasResponseBodyMediaInfosFileInfoListAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information, including the duration and size.
   */
  fileBasicInfo?: BatchGetMediasResponseBodyMediaInfosFileInfoListFileBasicInfo;
  /**
   * @remarks
   * The subtitle stream information. A media asset may have multiple subtitle streams.
   */
  subtitleStreamInfoList?: BatchGetMediasResponseBodyMediaInfosFileInfoListSubtitleStreamInfoList[];
  /**
   * @remarks
   * The video stream information. A media asset may have multiple video streams.
   */
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
  categoryId?: number;
  categoryName?: string;
  /**
   * @remarks
   * The URL of the cover image.
   * 
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/01e1271d-ff4f-4689-9c20-e1df81486859_open_live_cover.jpg
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
   * The description of the media asset content.
   * 
   * @example
   * sample_description
   */
  description?: string;
  /**
   * @remarks
   * The address of the media asset to be registered in the corresponding system.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * MediaId
   * 
   * @example
   * *****64623a94eca8516569c8f*****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags of the media asset.
   * 
   * @example
   * tag1，tag2
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media type of the media asset.
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
   * 2021-01-08T16:52:04Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The snapshots of the media asset.
   * 
   * @example
   * []
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
   * The sprite images of the media asset.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * The status of the resource.
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
   * title
   */
  title?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * {}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
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
      categoryId: 'number',
      categoryName: 'string',
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
   * @remarks
   * The dynamic metadata content.
   * 
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
  /**
   * @remarks
   * The dynamic metadata.
   */
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
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: BatchGetMediasResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: BatchGetMediasResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The dynamic data of the media entity.
   */
  mediaDynamicInfo?: BatchGetMediasResponseBodyMediaInfosMediaDynamicInfo;
  /**
   * @remarks
   * The media asset ID.
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
  /**
   * @remarks
   * The IDs that failed to be retrieved.
   */
  ignoredList?: string[];
  /**
   * @remarks
   * The collection of media assets that meet the specified criteria.
   */
  mediaInfos?: BatchGetMediasResponseBodyMediaInfos[];
  /**
   * @remarks
   * Id of the request
   * 
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

