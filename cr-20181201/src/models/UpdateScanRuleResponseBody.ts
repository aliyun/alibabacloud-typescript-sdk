// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateScanRuleResponseBody extends $dara.Model {
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
   * 33EF1695-E2B7-5D57-B4E1-3D655FE1EBD8
   */
  requestId?: string;
  /**
   * @example
   * crscnr-3qmkeiuggfpjkfrq
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

