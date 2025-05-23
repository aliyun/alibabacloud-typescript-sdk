// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFileVersionsResponseBodyDataFileVersions } from "./ListFileVersionsResponseBodyDataFileVersions";


export class ListFileVersionsResponseBodyData extends $dara.Model {
  fileVersions?: ListFileVersionsResponseBodyDataFileVersions[];
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
      fileVersions: 'FileVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileVersions: { 'type': 'array', 'itemType': ListFileVersionsResponseBodyDataFileVersions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileVersions)) {
      $dara.Model.validateArray(this.fileVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

