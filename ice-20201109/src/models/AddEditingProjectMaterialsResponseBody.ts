// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectMaterialsResponseBodyLiveMaterials extends $dara.Model {
  /**
   * @remarks
   * The application name of the live stream.
   * 
   * @example
   * testrecord
   */
  appName?: string;
  /**
   * @remarks
   * The domain name of the live stream.
   * 
   * @example
   * test.alivecdn.com
   */
  domainName?: string;
  /**
   * @remarks
   * The URL of the live stream.
   * 
   * @example
   * rtmp://test.alivecdn.com/testrecord/teststream
   */
  liveUrl?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * teststream
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

export class AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo extends $dara.Model {
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
   * \\-Uploading
   * 
   * \\-Normal
   * 
   * \\-UploadFail
   * 
   * \\-Disable
   * 
   * \\-Deleted
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
   * The Object Storage Service (OSS) URL of the file.
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
   * The region in which the file resides.
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

export class AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The basic information of the file, including the duration and size.
   */
  fileBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo,
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

export class AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo extends $dara.Model {
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
   * The category of the media asset.
   * 
   * @example
   * audio
   */
  category?: string;
  /**
   * @remarks
   * The thumbnail URL of the media asset.
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
   * 2020-12-23T03:32:59Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the media asset was deleted.
   * 
   * @example
   * 2020-12-23T03:32:59Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The description of the media asset.
   * 
   * @example
   * sample_description
   */
  description?: string;
  /**
   * @remarks
   * The URL of the media asset in another service.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/file.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * *****5cb2e35433198daae94a72*****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags of the media asset.
   * 
   * @example
   * sample_tag
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media asset.
   * 
   * @example
   * Video
   */
  mediaType?: string;
  /**
   * @remarks
   * The time when the media asset was last modified.
   * 
   * @example
   * 2020-12-23T03:32:59Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The snapshots of the media asset.
   * 
   * @example
   * null
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
   * The sprite of the media asset.
   * 
   * @example
   * http://outin-example.oss-cn-shanghai.aliyuncs.com/test.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  spriteImages?: string;
  /**
   * @remarks
   * The status of the media asset. Valid values:
   * 
   * \\- Init
   * 
   * \\- Preparing
   * 
   * \\- PrepareFail
   * 
   * \\- Normal
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
   * default_title_2020-12-23T03:32:59Z
   */
  title?: string;
  /**
   * @remarks
   * The transcoding status of the media asset.
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

export class AddEditingProjectMaterialsResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information of the media assets.
   */
  mediaBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * *****5cb2e35433198daae94a72*****
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
      fileInfoList: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
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

export class AddEditingProjectMaterialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The materials associated with the live stream.
   */
  liveMaterials?: AddEditingProjectMaterialsResponseBodyLiveMaterials[];
  /**
   * @remarks
   * The media assets that meet the specified conditions.
   */
  mediaInfos?: AddEditingProjectMaterialsResponseBodyMediaInfos[];
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * *****67ae06542b9b93e0d1c387*****
   */
  projectId?: string;
  /**
   * @remarks
   * The materials associated with the editing project. A live stream editing project will be associated with a regular editing project after the live streaming ends.
   * 
   * @example
   * *****9b145c5cafc2e057304fcd*****
   */
  projectMaterials?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * *****ACB-44F2-5F2D-88D7-1283E70*****
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
      liveMaterials: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyLiveMaterials },
      mediaInfos: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMediaInfos },
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

