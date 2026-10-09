// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the policies to query. Valid values:
   * 
   * - **common**: standard policy
   * - **custom**: custom policy
   * 
   * @example
   * custom
   */
  customType?: string;
  /**
   * @remarks
   * The language of the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.X.X
   */
  sourceIp?: string;
  /**
   * @remarks
   * The IDs of the policies to query. Separate multiple IDs with commas (,).
   * 
   * @example
   * 8164248
   */
  strategyIds?: string;
  static names(): { [key: string]: string } {
    return {
      customType: 'CustomType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customType: 'string',
      lang: 'string',
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

