// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250718165839000001
   */
  bizId?: string;
  /**
   * @remarks
   * Number of results per query.
   * 
   * Range: 10~100. Default value: 20.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Token for the next query. It will be empty if there is no next query.
   * 
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * Sorting field
   * 
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @remarks
   * Sorting type ASC|DESC
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * Page number, default is 1
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Page size, default is 10
   * 
   * @example
   * 0
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orderColumn: 'OrderColumn',
      orderType: 'OrderType',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      orderColumn: 'string',
      orderType: 'string',
      pageNum: 'number',
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

