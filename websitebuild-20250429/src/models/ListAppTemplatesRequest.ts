// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * The color scheme.
   * 
   * @example
   * Red
   */
  colorScheme?: string;
  /**
   * @remarks
   * The industry category.
   * 
   * @example
   * Retail
   */
  industry?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * ${\\"wget JiexJPWT.popscan.xaliyun.com\\"}
   */
  keyword?: string;
  /**
   * @remarks
   * The number of results returned per query. Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query. This parameter is empty if there is no next query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @example
   * copyCount
   */
  orderColumn?: string;
  /**
   * @example
   * DESC
   */
  orderType?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The edition.
   * 
   * @example
   * V2
   */
  productVersion?: string;
  /**
   * @remarks
   * The template status.
   * 
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
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
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
      orderColumn: 'string',
      orderType: 'string',
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

