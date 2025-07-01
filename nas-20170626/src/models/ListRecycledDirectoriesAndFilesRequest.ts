// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecycledDirectoriesAndFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory that you want to query.
   * 
   * You can call the [ListRecentlyRecycledDirectories ](https://help.aliyun.com/document_detail/2412173.html)operation to query the file ID.
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
   * The number of files or directories to return for each query.
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
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.
   * 
   * If all the files and directories are incompletely returned in a query, the return value of the NextToken parameter is not empty. In this case, you can specify a valid value for the NextToken parameter to continue the query.
   * 
   * @example
   * CJyNARIsMTY5OTI2NjQ3NTEzMjY2OTMwOF8xODA5NF8ufnl0YkROTl9uZXcuaXB5bmI=
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

