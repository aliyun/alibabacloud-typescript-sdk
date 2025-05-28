// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelFundAccountLowAvailableAmountAlarmResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * DFC1F7F9-3BA9-BA4D-2F2E653
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      metadata: 'any',
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

