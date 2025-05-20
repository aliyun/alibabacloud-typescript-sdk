// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ***
   */
  clientCfg?: string;
  protocol?: string;
  /**
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  /**
   * @example
   * http****
   */
  transactionUrl?: string;
  static names(): { [key: string]: string } {
    return {
      clientCfg: 'ClientCfg',
      protocol: 'Protocol',
      transactionId: 'TransactionId',
      transactionUrl: 'TransactionUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientCfg: 'string',
      protocol: 'string',
      transactionId: 'string',
      transactionUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

