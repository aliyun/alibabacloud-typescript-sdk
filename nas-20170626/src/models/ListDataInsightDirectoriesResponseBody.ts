// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataInsightDirectoriesResponseBodyDirectorySubDirectories extends $dara.Model {
  /**
   * @example
   * 2026-07-23T12:47:14Z
   */
  createdAt?: string;
  /**
   * @example
   * 345518080
   */
  dirCapacity?: number;
  /**
   * @example
   * 0
   */
  dirCapacityOffline?: number;
  /**
   * @example
   * 345518080
   */
  dirCapacityOnline?: number;
  /**
   * @example
   * 1
   */
  dirLevel?: number;
  /**
   * @example
   * /dir_l1_n000
   */
  dirName?: string;
  /**
   * @example
   * 84846
   */
  fileCount?: number;
  /**
   * @example
   * 2343
   */
  fileCountOffline?: number;
  /**
   * @example
   * 84355
   */
  fileCountOnline?: number;
  /**
   * @example
   * 2026-07-29T03:41:12Z
   */
  lastAccessTime?: string;
  /**
   * @example
   * 2026-07-29T03:41:12Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      dirCapacity: 'DirCapacity',
      dirCapacityOffline: 'DirCapacityOffline',
      dirCapacityOnline: 'DirCapacityOnline',
      dirLevel: 'DirLevel',
      dirName: 'DirName',
      fileCount: 'FileCount',
      fileCountOffline: 'FileCountOffline',
      fileCountOnline: 'FileCountOnline',
      lastAccessTime: 'LastAccessTime',
      updatedAt: 'UpdatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      dirCapacity: 'number',
      dirCapacityOffline: 'number',
      dirCapacityOnline: 'number',
      dirLevel: 'number',
      dirName: 'string',
      fileCount: 'number',
      fileCountOffline: 'number',
      fileCountOnline: 'number',
      lastAccessTime: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataInsightDirectoriesResponseBodyDirectory extends $dara.Model {
  /**
   * @example
   * 10240
   */
  dirCapacity?: number;
  /**
   * @example
   * 10240
   */
  dirCapacityOffline?: number;
  /**
   * @example
   * 10240
   */
  dirCapacityOnline?: number;
  /**
   * @example
   * 2343232
   */
  fileCount?: number;
  /**
   * @example
   * 204800
   */
  fileCountOffline?: number;
  /**
   * @example
   * 204800
   */
  fileCountOnline?: number;
  subDirectories?: ListDataInsightDirectoriesResponseBodyDirectorySubDirectories[];
  static names(): { [key: string]: string } {
    return {
      dirCapacity: 'DirCapacity',
      dirCapacityOffline: 'DirCapacityOffline',
      dirCapacityOnline: 'DirCapacityOnline',
      fileCount: 'FileCount',
      fileCountOffline: 'FileCountOffline',
      fileCountOnline: 'FileCountOnline',
      subDirectories: 'SubDirectories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dirCapacity: 'number',
      dirCapacityOffline: 'number',
      dirCapacityOnline: 'number',
      fileCount: 'number',
      fileCountOffline: 'number',
      fileCountOnline: 'number',
      subDirectories: { 'type': 'array', 'itemType': ListDataInsightDirectoriesResponseBodyDirectorySubDirectories },
    };
  }

  validate() {
    if(Array.isArray(this.subDirectories)) {
      $dara.Model.validateArray(this.subDirectories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataInsightDirectoriesResponseBody extends $dara.Model {
  directory?: ListDataInsightDirectoriesResponseBodyDirectory;
  /**
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * /subDir
   */
  nextToken?: string;
  /**
   * @example
   * 98696EF0-1607-4E9D-B01D-F20930B6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      directory: 'Directory',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directory: ListDataInsightDirectoriesResponseBodyDirectory,
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.directory && typeof (this.directory as any).validate === 'function') {
      (this.directory as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

