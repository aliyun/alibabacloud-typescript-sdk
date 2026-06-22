// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceiveFunctionTrialRewardByAliUidRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the trial feature. Valid values:
   * - **trail_honeypot_reward**: cloud honeypot
   * - **trail_file_detect_api_reward**: malicious file detection SDK.
   * 
   * @example
   * trail_honeypot_reward
   */
  functionName?: string;
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'FunctionName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

