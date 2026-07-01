// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEditingProjectMaterialsResponseBodyLiveMaterials extends $dara.Model {
  /**
   * @remarks
   * Name of the live streaming application.
   * 
   * @example
   * testrecord
   */
  appName?: string;
  /**
   * @remarks
   * Streaming domain name for live streaming.
   * 
   * @example
   * test.alivecdn.com
   */
  domainName?: string;
  /**
   * @remarks
   * Streaming URL for the live stream.
   * 
   * @example
   * rtmp://test.alivecdn.com/testrecord/teststream
   */
  liveUrl?: string;
  /**
   * @remarks
   * Name of the live stream.
   * 
   * @example
   * testrecord
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      liveUrl: 'LiveUrl',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      liveUrl: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * Bitrate of the file.
   * 
   * @example
   * 1132.68
   */
  bitrate?: string;
  /**
   * @remarks
   * Duration of the file.
   * 
   * @example
   * 216.206667
   */
  duration?: string;
  /**
   * @remarks
   * Name of the file.
   * 
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * Size of the file, in bytes.
   * 
   * @example
   * 30611502
   */
  fileSize?: string;
  /**
   * @remarks
   * Status of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * Type of the file.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * OSS URL of the file.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  fileUrl?: string;
  /**
   * @remarks
   * Container format.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * Height of the video.
   * 
   * @example
   * 540
   */
  height?: string;
  /**
   * @remarks
   * Region where the file is stored.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * Width of the video.
   * 
   * @example
   * 960
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

export class GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList extends $dara.Model {
  /**
   * @remarks
   * Basic file information, such as duration and size.
   */
  fileBasicInfo?: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  validate() {
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo extends $dara.Model {
  /**
   * @remarks
   * Business type of the media asset.
   * 
   * @example
   * general
   */
  businessType?: string;
  /**
   * @remarks
   * Category of the media asset.
   * 
   * @example
   * video
   */
  category?: string;
  /**
   * @remarks
   * URL of the thumbnail image.
   * 
   * @example
   * http://sample-bucket.oss-cn-shanghai.aliyuncs.com/sample-corver.jpg?Expires=1628670610&OSSAccessKeyId=AK&Signature=signature
   */
  coverURL?: string;
  /**
   * @remarks
   * Time when the media asset was created.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * Time when the media asset was deleted.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * Description of the media asset.
   * 
   * @example
   * sample_description
   */
  description?: string;
  /**
   * @remarks
   * URL of the media asset in the source system.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/file.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * ID of the media asset.
   * 
   * @example
   * *****64623a94eca8516569c8f*****
   */
  mediaId?: string;
  /**
   * @remarks
   * Tags associated with the media asset.
   * 
   * @example
   * tag1
   */
  mediaTags?: string;
  /**
   * @remarks
   * Media type of the asset.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * Time when the media asset was last modified.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Thumbnail images.
   * 
   * @example
   * null
   */
  snapshots?: string;
  /**
   * @remarks
   * Source of the media asset.
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * Sprite image.
   * 
   * @example
   * null
   */
  spriteImages?: string;
  /**
   * @remarks
   * Status of the resource.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * Title of the media asset.
   * 
   * @example
   * file.mp4
   */
  title?: string;
  /**
   * @remarks
   * Status of the transcoding task.
   * 
   * @example
   * Init
   */
  transcodeStatus?: string;
  /**
   * @remarks
   * User-defined data.
   * 
   * @example
   * userData
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

export class GetEditingProjectMaterialsResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * File information.
   */
  fileInfoList?: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * Basic information about the media asset.
   */
  mediaBasicInfo?: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * ID of the media asset.
   * 
   * @example
   * *****64623a94eca8516569c8fe*****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEditingProjectMaterialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Media assets associated with live streams.
   */
  liveMaterials?: GetEditingProjectMaterialsResponseBodyLiveMaterials[];
  /**
   * @remarks
   * Collection of matching media assets.
   */
  mediaInfos?: GetEditingProjectMaterialsResponseBodyMediaInfos[];
  /**
   * @remarks
   * ID of the project.
   * 
   * @example
   * *****67ae06542b9b93e0d1c387*****
   */
  projectId?: string;
  /**
   * @remarks
   * Media assets associated with the editing project. After a live stream ends, it is linked to a standard editing project.
   * 
   * @example
   * *****9b145c5cafc2e057304fcd*****
   */
  projectMaterials?: string[];
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * ******89-C21D-4B78-AE24-3788B8******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveMaterials: 'LiveMaterials',
      mediaInfos: 'MediaInfos',
      projectId: 'ProjectId',
      projectMaterials: 'ProjectMaterials',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveMaterials: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyLiveMaterials },
      mediaInfos: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfos },
      projectId: 'string',
      projectMaterials: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.liveMaterials)) {
      $dara.Model.validateArray(this.liveMaterials);
    }
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    if(Array.isArray(this.projectMaterials)) {
      $dara.Model.validateArray(this.projectMaterials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

