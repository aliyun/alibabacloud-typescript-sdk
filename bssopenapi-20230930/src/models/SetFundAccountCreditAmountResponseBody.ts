// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFundAccountCreditAmountResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  metadata?: any;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metadata: 'Metadata',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

