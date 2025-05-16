// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAvailableFileSystemsResponseBodyFileSystemList } from "./ListAvailableFileSystemsResponseBodyFileSystemList";


export class ListAvailableFileSystemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The file systems.
   */
  fileSystemList?: ListAvailableFileSystemsResponseBodyFileSystemList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BF4E8AB1-02A3-5ECF-87CC-3AB7BE98**
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 65
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemList: 'FileSystemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemList: { 'type': 'array', 'itemType': ListAvailableFileSystemsResponseBodyFileSystemList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileSystemList)) {
      $dara.Model.validateArray(this.fileSystemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

