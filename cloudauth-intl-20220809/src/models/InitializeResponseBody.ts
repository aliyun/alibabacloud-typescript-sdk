// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Client configuration
   * 
   * @example
   * ***
   */
  clientCfg?: string;
  /**
   * @remarks
   * Standard encryption protocol for authentication.
   * 
   * > This field is required when integrating with H5 web pages using iframe embedding.
   * 
   * @example
   * hksb7ba1b28130d24e015d*********
   */
  protocol?: string;
  /**
   * @remarks
   * Authentication ID
   * 
   * @example
   * 08573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  /**
   * @remarks
   * Web authentication URL
   * 
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

export class InitializeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Return result
   */
  result?: InitializeResponseBodyResult;
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
      result: InitializeResponseBodyResult,
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

