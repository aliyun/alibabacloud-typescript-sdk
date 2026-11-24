// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVirusScanAdditionalListsRequestAdditionalLists extends $dara.Model {
  /**
   * @remarks
   * The matching dimension of the list entry. Valid values:
   * - **FileSuffix**: Matches by file name extension.
   * - **FileName**: Matches by file name.
   * - **FolderName**: Matches by folder name.
   * - **FilePath**: Matches by file path.
   * - **FileMd5**: Matches by file MD5 hash.
   * 
   * @example
   * FileSuffix
   */
  additionalType?: string;
  /**
   * @remarks
   * The content of the list entry. The value can be up to 255 characters in length. The meaning of this parameter is determined by the AdditionalType parameter. If AdditionalType is set to FileSuffix, specify the file name extension. If AdditionalType is set to FileName, specify the file name. If AdditionalType is set to FolderName, specify the folder name. If AdditionalType is set to FilePath, specify the file path. If AdditionalType is set to FileMd5, specify the MD5 hash of the file.
   * 
   * @example
   * .tmp
   */
  detail?: string;
  /**
   * @remarks
   * The list type. Valid values:
   * - **Blacklist**: Blacklist. Matched files are directly identified as virus files.
   * - **Whitelist**: Whitelist. Matched files are excluded from virus detection.
   * 
   * @example
   * Whitelist
   */
  listType?: string;
  static names(): { [key: string]: string } {
    return {
      additionalType: 'AdditionalType',
      detail: 'Detail',
      listType: 'ListType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalType: 'string',
      detail: 'string',
      listType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddVirusScanAdditionalListsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of entries to add. The list must contain at least one entry.
   */
  additionalLists?: AddVirusScanAdditionalListsRequestAdditionalLists[];
  /**
   * @remarks
   * The operating system type to which the list applies. Valid values:
   * - **windows**: Windows.
   * - **macOS**: macOS.
   * 
   * This parameter is required.
   * 
   * @example
   * windows
   */
  devType?: string;
  static names(): { [key: string]: string } {
    return {
      additionalLists: 'AdditionalLists',
      devType: 'DevType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalLists: { 'type': 'array', 'itemType': AddVirusScanAdditionalListsRequestAdditionalLists },
      devType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalLists)) {
      $dara.Model.validateArray(this.additionalLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

