// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRecentlyRecycledDirectoriesResponseBodyEntries } from "./ListRecentlyRecycledDirectoriesResponseBodyEntries";


export class ListRecentlyRecycledDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the directories that are recently deleted.
   */
  entries?: ListRecentlyRecycledDirectoriesResponseBodyEntries[];
  /**
   * @remarks
   * A pagination token.
   * 
   * If not all directories are returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * 1256****25
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E15E394-38A6-457A-A62A-D9797C9A****
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
      entries: { 'type': 'array', 'itemType': ListRecentlyRecycledDirectoriesResponseBodyEntries },
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

