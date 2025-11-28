// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePrivateRAGServiceResponseBody extends $dara.Model {
  /**
   * @example
   * https://oss-xxx
   */
  caCert?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      caCert: 'CaCert',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCert: 'string',
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

