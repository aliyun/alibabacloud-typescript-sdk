// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoriesAndFilesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only directories.
   * 
   * Valid values:
   * 
   * *   false (default): queries both directories and files.
   * *   true: queries only directories.
   * 
   * >  If you set the StorageType parameter to All, you must set the DirectoryOnly parameter to true.
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
   * The maximum number of directories or files to include in the results of each query.
   * 
   * Valid values: 10 to 128.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * TGlzdFJlc291cmNlU****mVzJjE1MTI2NjY4NzY5MTAzOTEmMiZORnI4NDhVeEtrUT0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The absolute path of the directory.
   * 
   * The path must start with a forward slash (/) and must be a path that exists in the mount target.
   * 
   * This parameter is required.
   * 
   * @example
   * /pathway/to/folder
   */
  path?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * *   InfrequentAccess: the Infrequent Access (IA) storage class.
   * *   Archive: the Archive storage class.
   * *   All: all stored data.
   * 
   * >  If you set the StorageType parameter to All, you must set the DirectoryOnly parameter to true.
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

