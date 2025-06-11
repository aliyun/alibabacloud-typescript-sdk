// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDirectoriesResponseBodyDirectories } from "./ListDirectoriesResponseBodyDirectories";


export class ListDirectoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The directories.
   */
  directories?: ListDirectoriesResponseBodyDirectories[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A504392-F06D-5029-AB64-6654CB9F1DC1
   */
  requestId?: string;
  /**
   * @remarks
   * The number of directories.
   * 
   * @example
   * 1
   */
  totalCounts?: number;
  static names(): { [key: string]: string } {
    return {
      directories: 'Directories',
      requestId: 'RequestId',
      totalCounts: 'TotalCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directories: { 'type': 'array', 'itemType': ListDirectoriesResponseBodyDirectories },
      requestId: 'string',
      totalCounts: 'number',
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

