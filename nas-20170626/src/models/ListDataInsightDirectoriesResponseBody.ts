// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataInsightDirectoriesResponseBodyDirectorySubDirectories extends $dara.Model {
  /**
   * @remarks
   * The time when the directory was created. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-07-23T12:47:14Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The capacity of the subdirectory.
   * 
   * @example
   * 345518080
   */
  dirCapacity?: number;
  /**
   * @remarks
   * The capacity of IA files in the subdirectory.
   * 
   * @example
   * 0
   */
  dirCapacityOffline?: number;
  /**
   * @remarks
   * The capacity of standard files in the subdirectory.
   * 
   * @example
   * 345518080
   */
  dirCapacityOnline?: number;
  /**
   * @remarks
   * The level of the subdirectory.
   * 
   * @example
   * 1
   */
  dirLevel?: number;
  /**
   * @remarks
   * The name of the subdirectory.
   * 
   * @example
   * /dir_l1_n000
   */
  dirName?: string;
  /**
   * @remarks
   * The number of files in the subdirectory.
   * 
   * @example
   * 84846
   */
  fileCount?: number;
  /**
   * @remarks
   * The number of IA files in the subdirectory.
   * 
   * @example
   * 2343
   */
  fileCountOffline?: number;
  /**
   * @remarks
   * The number of standard files in the subdirectory.
   * 
   * @example
   * 84355
   */
  fileCountOnline?: number;
  /**
   * @remarks
   * The inode number of the subdirectory.
   * 
   * @example
   * 140288
   */
  inode?: number;
  /**
   * @remarks
   * The update time of the database directory data record. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-07-29T03:41:12Z
   */
  lastAccessTime?: string;
  /**
   * @remarks
   * The last access time of the directory. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
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
      inode: 'Inode',
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
      inode: 'number',
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
   * @remarks
   * The capacity of the directory.
   * 
   * @example
   * 10240
   */
  dirCapacity?: number;
  /**
   * @remarks
   * The capacity of IA files.
   * 
   * @example
   * 10240
   */
  dirCapacityOffline?: number;
  /**
   * @remarks
   * The capacity of standard files.
   * 
   * @example
   * 10240
   */
  dirCapacityOnline?: number;
  /**
   * @remarks
   * The number of files.
   * 
   * @example
   * 2343232
   */
  fileCount?: number;
  /**
   * @remarks
   * The number of IA files.
   * 
   * @example
   * 204800
   */
  fileCountOffline?: number;
  /**
   * @remarks
   * The number of standard files.
   * 
   * @example
   * 204800
   */
  fileCountOnline?: number;
  /**
   * @remarks
   * The inode number of the directory.
   * 
   * @example
   * 2343
   */
  inode?: number;
  /**
   * @remarks
   * The collection of subdirectory information.
   */
  subDirectories?: ListDataInsightDirectoriesResponseBodyDirectorySubDirectories[];
  static names(): { [key: string]: string } {
    return {
      dirCapacity: 'DirCapacity',
      dirCapacityOffline: 'DirCapacityOffline',
      dirCapacityOnline: 'DirCapacityOnline',
      fileCount: 'FileCount',
      fileCountOffline: 'FileCountOffline',
      fileCountOnline: 'FileCountOnline',
      inode: 'Inode',
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
      inode: 'number',
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
  /**
   * @remarks
   * The collection of directory information.
   */
  directory?: ListDataInsightDirectoriesResponseBodyDirectory;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum number of directories to return for the query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token returned by the current call.
   * 
   * @example
   * /subDir
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

