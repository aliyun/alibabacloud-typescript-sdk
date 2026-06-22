// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteListStrategyStatusRequest extends $dara.Model {
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
   * The source IP address of the request. You do not need to specify this parameter. The system automatically obtains this value.
   * 
   * @example
   * 219.143.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The policy status. Valid values:
   * - **0**: Deleted.
   * - **1**: Learning.
   * - **2**: Paused.
   * - **3**: Learning complete.
   * - **4**: Active.
   * 
   * > - Only a policy in the **Learning** state can be changed to the **Paused** state.
   * > - Only a policy in the **Paused** state can be changed to the **Learning** state.
   * > - Only a policy in the **Learning complete** state can be changed to the **Active** state.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The policy ID.
   * >Call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 8516
   */
  strategyIds?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      status: 'Status',
      strategyIds: 'StrategyIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      status: 'number',
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

