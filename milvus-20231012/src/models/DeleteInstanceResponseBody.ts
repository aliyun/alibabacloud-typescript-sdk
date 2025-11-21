// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * ABCD-1234-5678-EFGH
   */
  requestId?: string;
  /**
   * @example
   * c-xxxx
   */
  instanceId?: string;
  /**
   * @example
   * 123456
   */
  orderId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      instanceId: 'instanceId',
      orderId: 'orderId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      instanceId: 'string',
      orderId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

