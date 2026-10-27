// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyProcessWhiteListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The MD5 hash value of the process startup file.
   * > You can call the [DescribeWhiteListProcess](~~DescribeWhiteListProcess~~) operation to query the value.
   * 
   * This parameter is required.
   * 
   * @example
   * 001d7f68c3b44147988f0dc81192****
   */
  md5s?: string;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. The system automatically retrieves the value.
   * 
   * @example
   * 173.128.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * Specifies the whitelist status of the process. Valid values:
   * - **1**: remove from the whitelist
   * - **2**: add to the whitelist
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ID of the policy.
   * > You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  strategyId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      md5s: 'Md5s',
      sourceIp: 'SourceIp',
      status: 'Status',
      strategyId: 'StrategyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      md5s: 'string',
      sourceIp: 'string',
      status: 'number',
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

