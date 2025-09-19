// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListAssetRequest extends $dara.Model {
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
   * The maximum asset ID of the most recent query.
   * 
   * @example
   * 1001
   */
  lastMaxId?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **500**. Default value: **500**. This value indicates that 500 entries are displayed on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 180.119.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * >  You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to obtain the ID.
   * 
   * @example
   * 2730
   */
  strategyId?: number;
  /**
   * @remarks
   * The policy type of the asset that you want to query. Valid values:
   * 
   * *   **1**: learning policy
   * *   **2**: application policy
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      lastMaxId: 'LastMaxId',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      lastMaxId: 'number',
      pageSize: 'number',
      sourceIp: 'string',
      strategyId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

