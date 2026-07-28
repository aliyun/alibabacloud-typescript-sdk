// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckCanAllocateVpcPrivateIpAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the private IP address is available. Valid values:
   * 
   * - **true**: The private IP address is not occupied in the specified vSwitch and can be used.
   * - **false**: The private IP address is already occupied in the specified vSwitch and cannot be used.
   * 
   * @example
   * true
   */
  canAllocate?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 93360B0-2969-40BF-8542-EBB34FD358AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      canAllocate: 'CanAllocate',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canAllocate: 'boolean',
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

