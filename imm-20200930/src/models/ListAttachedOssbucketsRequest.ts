// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttachedOSSBucketsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of tasks in the returned result list. The value range is (0, 200], with a default value of 100.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * Pagination token.
   * 
   * When the total number of files exceeds the set MaxResults, this token is used for pagination. It returns the list of file information in lexicographical order starting from NextToken.
   * 
   * > When calling this interface for the first time in a single query, set this value to empty.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDpleGFtcGxlYnVja2V0OmRhdGFzZXQwMDE6b3NzOi8vZXhhbXBsZWJ1Y2tldC9zYW1wbGVvYmplY3QxLmpwZw==
   */
  nextToken?: string;
  /**
   * @remarks
   * Project name, for more information on how to obtain it, see [Create Project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

