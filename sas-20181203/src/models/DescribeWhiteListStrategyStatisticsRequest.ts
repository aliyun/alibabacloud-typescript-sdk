// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListStrategyStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates the first page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Maximum value: 1000. Default value: 20. If you leave this parameter empty, 20 entries are returned.
   * 
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. The system automatically obtains this value.
   * 
   * @example
   * 183.63.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The policy ID.
   * >You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to obtain this parameter.
   * 
   * @example
   * 3645
   */
  strategyIds?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      sourceIp: 'string',
      strategyIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

