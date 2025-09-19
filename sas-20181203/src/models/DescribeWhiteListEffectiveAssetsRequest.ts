// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListEffectiveAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to return the number of **untrusted programs**. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 0
   */
  needStatistics?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **1000**. Default value: 20. If you leave this parameter empty, 20 data entries are returned per page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The condition that is used to query assets. You can enter an IP address, a public IP address, an private IP address, or an asset name for fuzzy match.
   * 
   * @example
   * 222.185.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 27.212.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * >  You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to obtain the ID.
   * 
   * @example
   * 8437592
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      needStatistics: 'NeedStatistics',
      pageSize: 'PageSize',
      remark: 'Remark',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      needStatistics: 'number',
      pageSize: 'number',
      remark: 'string',
      sourceIp: 'string',
      strategyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

