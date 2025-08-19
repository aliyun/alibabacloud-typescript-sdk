// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFolderRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFolderRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the folder.
   * 
   * The name must be 1 to 24 characters in length and can contain letters, digits, underscores (_), periods (.),and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * rdFolder
   */
  folderName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * r-b1****
   */
  parentFolderId?: string;
  /**
   * @remarks
   * The tag to add to the folder.
   */
  tag?: CreateFolderRequestTag[];
  static names(): { [key: string]: string } {
    return {
      folderName: 'FolderName',
      parentFolderId: 'ParentFolderId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderName: 'string',
      parentFolderId: 'string',
      tag: { 'type': 'array', 'itemType': CreateFolderRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

