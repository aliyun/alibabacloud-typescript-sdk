// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeAssetMediaInfoResponseBodyMediaInfoBizData extends $dara.Model {
  /**
   * @example
   * Label
   */
  auditBlockedLabel?: string;
  /**
   * @example
   * Status
   */
  auditStatus?: string;
  /**
   * @example
   * ID
   */
  creationJobId?: string;
  /**
   * @example
   * fd-CBMEJaa2fA
   */
  folderId?: string;
  /**
   * @example
   * 1
   */
  isFavorite?: string;
  /**
   * @example
   * 1
   */
  isLogicalDeleted?: string;
  /**
   * @example
   * SubType
   */
  mediaAssetSubType?: string;
  /**
   * @example
   * Type
   */
  mediaAssetType?: string;
  /**
   * @example
   * ID
   */
  productionId?: string;
  prompt?: string;
  /**
   * @example
   * f4a26390f02371f0a1f4e6e7c758****
   */
  sourceId?: string;
  /**
   * @example
   * SourceName
   */
  sourceName?: string;
  /**
   * @example
   * MainBody
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      auditBlockedLabel: 'AuditBlockedLabel',
      auditStatus: 'AuditStatus',
      creationJobId: 'CreationJobId',
      folderId: 'FolderId',
      isFavorite: 'IsFavorite',
      isLogicalDeleted: 'IsLogicalDeleted',
      mediaAssetSubType: 'MediaAssetSubType',
      mediaAssetType: 'MediaAssetType',
      productionId: 'ProductionId',
      prompt: 'Prompt',
      sourceId: 'SourceId',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditBlockedLabel: 'string',
      auditStatus: 'string',
      creationJobId: 'string',
      folderId: 'string',
      isFavorite: 'string',
      isLogicalDeleted: 'string',
      mediaAssetSubType: 'string',
      mediaAssetType: 'string',
      productionId: 'string',
      prompt: 'string',
      sourceId: 'string',
      sourceName: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList extends $dara.Model {
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

export class GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @example
   * 20
   */
  bitrate?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
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

export class GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList extends $dara.Model {
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

export class GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList extends $dara.Model {
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

export class GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoList extends $dara.Model {
  audioStreamInfoList?: GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList[];
  fileBasicInfo?: GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo;
  subtitleStreamInfoList?: GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList[];
  videoStreamInfoList?: GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList[];
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
      audioStreamInfoList: { 'type': 'array', 'itemType': GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListAudioStreamInfoList },
      fileBasicInfo: GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListFileBasicInfo,
      subtitleStreamInfoList: { 'type': 'array', 'itemType': GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListSubtitleStreamInfoList },
      videoStreamInfoList: { 'type': 'array', 'itemType': GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoListVideoStreamInfoList },
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

export class GetYikeAssetMediaInfoResponseBodyMediaInfoMediaBasicInfo extends $dara.Model {
  /**
   * @example
   * AiSaas
   */
  biz?: string;
  /**
   * @example
   * general
   */
  businessType?: string;
  /**
   * @example
   * 3048
   */
  cateId?: number;
  /**
   * @example
   * cateName
   */
  cateName?: string;
  /**
   * @example
   * category
   */
  category?: string;
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
   * 2020-12-26T04:11:08Z
   */
  deletedTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
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
   * tag1
   */
  mediaTags?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  modifiedTime?: string;
  /**
   * @example
   * 123-1234
   */
  referenceId?: string;
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
   * ThumbURL240P
   */
  thumbURL240P?: string;
  /**
   * @example
   * ThumbURLWebp
   */
  thumbURLWebp?: string;
  /**
   * @example
   * v6l82k_176822379****.jpeg
   */
  title?: string;
  /**
   * @example
   * general
   */
  uploadSource?: string;
  /**
   * @example
   * UserData
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
      thumbURL240P: 'ThumbURL240P',
      thumbURLWebp: 'ThumbURLWebp',
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
      thumbURL240P: 'string',
      thumbURLWebp: 'string',
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

export class GetYikeAssetMediaInfoResponseBodyMediaInfo extends $dara.Model {
  bizData?: GetYikeAssetMediaInfoResponseBodyMediaInfoBizData;
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoList[];
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: GetYikeAssetMediaInfoResponseBodyMediaInfoMediaBasicInfo;
  /**
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: GetYikeAssetMediaInfoResponseBodyMediaInfoBizData,
      fileInfoList: { 'type': 'array', 'itemType': GetYikeAssetMediaInfoResponseBodyMediaInfoFileInfoList },
      mediaBasicInfo: GetYikeAssetMediaInfoResponseBodyMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.bizData && typeof (this.bizData as any).validate === 'function') {
      (this.bizData as any).validate();
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

export class GetYikeAssetMediaInfoResponseBody extends $dara.Model {
  mediaInfo?: GetYikeAssetMediaInfoResponseBodyMediaInfo;
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
      mediaInfo: GetYikeAssetMediaInfoResponseBodyMediaInfo,
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

