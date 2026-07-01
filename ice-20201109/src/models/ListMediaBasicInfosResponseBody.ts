// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the file, in Kbit/s.
   * 
   * @example
   * 1912.13
   */
  bitrate?: string;
  /**
   * @remarks
   * The time the file was created.
   * 
   * @example
   * 2021-01-08T16:52:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the file, in seconds.
   * 
   * @example
   * 60.00000
   */
  duration?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 14340962
   */
  fileSize?: string;
  /**
   * @remarks
   * The status of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The type of the file.
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
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example2.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
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
   * The height of the video, in pixels.
   * 
   * @example
   * 720
   */
  height?: string;
  /**
   * @remarks
   * The time the file was last modified.
   * 
   * @example
   * 2021-01-08T16:52:07Z
   */
  modifiedTime?: string;
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
   * The width of the video, in pixels.
   * 
   * @example
   * 1280
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

export class ListMediaBasicInfosResponseBodyMediaInfosFileInfoList extends $dara.Model {
  /**
   * @remarks
   * Basic information about the file, such as its duration and size.
   */
  fileBasicInfo?: ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: ListMediaBasicInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
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

export class ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The associated business.
   * 
   * @example
   * ICE
   */
  biz?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * opening
   */
  businessType?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 3049
   */
  cateId?: number;
  /**
   * @remarks
   * The category of the media asset.
   * 
   * @example
   * video
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
   * 2021-01-08T16:52:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time the media asset was deleted.
   * 
   * @example
   * 2021-01-08T16:52:07Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The description of the media asset.
   * 
   * @example
   * A short description of the media
   */
  description?: string;
  /**
   * @remarks
   * The source URL of the media asset.
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
   * ****019b82e24b37a1c2958dec38****
   */
  mediaId?: string;
  /**
   * @remarks
   * Tags associated with the media asset.
   * 
   * @example
   * tags,tags2
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media type.
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
   * 2021-01-08T16:52:07Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * A user-defined ID that must be unique within your account. The ID must be 6 to 64 characters in length and can contain only letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * Information about the snapshots.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"3","iceJobId":"******f48f0e4154976b2b8c45******","location":"oss-cn-beijing","snapshotRegular":"example.jpg","templateId":"******e6a6440b29eb60bd7c******"}]
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
   * Information about the image sprites.
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
   * The title of the media asset.
   * 
   * @example
   * My video title
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
   * The upload source of the media asset.
   * 
   * @example
   * general
   */
  uploadSource?: string;
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
      biz: 'Biz',
      businessType: 'BusinessType',
      cateId: 'CateId',
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
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      uploadSource: 'UploadSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
      cateId: 'number',
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
      title: 'string',
      transcodeStatus: 'string',
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

export class ListMediaBasicInfosResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * A list of file information objects.
   */
  fileInfoList?: ListMediaBasicInfosResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information about the media asset.
   */
  mediaBasicInfo?: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ****019b82e24b37a1c2958dec38****
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
      fileInfoList: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: ListMediaBasicInfosResponseBodyMediaInfosMediaBasicInfo,
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

export class ListMediaBasicInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 2
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of matching media assets.
   */
  mediaInfos?: ListMediaBasicInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * The token for retrieving the next page of results. If this parameter is not returned, all results have been retrieved.
   * 
   * @example
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******B7-7F87-4792-BFE9-63CD21******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      mediaInfos: 'MediaInfos',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      mediaInfos: { 'type': 'array', 'itemType': ListMediaBasicInfosResponseBodyMediaInfos },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

