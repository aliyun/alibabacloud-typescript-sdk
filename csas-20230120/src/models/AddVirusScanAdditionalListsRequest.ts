// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVirusScanAdditionalListsRequestAdditionalLists extends $dara.Model {
  /**
   * @remarks
   * The matching dimension of the list entry. Valid values:
   * - **FileSuffix**: matches by file name extension.
   * - **FileName**: matches by file name.
   * - **FolderName**: matches by folder name.
   * - **FilePath**: matches by file path.
   * - **FileMd5**: matches by file MD5 value.
   * 
   * @example
   * FileSuffix
   */
  additionalType?: string;
  /**
   * @remarks
   * The content of the list entry. The value cannot exceed 255 characters. The meaning is determined by AdditionalType: when AdditionalType is set to FileSuffix, specify a file name extension. When set to FileName, specify a file name. When set to FolderName, specify a folder name. When set to FilePath, specify a file path. When set to FileMd5, specify the MD5 value of a file.
   * 
   * @example
   * .tmp
   */
  detail?: string;
  /**
   * @remarks
   * The list type. Valid values:
   * - **Blacklist**: blacklist. Files that match are directly identified as virus files.
   * - **Whitelist**: whitelist. Files that match are excluded from virus detection.
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
   * The list of entries to append. At least one entry is required.
   */
  additionalLists?: AddVirusScanAdditionalListsRequestAdditionalLists[];
  /**
   * @remarks
   * The operating system type for which the list takes effect. Valid values:
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

