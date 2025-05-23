// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFoldersResponseBodyDataFolders } from "./ListFoldersResponseBodyDataFolders";


export class ListFoldersResponseBodyData extends $dara.Model {
  folders?: ListFoldersResponseBodyDataFolders[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      folders: 'Folders',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folders: { 'type': 'array', 'itemType': ListFoldersResponseBodyDataFolders },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.folders)) {
      $dara.Model.validateArray(this.folders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

