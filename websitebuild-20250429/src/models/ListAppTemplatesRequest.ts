// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Application Type
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * Color scheme
   * 
   * @example
   * Red
   */
  colorScheme?: string;
  /**
   * @remarks
   * industry categorization
   * 
   * @example
   * Retail
   */
  industry?: string;
  /**
   * @remarks
   * Search keyword
   * 
   * @example
   * ${\\"wget JiexJPWT.popscan.xaliyun.com\\"}
   */
  keyword?: string;
  /**
   * @remarks
   * Number of results per query.  
   * 
   * Value range: 10–100. Default Value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Token indicating the start of the next query. It is empty when there is no next query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Edition
   * 
   * @example
   * V2
   */
  productVersion?: string;
  /**
   * @remarks
   * template Status
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

