// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoriesResponseBodyDirectories extends $dara.Model {
  /**
   * @remarks
   * The time when the directory was created.
   * 
   * @example
   * 2021-06-30T08:35:26Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * new-example
   */
  directoryName?: string;
  /**
   * @remarks
   * The region ID of the directory.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the directory was modified.
   * 
   * @example
   * 2021-10-25T09:13:24Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      region: 'Region',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      directoryId: 'string',
      directoryName: 'string',
      region: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

