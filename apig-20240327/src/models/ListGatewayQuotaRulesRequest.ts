// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayQuotaRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The rule name keyword, used for fuzzy match.
   * 
   * @example
   * daily
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records to retrieve in a single request. This parameter is not supported.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. This parameter is not supported.
   * 
   * @example
   * C4tM8BlBJwHSNyjWpGaci4/7dKNGp1JMgsKtvCagmtY=
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

