// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerQuotaRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway ID. This parameter is optional.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
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
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
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

