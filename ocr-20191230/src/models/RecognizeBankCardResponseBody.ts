// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeBankCardResponseBodyData extends $dara.Model {
  bankName?: string;
  /**
   * @example
   * 6212262315007683105
   */
  cardNumber?: string;
  cardType?: string;
  /**
   * @example
   * 07/26
   */
  validDate?: string;
  static names(): { [key: string]: string } {
    return {
      bankName: 'BankName',
      cardNumber: 'CardNumber',
      cardType: 'CardType',
      validDate: 'ValidDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bankName: 'string',
      cardNumber: 'string',
      cardType: 'string',
      validDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeBankCardResponseBody extends $dara.Model {
  data?: RecognizeBankCardResponseBodyData;
  /**
   * @example
   * D9C7521-0367-42EE-9646-FD066CCADB26
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeBankCardResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

