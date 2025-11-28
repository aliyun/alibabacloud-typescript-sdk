// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScanRuleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Request Id
   * 
   * @example
   * 12589EF7-96E2-4554-AAD7-F7209E88CAD3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

