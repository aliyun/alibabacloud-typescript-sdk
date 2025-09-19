// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWhiteListStrategyStatusRequest extends $dara.Model {
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
   * 219.143.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the policy. Valid values:
   * 
   * *   **0**: deleted
   * *   **1**: learning
   * *   **2**: paused
   * *   **3**: learning completed
   * *   **4**: enabled
   * 
   * > 
   * 
   * *   You can change the status to **paused** only if the policy status is **learning**.
   * 
   * *   You can change the status to **learning** only if the policy status is **paused**.
   * 
   * *   You can change the status to **enabled** only if the policy status is **learning completed**.
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
   * 
   * >  You can call the [DescribeWhiteListStrategyList](~~DescribeWhiteListStrategyList~~) operation to obtain the ID.
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

