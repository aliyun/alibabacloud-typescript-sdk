// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoInfosResponseBodyVideoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 781111****
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * This is a category name.
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
   * The time when the media file was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * This is a category description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the offline download feature is enabled. If you enable the offline download feature, users can download and play videos by using the ApsaraVideo Player on a local PC. For more information, see [Configure download settings](https://help.aliyun.com/document_detail/86107.html). Valid values:
   * 
   * *   **on**: the offline download feature is enabled.
   * *   **off**: the offline download feature is not enabled.
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
   * The time when the audio or video file was last updated. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-06-26T06:38:48Z
   */
  modificationTime?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The period of time in which the audio file remains in the restored state.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the audio file. Valid values:
   * 
   * *   **Processing**
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The size of the source file. Unit: bytes.
   * 
   * @example
   * 453
   */
  size?: number;
  /**
   * @remarks
   * The video snapshot URLs.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The status of the video. Valid values:
   * 
   * *   **Uploading**
   * *   **UploadFail**
   * *   **UploadSucc**
   * *   **Transcoding**
   * *   **TranscodeFail**
   * *   **Blocked**
   * *   **Normal**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the audio file. Valid values:
   * 
   * *   **Standard**: All media resources are stored as Standard objects.
   * *   **IA**: All media resources are stored as IA objects.
   * *   **Archive**: All media resources are stored as Archive objects.
   * *   **ColdArchive**: All media resources are stored as Cold Archive objects.
   * *   **SourceIA**: Only the source files are IA objects.
   * *   **SourceArchive**: Only the source files are Archive objects.
   * *   **SourceColdArchive**: Only the source file is stored as a Cold Archive object.
   * *   **Changing**: The storage class of the video file is being changed.
   * *   **SourceChanging**: The storage class of the source file is being changed.
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
   * The ID of the transcoding template group.
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
   * Video tiltle
   */
  title?: string;
  /**
   * @remarks
   * Custom settings. This is a JSON string that supports settings such as message callbacks and upload acceleration. For more information, please refer to [UserData](https://help.aliyun.com/document_detail/86952.html).
   * 
   * @example
   * {"MessageCallback":{"CallbackURL":"http://example.aliyundoc.com"},"Extend":{"localId":"*****","test":"www"}}
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the audio or video file.
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
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The IDs of the videos that do not exist.
   */
  nonExistVideoIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the audio or video files.
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

