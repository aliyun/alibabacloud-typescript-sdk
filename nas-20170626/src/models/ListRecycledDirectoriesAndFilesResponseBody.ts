// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecycledDirectoriesAndFilesResponseBodyEntries } from "./ListRecycledDirectoriesAndFilesResponseBodyEntries";


export class ListRecycledDirectoriesAndFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about files or directories in the recycle bin.
   */
  entries?: ListRecycledDirectoriesAndFilesResponseBodyEntries[];
  /**
   * @remarks
   * A pagination token.
   * 
   * If all the files and directories are incompletely returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * CKuO8QMSIjE2OTc3NzI0NjI5MTcyMTYyNDVfMzEzNTUyMF81MjEzODY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entries: 'Entries',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entries: { 'type': 'array', 'itemType': ListRecycledDirectoriesAndFilesResponseBodyEntries },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entries)) {
      $dara.Model.validateArray(this.entries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

