// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetShareLinkByAnonymousResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of times that the shared files are visited.
   * 
   * @example
   * 30
   */
  accessCount?: number;
  /**
   * @remarks
   * The profile picture of the user who created the share link.
   * 
   * @example
   * https://aliyunpds.com/a.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The ID of the user who created the share link.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the user who created the share link. The value is masked.
   * 
   * @example
   * AB***CD
   */
  creatorName?: string;
  /**
   * @remarks
   * The mobile number of the user who created the share link. The value is masked.
   * 
   * @example
   * 136****00
   */
  creatorPhone?: string;
  /**
   * @remarks
   * Indicates whether the downloads of the shared files are prohibited.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Indicates whether the previews of the shared files are prohibited.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Indicates whether the saves of the shared files are prohibited.
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
   * 50
   */
  downloadCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be downloaded.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The time when the share link expires.
   * 
   * @example
   * 2020-08-20T06:51:27.292Z
   */
  expiration?: string;
  /**
   * @remarks
   * Indicates whether a password is specified for the share link.
   * 
   * @example
   * true
   */
  hasPwd?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are previewed.
   * 
   * @example
   * 80
   */
  previewCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be previewed.
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
  /**
   * @remarks
   * The maximum number of times that the shared files can be saved and downloaded.
   * 
   * @example
   * 200
   */
  saveDownloadLimit?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be saved.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The name of the share link.
   */
  shareName?: string;
  /**
   * @remarks
   * The time when the share link was last modified.
   * 
   * @example
   * 2019-08-20T06:51:27.292Z
   */
  updatedAt?: string;
  /**
   * @remarks
   * The number of times that the videos are previewed in the shared files.
   * 
   * @example
   * 5
   */
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessCount: 'access_count',
      avatar: 'avatar',
      creatorId: 'creator_id',
      creatorName: 'creator_name',
      creatorPhone: 'creator_phone',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      expiration: 'expiration',
      hasPwd: 'has_pwd',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveDownloadLimit: 'save_download_limit',
      saveLimit: 'save_limit',
      shareName: 'share_name',
      updatedAt: 'updated_at',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCount: 'number',
      avatar: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorPhone: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
      hasPwd: 'boolean',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveDownloadLimit: 'number',
      saveLimit: 'number',
      shareName: 'string',
      updatedAt: 'string',
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

