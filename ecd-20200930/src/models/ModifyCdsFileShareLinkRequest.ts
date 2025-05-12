// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCdsFileShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  /**
   * @remarks
   * The description of the file sharing task. The description must be 0 to 1,024 characters in length.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to prohibit the download of the files that are being shared.
   * 
   * Valid values:
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Specifies whether to prohibit the preview of the files that are being shared.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Specifies whether to prohibit the dump of the files that are being shared.
   * 
   * Valid values:
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The number of times that the shared files are downloaded. The value of this parameter must be equal to or greater than 0.
   * 
   * @example
   * 0
   */
  downloadCount?: number;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be downloaded. The value of this parameter must be equal to or greater than 0. The value 0 specifies that no limit is imposed on the number of times that the shared files can be downloaded.
   * 
   * @example
   * 0
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The time when the file sharing link expires. The value of this parameter follows the RFC 3339 standard. Example: "2020-06-28T11:33:00.000+08:00". If this parameter is set to "", the file sharing link never expires.
   * 
   * @example
   * 2022-07-20T06:30:22.365Z
   */
  expiration?: string;
  /**
   * @remarks
   * The number of times that the shared files are previewed. The value of this parameter must be equal to or greater than 0.
   * 
   * @example
   * 0
   */
  previewCount?: number;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be previewed. The value of this parameter must be equal to or greater than 0. The value 0 specifies that no limit is imposed on the number of times that the shared files can be downloaded.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The number of times that the shared files are reported. The value of this parameter must be equal to or greater than 0.
   * 
   * @example
   * 0
   */
  reportCount?: number;
  /**
   * @remarks
   * The number of times that the shared files are dumped. The value of this parameter must be equal to or greater than 0.
   * 
   * @example
   * 0
   */
  saveCount?: number;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be dumped. The value of this parameter must be equal to or greater than 0. The value 0 specifies that no limit is imposed on the number of times that the shared files can be downloaded.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The ID of the file sharing task.
   * 
   * This parameter is required.
   * 
   * @example
   * 7JQX1Fs****
   */
  shareId?: string;
  /**
   * @remarks
   * The name of the file sharing task. If you do not configure this parameter, the sharing task name is the first ID that is returned in the file_id_list value.
   * 
   * >  The sharing task name must be 0 to 128 characters in length.
   */
  shareName?: string;
  /**
   * @remarks
   * The length of the access code. Valid values: 6 to 8. Unit: bytes. If you leave this parameter empty or set it to null, no access code is required. If you use a token to share files, you do not need to configure this parameter. The access code can contain only visible ASCII characters.
   * 
   * @example
   * 12345678
   */
  sharePwd?: string;
  /**
   * @remarks
   * The sharing status.
   * 
   * Valid values:
   * 
   * *   disabled: The sharing task is canceled.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   enabled: The sharing task is valid.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The number of times that the videos are previewed in the shared files. The value of this parameter must be equal to or greater than 0.
   * 
   * @example
   * 0
   */
  videoPreviewCount?: number;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      description: 'Description',
      disableDownload: 'DisableDownload',
      disablePreview: 'DisablePreview',
      disableSave: 'DisableSave',
      downloadCount: 'DownloadCount',
      downloadLimit: 'DownloadLimit',
      expiration: 'Expiration',
      previewCount: 'PreviewCount',
      previewLimit: 'PreviewLimit',
      reportCount: 'ReportCount',
      saveCount: 'SaveCount',
      saveLimit: 'SaveLimit',
      shareId: 'ShareId',
      shareName: 'ShareName',
      sharePwd: 'SharePwd',
      status: 'Status',
      videoPreviewCount: 'VideoPreviewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadCount: 'number',
      downloadLimit: 'number',
      expiration: 'string',
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

