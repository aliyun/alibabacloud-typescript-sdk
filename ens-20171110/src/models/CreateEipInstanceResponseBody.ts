// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEipInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * @example
   * eip-25877c70gddh****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9DB6123F-470D-510A-A9EB-EBA799340452
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
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

