// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CdsFileShareLinkModel extends $dara.Model {
  /**
   * @remarks
   * The number of times to access the shared file.
   * 
   * @example
   * 10000
   */
  accessCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-09-04T03:30:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The user that creates the file sharing task.
   * 
   * @example
   * user01
   */
  creator?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * newDescription
   */
  description?: string;
  /**
   * @remarks
   * The shared file is forbidden from being downloaded.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * The shared file is forbidden from being previewed.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * The shared file is forbidden from being dumped.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The number of times that the shared file can be downloaded.
   * 
   * @example
   * 100
   */
  downloadCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared file can be downloaded.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * dri-g0877jp3hu1ox****
   */
  driveId?: string;
  /**
   * @remarks
   * The time when the file sharing link expires.
   * 
   * >  The value must be in the FC3339 format. Example: 2020-06-28T11:33:00.000+08:00. If the parameter is left empty, the file sharing link is permanently valid.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  /**
   * @remarks
   * Specifies whether the file sharing link expires.
   * 
   * @example
   * False
   */
  expired?: boolean;
  /**
   * @remarks
   * The file sharing task IDs.
   * 
   * @example
   * [\\"63886f1fe2014d9a5a3348768dcc27dfc57ee103\\"]
   */
  fileIds?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-09-04T04:30:36Z
   */
  modifiyTime?: string;
  /**
   * @remarks
   * The number of times that the shared file is previewed.
   * 
   * @example
   * 0
   */
  previewCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared file can be previewed.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The number of times that the shared file is reported due to content violation.
   * 
   * @example
   * 0
   */
  reportCount?: number;
  /**
   * @remarks
   * The number of times that the shared files can be dumped.
   * 
   * @example
   * 100
   */
  saveCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared file can be saved.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The file sharing task ID.
   * 
   * @example
   * 7JQX1Fs****
   */
  shareId?: string;
  /**
   * @remarks
   * The file sharing link.
   * 
   * @example
   * https://stg109960.apps.aliyunpds.com/disk/s/7uLJanz****
   */
  shareLink?: string;
  /**
   * @remarks
   * The shared file name. By default, the name of the first shared file is used.
   * 
   * @example
   * view.txt
   */
  shareName?: string;
  /**
   * @remarks
   * The access code. It must contain up to 64 characters in length. 0 characters indicates that there is no access code.
   * 
   * @example
   * 12345678
   */
  sharePwd?: string;
  /**
   * @remarks
   * The status of the file sharing link.
   * 
   * Valid values:
   * 
   * *   forbidden_disabled
   * 
   *     <!-- -->
   * 
   *     : The file sharing link is canceled
   * 
   *     <!-- -->
   * 
   *     after it
   * 
   *     <!-- -->
   * 
   *     is not allowed.
   * 
   * *   forbidden
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The file sharing link is not allowed
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   disabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The file sharing link is canceled.
   * 
   *     <!-- -->
   * 
   * *   enabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The file sharing link is valid.
   * 
   *     <!-- -->
   * 
   * @example
   * disabled
   */
  status?: string;
  /**
   * @remarks
   * The number of times that the audio and video file is played.
   * 
   * @example
   * 0
   */
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'AccessCount',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      disableDownload: 'DisableDownload',
      disablePreview: 'DisablePreview',
      disableSave: 'DisableSave',
      downloadCount: 'DownloadCount',
      downloadLimit: 'DownloadLimit',
      driveId: 'DriveId',
      expiration: 'Expiration',
      expired: 'Expired',
      fileIds: 'FileIds',
      modifiyTime: 'ModifiyTime',
      previewCount: 'PreviewCount',
      previewLimit: 'PreviewLimit',
      reportCount: 'ReportCount',
      saveCount: 'SaveCount',
      saveLimit: 'SaveLimit',
      shareId: 'ShareId',
      shareLink: 'ShareLink',
      shareName: 'ShareName',
      sharePwd: 'SharePwd',
      status: 'Status',
      videoPreviewCount: 'VideoPreviewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      createTime: 'string',
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
      fileIds: 'string',
      modifiyTime: 'string',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareId: 'string',
      shareLink: 'string',
      shareName: 'string',
      sharePwd: 'string',
      status: 'string',
      videoPreviewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

