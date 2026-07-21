// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdsFileShareLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud disk ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  /**
   * @remarks
   * The share description. Length range: 0 to 1024 characters.
   * 
   * @example
   * SharedFile
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to disable downloading of files in the share. Valid values:
   * 
   * - true: Downloading is disabled.
   * - false: Downloading is enabled.
   * 
   * @example
   * false
   */
  disableDownload?: boolean;
  /**
   * @remarks
   * Specifies whether to disable previewing of files in the share. Valid values:
   * 
   * - true: Preview is disabled.
   * - false: Preview is enabled.
   * 
   * @example
   * false
   */
  disablePreview?: boolean;
  /**
   * @remarks
   * Specifies whether to disable saving of files in the share. Valid values:
   * 
   * - true: Saving is disabled.
   * - false: Saving is enabled.
   * 
   * @example
   * false
   */
  disableSave?: boolean;
  /**
   * @remarks
   * The maximum number of times the shared files can be downloaded. The value is an integer. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  downloadLimit?: number;
  /**
   * @remarks
   * The ID of the user who uses the cloud disk.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The expiration time in RFC 3339 format. If this parameter is left empty, the share is permanently valid.
   * 
   * @example
   * 2020-06-28T11:33:00.000+08:00
   */
  expiration?: string;
  /**
   * @remarks
   * The list of file IDs.
   */
  fileIds?: string[];
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * cg-i1ruuudp92qpj****
   */
  groupId?: string;
  /**
   * @remarks
   * The maximum number of times the shared files can be previewed. The value is an integer. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  previewLimit?: number;
  /**
   * @remarks
   * The maximum number of times the shared files can be saved. The value is an integer. A value of 0 indicates no limit.
   * 
   * @example
   * 100
   */
  saveLimit?: number;
  /**
   * @remarks
   * The share name. If this parameter is not set, the file name corresponding to the first ID in `file_id_list` is used by default. Length range: 0 to 128 characters.
   * 
   * @example
   * view.txt
   */
  shareName?: string;
  /**
   * @remarks
   * The extraction code. Length range: 0 to 64 bytes. If this parameter is not set or is set to empty, no extraction code is required, and you do not need to specify the extraction code parameter when obtaining the share token. Only printable ASCII characters are allowed.
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

