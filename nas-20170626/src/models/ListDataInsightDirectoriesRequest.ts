// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataInsightDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-0015\\*\\*\\*\\*.
   * > Only CPFS for Lingjun file systems are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-030wldnqm8evtpy****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum number of directories to return.
   * 
   * Valid values: 10 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call. Leave this parameter empty for the first request. Default value: "".
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The parent directory path. Specifies the parent directory to query. Default value: root directory "/".
   * 
   * @example
   * /
   */
  parentDir?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentDir: 'ParentDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      parentDir: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

