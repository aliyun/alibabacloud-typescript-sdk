// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFileSystemsRequest extends $dara.Model {
  /**
   * @remarks
   * The absolute path of the directory to query. If not specified, the default path is used.
   * 
   * @example
   * /test
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum number of records to return per request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from the previous query to retrieve the next page.
   * 
   * @example
   * token123
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the PolarFS instance to query.
   * 
   * This parameter is required.
   * 
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      polarFsInstanceId: 'PolarFsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      polarFsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

