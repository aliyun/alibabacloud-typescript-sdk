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
   * The keyword used to perform a fuzzy match on the rule name.
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule status. This parameter is optional. Valid values: enabled and disabled. If this parameter is not specified, all rules are queried.
   * 
   * @example
   * enabled
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      ruleStatus: 'ruleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      ruleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

