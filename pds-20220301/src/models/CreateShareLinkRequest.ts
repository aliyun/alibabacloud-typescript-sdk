// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateShareLinkRequest extends $dara.Model {
  creatable?: boolean;
  creatableFileIdList?: string[];
  /**
   * @remarks
   * The description of the share. The description must be 0 to 1,024 characters in length.
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
   * Specifies whether to disable the dump feature.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be downloaded. The value of this parameter must be equal to or greater than 0. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The time when the share URL expires. The value of this parameter follows the RFC 3339 standard. Example: "2020-06-28T11:33:00.000+08:00". If expiration is set to "", the share URL never expires.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  /**
   * @remarks
   * The IDs of the files to share in the parent path. The number of files in the parent path ranges from 1 to 100. If share_all_files is set to true, this parameter does not take effect. Otherwise, you must specify this parameter.``
   * 
   * @example
   * ["520b217f13adf4fc24f2191991b1664ce045b393"]
   */
  fileIdList?: string[];
  officeEditable?: boolean;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be previewed. The value of this parameter must be equal to or greater than 0. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  requireLogin?: boolean;
  /**
   * @remarks
   * The limit on the number of times that the shared files can be dumped. The value of this parameter must be equal to or greater than 0. A value of 0 indicates no limit.
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
   * The name of the share. If you leave this parameter empty, the file name that corresponds to the first ID in the file ID list is used. The name must be 0 to 128 characters in length.
   */
  shareName?: string;
  /**
   * @remarks
   * The access code. An access code must be 0 to 64 bytes in length. If you do not specify this parameter or leave this parameter empty, the files can be accessed without an access code. In this case, you do not need to specify the share_pwd parameter when you call an operation to query the share URL. The access code can contain only visible ASCII characters.
   * 
   * @example
   * abcF123x
   */
  sharePwd?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * u123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      creatable: 'creatable',
      creatableFileIdList: 'creatable_file_id_list',
      description: 'description',
      disableDownload: 'disable_download',
      disablePreview: 'disable_preview',
      disableSave: 'disable_save',
      downloadLimit: 'download_limit',
      driveId: 'drive_id',
      expiration: 'expiration',
      fileIdList: 'file_id_list',
      officeEditable: 'office_editable',
      previewLimit: 'preview_limit',
      requireLogin: 'require_login',
      saveLimit: 'save_limit',
      shareAllFiles: 'share_all_files',
      shareName: 'share_name',
      sharePwd: 'share_pwd',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatable: 'boolean',
      creatableFileIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      disableDownload: 'boolean',
      disablePreview: 'boolean',
      disableSave: 'boolean',
      downloadLimit: 'number',
      driveId: 'string',
      expiration: 'string',
      fileIdList: { 'type': 'array', 'itemType': 'string' },
      officeEditable: 'boolean',
      previewLimit: 'number',
      requireLogin: 'boolean',
      saveLimit: 'number',
      shareAllFiles: 'boolean',
      shareName: 'string',
      sharePwd: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.creatableFileIdList)) {
      $dara.Model.validateArray(this.creatableFileIdList);
    }
    if(Array.isArray(this.fileIdList)) {
      $dara.Model.validateArray(this.fileIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

