// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoInfosResponseBodyVideoList extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 781111****
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * cate1
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL of the audio or video file.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the audio or video file was created. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-06-26T05:38:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the audio or video file.
   * 
   * @example
   * Alibaba Cloud VOD video description
   */
  description?: string;
  /**
   * @remarks
   * The status of the offline download switch. If the offline download feature is enabled, mobile users can cache videos to their local devices for offline viewing by using ApsaraVideo Player. For more information, see [Offline download](https://help.aliyun.com/document_detail/86107.html). Valid values:
   * 
   * - **on**: enabled. Offline download is allowed.
   * - **off**: disabled. Offline download is not allowed.
   * 
   * @example
   * on
   */
  downloadSwitch?: string;
  /**
   * @remarks
   * The duration of the audio or video file. Unit: seconds.
   * 
   * @example
   * 120
   */
  duration?: number;
  /**
   * @remarks
   * The last time when the audio or video file was updated. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-06-26T06:38:48Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The custom ID. The value can contain only lowercase letters, uppercase letters, digits, hyphens (-), and underscores (_), and must be 6 to 64 characters in length. The value is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The expiration time of the media asset restoration.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the media asset. Valid values:
   * - **Processing**: The media asset is being restored.
   * - **Success**: The media asset is restored.
   * - **Failed**: The media asset failed to be restored.
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The size of the audio or video source file. Unit: bytes.
   * 
   * @example
   * 453
   */
  size?: number;
  /**
   * @remarks
   * The array of video snapshot URLs.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The video status. Valid values:
   * 
   * - **Uploading**: The video is being uploaded.
   * - **UploadFail**: The video failed to be uploaded.
   * - **UploadSucc**: The video has been uploaded.
   * - **Transcoding**: The video is being transcoded.
   * - **TranscodeFail**: The video failed to be transcoded.
   * - **Blocked**: The video is blocked.
   * - **Normal**: The video is in a normal state.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the media asset. Valid values:
   * - **Standard**: standard.
   * - **IA**: media asset Infrequent Access.
   * - **Archive**: media asset Archive.
   * - **ColdArchive**: media asset Cold Archive.
   * - **SourceIA**: source file Infrequent Access.
   * - **SourceArchive**: source file Archive.
   * - **SourceColdArchive**: source file Cold Archive.
   * - **Changing**: the media asset storage class is being changed.
   * - **SourceChanging**: the source file storage class is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage address of the audio or video file.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the audio or video file. Multiple tags are separated by commas (,).
   * 
   * @example
   * tag1, tag2
   */
  tags?: string;
  /**
   * @remarks
   * The transcoding template group ID.
   * 
   * @example
   * b4039216985f4312a5382a4ed****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The title of the audio or video file.
   * 
   * @example
   * Alibaba Cloud VOD Video Title
   */
  title?: string;
  /**
   * @remarks
   * The custom settings. The value is a JSON string that supports settings such as message callbacks and upload acceleration. For more information, see [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The audio or video ID.
   * 
   * @example
   * 7753d144efd74d6c45fe0570****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      downloadSwitch: 'DownloadSwitch',
      duration: 'Duration',
      modificationTime: 'ModificationTime',
      referenceId: 'ReferenceId',
      restoreExpiration: 'RestoreExpiration',
      restoreStatus: 'RestoreStatus',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageClass: 'StorageClass',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      userData: 'UserData',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      downloadSwitch: 'string',
      duration: 'number',
      modificationTime: 'string',
      referenceId: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageClass: 'string',
      storageLocation: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
      userData: 'string',
      videoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom IDs that do not exist.
   */
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The list of audio or video IDs that do not exist.
   */
  nonExistVideoIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the audio and video files.
   */
  videoList?: GetVideoInfosResponseBodyVideoList[];
  static names(): { [key: string]: string } {
    return {
      nonExistReferenceIds: 'NonExistReferenceIds',
      nonExistVideoIds: 'NonExistVideoIds',
      requestId: 'RequestId',
      videoList: 'VideoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistReferenceIds: { 'type': 'array', 'itemType': 'string' },
      nonExistVideoIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      videoList: { 'type': 'array', 'itemType': GetVideoInfosResponseBodyVideoList },
    };
  }

  validate() {
    if(Array.isArray(this.nonExistReferenceIds)) {
      $dara.Model.validateArray(this.nonExistReferenceIds);
    }
    if(Array.isArray(this.nonExistVideoIds)) {
      $dara.Model.validateArray(this.nonExistVideoIds);
    }
    if(Array.isArray(this.videoList)) {
      $dara.Model.validateArray(this.videoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

