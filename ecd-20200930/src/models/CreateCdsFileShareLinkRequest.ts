// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdsFileShareLinkRequest extends $dara.Model {
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
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to prohibit the download of the files that are being shared.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     prohibits file download
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     allows file download
   * 
   *     <!-- -->
   * 
   *     .
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
   *     :
   * 
   *     <!-- -->
   * 
   *     prohibits file preview
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     allows file preview
   * 
   *     <!-- -->
   * 
   *     .
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
   * *   true
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     prohibits file dump
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     allows file dump
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be downloaded. The value of this parameter must be equal to or greater than 0. The value 0 specifies that no limit is imposed on the number of times that the shared files can be downloaded.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The ID of the end user.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The time when the file sharing link expires. The value of this parameter follows the RFC 3339 standard. Example: "2020-06-28T11:33:00.000+08:00". If this parameter is set to "", the file sharing link never expires.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  /**
   * @remarks
   * The file IDs.
   */
  fileIds?: string[];
  groupId?: string;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be previewed. The value of this parameter must be equal to or greater than 0. The value 0 specifies that no limit is imposed on the number of times that the shared files can be previewed.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be dumped. The value of this parameter must be equal to or greater than 0. The value 0 specifies that no limit is imposed on the number of times that the shared files can be dumped.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The name of the file sharing task. If you leave this parameter empty, the file name that corresponds to the first ID in the file ID list is used. The name must be 0 to 128 characters in length.
   * 
   * @example
   * view.txt
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
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      description: 'Description',
      disableDownload: 'DisableDownload',
      disablePreview: 'DisablePreview',
      disableSave: 'DisableSave',
      downloadLimit: 'DownloadLimit',
      endUserId: 'EndUserId',
      expiration: 'Expiration',
      fileIds: 'FileIds',
      groupId: 'GroupId',
      previewLimit: 'PreviewLimit',
      saveLimit: 'SaveLimit',
      shareName: 'ShareName',
      sharePwd: 'SharePwd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadLimit: 'number',
      endUserId: 'string',
      expiration: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      previewLimit: 'number',
      saveLimit: 'number',
      shareName: 'string',
      sharePwd: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

