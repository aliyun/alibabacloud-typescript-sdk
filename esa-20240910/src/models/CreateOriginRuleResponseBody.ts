// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOriginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * Configuration ID.
   * 
   * @example
   * 352816096987136
   */
  configId?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
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

