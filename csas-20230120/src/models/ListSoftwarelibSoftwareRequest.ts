// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSoftwarelibSoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * The software classification ID. You can call [ListSoftwarelibClassify](~~ListSoftwarelibClassify~~) to obtain the value.
   * 
   * @example
   * softwarelib-classify-61b7ccc63cae****
   */
  classifyId?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page. This parameter is not supported by this operation. Use CurrentPage and PageSize for pagination.
   * 
   * @example
   * 0
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is not supported by this operation. Use CurrentPage and PageSize for pagination.
   * 
   * @example
   * AAAAARbaCuN6hiD08qrLdwJ9Fh27/Jy4SXvlU9WgqeV7az+t
   */
  nextToken?: string;
  /**
   * @remarks
   * The operating system to which the software package applies. Valid values:
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
   * The number of entries per page in a paging query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The software name. Fuzzy match is supported.
   * 
   * @example
   * Thunder
   */
  softwareName?: string;
  /**
   * @remarks
   * The software source. Valid values:
   * - **custom**: custom software.
   * - **builtin**: built-in software library.
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

