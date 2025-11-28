// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanRuleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: number;
  /**
   * @remarks
   * Request Id
   * 
   * @example
   * EAEAB520-2456-5BF2-BCB5-AC998DFA3A51
   */
  requestId?: string;
  /**
   * @example
   * crscnr-k3gdm5vrn2nzf5hw
   */
  scanRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      scanRuleId: 'ScanRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      scanRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

