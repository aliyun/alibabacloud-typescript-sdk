// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplatesRequest extends $dara.Model {
  /**
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @example
   * Red
   */
  colorScheme?: string;
  /**
   * @example
   * Retail
   */
  industry?: string;
  /**
   * @example
   * ${\\"wget JiexJPWT.popscan.xaliyun.com\\"}
   */
  keyword?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * V2
   */
  productVersion?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      colorScheme: 'ColorScheme',
      industry: 'Industry',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productVersion: 'ProductVersion',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      colorScheme: 'string',
      industry: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNum: 'number',
      pageSize: 'number',
      productVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

