// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecycledDirectoriesAndFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The FileId of the directory to be queried.
   * 
   * This field is the NFS inode number. When the recycle bin is empty, you can set FileId to 2 (the inode of the root directory) to directly call this operation to verify the accessibility of the operation or query the content of the recycle bin in the root directory. You can call the [ListRecentlyRecycledDirectories](https://help.aliyun.com/document_detail/2412173.html) operation to query other valid FileIds.
   * 
   * This parameter is required.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The number of files or directories to return per query.
   * 
   * Valid values: 10 to 1000.
   * 
   * Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. You do not need to specify this parameter for the first query.
   * 
   * If the query does not return all files and directories, a non-empty NextToken is returned.
   * You can use the returned NextToken to continue the query.
   * 
   * @example
   * 1256****25
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

