// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodePoolAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidParameter.PoolId
   */
  code?: string;
  /**
   * @example
   * The parameter PoolId is invalid.
   */
  message?: string;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

