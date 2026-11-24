// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwarelibSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the software category. For more information about how to configure software categories, see [Software management](https://www.alibabacloud.com/help/en/sase/user-guide/software-management).
   * 
   * @example
   * softwarelib-classify-61b7ccc63cae****
   */
  classifyId?: string;
  /**
   * @remarks
   * The page number of the current page for a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page. This parameter is not supported by the current API operation. Use CurrentPage and PageSize for pagination.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. This parameter is not supported by the current API operation. Use CurrentPage and PageSize for pagination.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh27/Jy4SXvlU9WgqeV7az+t
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system applicable to the software package. Valid values:
   * - **Windows**: Windows.
   * - **Mac(Apple)**: macOS with Apple silicon.
   * - **Mac(Intel)**: macOS with Intel processors.
   * 
   * @example
   * Windows
   */
  os?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the software. Fuzzy match is supported.
   * 
   * @example
   * Thunder
   */
  softwareName?: string;
  /**
   * @remarks
   * The source of the software. Valid values:
   * - **custom**: Custom software.
   * - **builtin**: Built-in software library.
   * 
   * @example
   * builtin
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      classifyId: 'ClassifyId',
      currentPage: 'CurrentPage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      os: 'Os',
      pageSize: 'PageSize',
      softwareName: 'SoftwareName',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classifyId: 'string',
      currentPage: 'number',
      maxResults: 'number',
      nextToken: 'string',
      os: 'string',
      pageSize: 'number',
      softwareName: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

