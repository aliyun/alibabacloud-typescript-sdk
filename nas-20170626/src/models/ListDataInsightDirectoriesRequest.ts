// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataInsightDirectoriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * bmcpfs-030wldnqm8evtpy****
   */
  fileSystemId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * ""
   */
  nextToken?: string;
  /**
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

