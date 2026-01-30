// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateReservedNodePoolResponseBody extends $dara.Model {
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * rnp-cdx****
   */
  reservedNodePoolId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reservedNodePoolId: 'ReservedNodePoolId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reservedNodePoolId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

