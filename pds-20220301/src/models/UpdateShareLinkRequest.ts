// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the share link. The description can be up to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to prohibit the downloads of the shared files.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Specifies whether to prohibit the previews of the shared files.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Specifies whether to prohibit the saves of the shared files.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are downloaded. The value must be greater than or equal to 0.
   * 
   * @example
   * 30
   */
  downloadCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be downloaded. The value must be greater than or equal to 0. A value of 0 specifies that the number is unlimited.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The time when the share link expires. The time follows the RFC 3339 standard. Example: 2020-06-28T11:33:00.000+08:00. If you leave this parameter empty, the share link never expires.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  officeEditable?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are previewed. The value must be greater than or equal to 0.
   * 
   * @example
   * 3
   */
  previewCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be previewed. The value must be greater than or equal to 0. A value of 0 specifies that the number is unlimited.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The number of times that the shared files are reported. The value must be greater than or equal to 0.
   * 
   * @example
   * 1
   */
  reportCount?: number;
  /**
   * @remarks
   * The number of times that the shared files are saved. The value must be greater than or equal to 0.
   * 
   * @example
   * 5
   */
  saveCount?: number;
  /**
   * @remarks
   * The maximum number of times that the shared files can be saved. The value must be greater than or equal to 0. A value of 0 specifies that the number is unlimited.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The share ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1FswpQ8
   */
  shareId?: string;
  /**
   * @remarks
   * The name of the share link. By default, the name of the first file is used. The name can be up to 128 characters in length.
   */
  shareName?: string;
  /**
   * @remarks
   * The access code. The access code can be up to 64 characters in length. A value of 0 specifies an empty string.
   * 
   * @example
   * abcF123x
   */
  sharePwd?: string;
  /**
   * @remarks
   * The state of the share link. Valid values:
   * 
   * *   disabled: The share link is canceled.
   * *   enabled: The share link is effective.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The number of times that the videos are previewed in the shared files. The value must be greater than or equal to 0.
   * 
   * @example
   * 100
   */
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadCount: 'download_count',
      downloadLimit: 'download_limit',
      expiration: 'expiration',
      officeEditable: 'office_editable',
      previewCount: 'preview_count',
      previewLimit: 'preview_limit',
      reportCount: 'report_count',
      saveCount: 'save_count',
      saveLimit: 'save_limit',
      shareId: 'share_id',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      status: 'status',
      videoPreviewCount: 'video_preview_count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
      officeEditable: 'boolean',
      previewCount: 'number',
      previewLimit: 'number',
      reportCount: 'number',
      saveCount: 'number',
      saveLimit: 'number',
      shareId: 'string',
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

