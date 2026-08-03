// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecentlyRecycledDirectoriesResponseBodyEntries extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The most recent time when a delete operation was performed on the directory. The time follows the ISO 8601 standard in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
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
   * The absolute path of the directory.
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

export class ListRecentlyRecycledDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about directories on which delete operations were recently performed.
   */
  entries?: ListRecentlyRecycledDirectoriesResponseBodyEntries[];
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * If the query results are not completely returned, the NextToken parameter is returned with a value. You can specify the NextToken value in the next request to continue the query.
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

