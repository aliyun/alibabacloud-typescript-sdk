// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFundAccountLowAvailableAmountAlarmResponseBody extends $dara.Model {
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
   * 08108BF5-1AA3-518E-9986-95A3616E8DA9
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

