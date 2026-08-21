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
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The final review result of the audio or video file. Valid values:
   * 
   * - **Normal**: Approved.
   * - **Blocked**: Blocked.
   * 
   * @example
   * Normal
   */
  auditStatus?: string;
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
   * The time when the audio or video file was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The custom media asset information.
   * 
   * > This parameter is deprecated. The API no longer returns this parameter.
   * 
   * @example
   * {"aaa":"test"}
   */
  customMediaInfo?: string;
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
   * The status of the offline download switch. After the offline download feature is enabled, mobile users can cache videos to their local devices for offline viewing by using ApsaraVideo Player. For more information, see [Offline download](https://help.aliyun.com/document_detail/86107.html). Valid values:
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
   * 135.6
   */
  duration?: number;
  /**
   * @remarks
   * The time when the audio or video file was last updated. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2017-11-14T10:15:50Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The length is 6 to 64 characters. The ID is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The region where the audio or video file is stored.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
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
   * 10897890
   */
  size?: number;
  snapshots?: GetVideoInfoResponseBodyVideoSnapshots;
  /**
   * @remarks
   * The status of the audio or video file. For more information about the operations that can be performed on audio and video files in each status and the limits, see [Status: audio and video status](~~52839#title-vqg-8cz-7p8~~). Valid values:
   * 
   * - **Uploading**: The file is being uploaded.
   * - **UploadFail**: The file failed to be uploaded.
   * - **UploadSucc**: The file is uploaded.
   * - **Transcoding**: The file is being transcoded.
   * - **TranscodeFail**: The file failed to be transcoded.
   * - **Blocked**: The file is blocked.
   * - **Normal**: The file is in a normal state.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the media asset. Valid values:
   * 
   * - **Standard**: standard.
   * - **IA**: Infrequent Access (media asset).
   * - **Archive**: Archive (media asset).
   * - **ColdArchive**: Cold Archive (media asset).
   * - **SourceIA**: Infrequent Access (source file).
   * - **SourceArchive**: Archive (source file).
   * - **SourceColdArchive**: Cold Archive (source file).
   * - **Changing**: The storage class of the media asset is being changed.
   * - **SourceChanging**: The storage class of the source file is being changed.
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
   * out-201703232251****.oss-cn-shanghai.aliyuncs.com
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
   * 9ae2af636ca64835b0c10412f448****
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
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The audio or video information.
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

