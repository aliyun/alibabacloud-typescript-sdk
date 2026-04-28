// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ShareLink extends $dara.Model {
  /**
   * @remarks
   * The number of times that the shared files are visited.
   * 
   * @example
   * 4
   */
  accessCount?: number;
  /**
   * @remarks
   * The time when the share was created.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The user who created the share.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  creator?: string;
  /**
   * @remarks
   * The description of the share.
   * 
   * @example
   * videos
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable the download feature.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the preview feature.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Specifies whether to disable the save feature.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are downloaded.
   * 
   * @example
   * 5
   */
  downloadCount?: number;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be downloaded.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The time when the share URL expires. The value of this parameter follows the RFC 3339 standard. Example: "2020-06-28T11:33:00.000+08:00". If you set the value to "", the share URL never expires.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  /**
   * @remarks
   * Specifies whether the share is expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The IDs of the files to share in the parent path.
   * 
   * @example
   * ["520b217f13adf4fc24f2191991b1664ce045b393"]
   */
  fileIdList?: string[];
  officeEditable?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are previewed.
   * 
   * @example
   * 10
   */
  previewCount?: number;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be previewed.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The number of times that the shared files are reported.
   * 
   * @example
   * 0
   */
  reportCount?: number;
  /**
   * @remarks
   * The number of times that the shared files are saved.
   * 
   * @example
   * 2
   */
  saveCount?: number;
  saveDownloadLimit?: number;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be saved.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * Specifies whether to share all files in the drive.
   * 
   * @example
   * true
   */
  shareAllFiles?: boolean;
  /**
   * @remarks
   * The share ID.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The name of the share. By default, the file name that corresponds to the first ID in the file ID list is used.
   * 
   * @example
   * video-1.MP4
   */
  shareName?: string;
  /**
   * @remarks
   * The access code. An access code can be up to 64 characters in length. If you do not specify a value, files can be accessed without an access code.
   * 
   * @example
   * abcF123x
   */
  sharePwd?: string;
  /**
   * @remarks
   * The status of the share. Valid values:
   * 
   * *   disabled: The share is canceled.
   * *   enabled: The share is effective.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The time when the share was last modified.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The number of times that the shared audio and video files are played.
   * 
   * @example
   * 1
   */
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'access_count',
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      driveId: 'drive_id',
      expiration: 'expiration',
      expired: 'expired',
      fileIdList: 'file_id_list',
      officeEditable: 'office_editable',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveDownloadLimit: 'save_download_limit',
      saveLimit: 'save_limit',
      shareAllFiles: 'share_all_files',
      shareId: 'share_id',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      status: 'status',
      updatedAt: 'updated_at',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      createdAt: 'string',
      creator: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      expired: 'boolean',
      fileIdList: { 'type': 'array', 'itemType': 'string' },
      officeEditable: 'boolean',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveDownloadLimit: 'number',
      saveLimit: 'number',
      shareAllFiles: 'boolean',
      shareId: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      updatedAt: 'string',
      videoPreviewCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileIdList)) {
      $dara.Model.validateArray(this.fileIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

