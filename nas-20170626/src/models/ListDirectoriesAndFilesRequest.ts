// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoriesAndFilesRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to list only directories.
   * 
   * Valid values:
   * 
   * - `false` (default): Lists both directories and files.
   * 
   * - `true`: Lists only directories.
   * 
   * > If you set `StorageType` to `All`, you must set `DirectoryOnly` to `true`.
   * 
   * @example
   * false
   */
  directoryOnly?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum number of directories or files to return per page.
   * 
   * Value range: 10–128
   * 
   * Default value: 100
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * A continuation token used to retrieve the next page of results when the response is truncated.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * The path must start with a forward slash (/) and exist on the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * - `InfrequentAccess`: infrequent access.
   * 
   * - `Archive`: archive storage.
   * 
   * - `All`: all storage types.
   * 
   * > If you set `StorageType` to `All`, you must set `DirectoryOnly` to `true`.
   * 
   * This parameter is required.
   * 
   * @example
   * InfrequentAccess
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      directoryOnly: 'DirectoryOnly',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      path: 'Path',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryOnly: 'boolean',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      path: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

