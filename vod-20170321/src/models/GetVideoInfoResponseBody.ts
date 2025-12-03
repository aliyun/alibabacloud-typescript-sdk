// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoInfoResponseBodyVideoSnapshots extends $dara.Model {
  snapshot?: string[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoResponseBodyVideo extends $dara.Model {
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
   * The final review result of the audio or video file. Valid values:
   * 
   * *   **Normal**: pass
   * *   **Blocked**: blocked
   * 
   * @example
   * Normal
   */
  auditStatus?: string;
  /**
   * @remarks
   * The category ID of the media file.
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
   * Category name
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL of the media file.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The custom information about the media file.\\n\\n> This parameter has been deprecated. This parameter is no longer returned after you call the operation.
   * 
   * @example
   * {"aaa":"test"}
   */
  customMediaInfo?: string;
  /**
   * @remarks
   * The description of the media file.
   * 
   * @example
   * Video description in ApsaraVideo VOD
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
   * The duration of the media file. Unit: seconds.
   * 
   * @example
   * 135.6
   */
  duration?: number;
  /**
   * @remarks
   * The time when the audio or video file was last updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T10:15:50Z
   */
  modificationTime?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The region where the media file is stored.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The period of time in which the object remains in the restored state.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the audio or video file. Valid values:
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
   * 10897890
   */
  size?: number;
  /**
   * @remarks
   * The video snapshot URLs.
   */
  snapshots?: GetVideoInfoResponseBodyVideoSnapshots;
  /**
   * @remarks
   * The status of the media file. For more information about the operations that you can perform on files in different statuses and usage limits, see [Status: the status of a video](~~52839#title-vqg-8cz-7p8~~). Valid values:
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
   * The storage class of the audio or video file. Valid values:
   * 
   * *   **Standard**: All media resources are stored as Standard objects.
   * *   **IA**: All media resources are stored as IA objects.
   * *   **Archive**: All media resources are stored as Archive objects.
   * *   **ColdArchive**: All media resources are stored as Cold Archive objects.
   * *   **SourceIA**: Only the source files are IA objects.
   * *   **SourceArchive**: Only the source files are Archive objects.
   * *   **SourceColdArchive**: Only the source files are Cold Archive objects.
   * *   **Changing**: The storage class of the audio or video file is being changed.
   * *   **SourceChanging**: The storage class of the source file is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage address of the media file.
   * 
   * @example
   * out-201703232251****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the audio or video file. Multiple tags are separated by commas (,).
   * 
   * @example
   * Tag 1,Tag 2
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * 9ae2af636ca64835b0c10412f448****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The title of the media file.
   * 
   * @example
   * Video title in ApsaraVideo VOD
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
   * The ID of the media file.
   * 
   * @example
   * 9b73864d75f1d231e9001cd5f8****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      auditStatus: 'AuditStatus',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      customMediaInfo: 'CustomMediaInfo',
      description: 'Description',
      downloadSwitch: 'DownloadSwitch',
      duration: 'Duration',
      modificationTime: 'ModificationTime',
      referenceId: 'ReferenceId',
      regionId: 'RegionId',
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
      auditStatus: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      customMediaInfo: 'string',
      description: 'string',
      downloadSwitch: 'string',
      duration: 'number',
      modificationTime: 'string',
      referenceId: 'string',
      regionId: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      size: 'number',
      snapshots: GetVideoInfoResponseBodyVideoSnapshots,
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
    if(this.snapshots && typeof (this.snapshots as any).validate === 'function') {
      (this.snapshots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoInfoResponseBody extends $dara.Model {
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
   * The information about the audio or video file.
   */
  video?: GetVideoInfoResponseBodyVideo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      video: GetVideoInfoResponseBodyVideo,
    };
  }

  validate() {
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

