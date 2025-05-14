// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMicroOutboundResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {\\"caseId\\":2323****}
   */
  customerInfo?: string;
  /**
   * @example
   * 8883f165-4a0d-4da2-a2d2
   */
  invokeCmdId?: string;
  /**
   * @example
   * 2019-05-23 17:30:32.525
   */
  invokeCreateTime?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      customerInfo: 'CustomerInfo',
      invokeCmdId: 'InvokeCmdId',
      invokeCreateTime: 'InvokeCreateTime',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      customerInfo: 'string',
      invokeCmdId: 'string',
      invokeCreateTime: 'string',
      message: 'string',
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

