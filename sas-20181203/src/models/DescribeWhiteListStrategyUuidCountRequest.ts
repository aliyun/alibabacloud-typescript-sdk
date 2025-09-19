// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWhiteListStrategyUuidCountRequest extends $dara.Model {
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
   * The source IP address of the request. You do not need to specify this parameter. It is automatically obtained by the system.
   * 
   * @example
   * 42.120.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * >  You can call the [DescribeWhiteListStrategyStatistics](~~DescribeWhiteListStrategyStatistics~~) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8516
   */
  strategyId?: number;
  /**
   * @remarks
   * The type of the policy. Valid values:
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
      sourceIp: 'SourceIp',
      strategyId: 'StrategyId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

