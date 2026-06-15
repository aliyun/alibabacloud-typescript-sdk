// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the allocation.
   */
  allocationId?: string;
  /**
   * @remarks
   * The allocated elastic IP address.
   */
  eipAddress?: string;
  /**
   * @remarks
   * The unique ID of the request.
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipAddress: 'EipAddress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipAddress: 'string',
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

