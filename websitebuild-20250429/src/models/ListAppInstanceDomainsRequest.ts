// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInstanceDomainsRequest extends $dara.Model {
  /**
   * @example
   * WD20250718165839000001
   */
  bizId?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * 0l45bkwM022Dt+rOvPi/oQ==
   */
  nextToken?: string;
  /**
   * @example
   * CreationTime
   */
  orderColumn?: string;
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
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

