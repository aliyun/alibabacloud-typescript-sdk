// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupDirectoriesResponseBodyDirectories extends $dara.Model {
  /**
   * @remarks
   * The directory description.
   * 
   * @example
   * Project description
   */
  description?: string;
  /**
   * @remarks
   * The directory ID, including the query root itself and its descendants.
   * 
   * @example
   * dir_example
   */
  directoryId?: string;
  /**
   * @remarks
   * The original directory type. The value is GROUP for physical directories in the space. Referenced directories retain their original type.
   * 
   * @example
   * GROUP
   */
  directoryType?: string;
  /**
   * @remarks
   * The directory name.
   * 
   * @example
   * Project resources
   */
  name?: string;
  /**
   * @remarks
   * The parent directory ID. This value is empty for the internal root of the space.
   * 
   * @example
   * dir_parent
   */
  parentDirectoryId?: string;
  /**
   * @remarks
   * Indicates whether the directory is a read-only referenced directory. A value of false still requires creator or administrator permissions to modify the directory. The internal root is always unmodifiable.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      directoryId: 'directoryId',
      directoryType: 'directoryType',
      name: 'name',
      parentDirectoryId: 'parentDirectoryId',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      directoryId: 'string',
      directoryType: 'string',
      name: 'string',
      parentDirectoryId: 'string',
      readOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query root itself and all its descendant directories, including visible referenced directories in the space. The results are not paginated.
   * 
   * @example
   * []
   */
  directories?: ListGroupDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The requested resource does not exist
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned directories, which equals the length of the directories array.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directories: 'directories',
      message: 'message',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directories: { 'type': 'array', 'itemType': ListGroupDirectoriesResponseBodyDirectories },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.directories)) {
      $dara.Model.validateArray(this.directories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

