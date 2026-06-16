// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeV2ResponseBodyResult extends $dara.Model {
  /**
   * @example
   * ***
   */
  clientCfg?: string;
  /**
   * @example
   * hksb7ba1b28130d24e015d*********
   */
  protocol?: string;
  /**
   * @example
   * 4ab0b***cbde97
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

export class InitializeV2ResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 86C40EC3-5940-5F47-995C-BFE90B70E540
   */
  requestId?: string;
  result?: InitializeV2ResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: InitializeV2ResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

