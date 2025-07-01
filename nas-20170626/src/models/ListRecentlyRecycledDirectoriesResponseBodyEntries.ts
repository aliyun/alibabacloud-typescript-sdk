// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentlyRecycledDirectoriesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The time when the directory was last deleted.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  lastDeleteTime?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * b
   */
  name?: string;
  /**
   * @remarks
   * The absolute path to the directory.
   * 
   * @example
   * /a/b
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      lastDeleteTime: 'LastDeleteTime',
      name: 'Name',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      lastDeleteTime: 'string',
      name: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

