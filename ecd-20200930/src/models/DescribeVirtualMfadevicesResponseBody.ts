// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualMFADevicesResponseBodyVirtualMFADevices } from "./DescribeVirtualMfadevicesResponseBodyVirtualMfadevices";


export class DescribeVirtualMFADevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.If NextToken is empty, no next page exists.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL23as
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB550AAB-FB36-4A91-93F6-F4374AF65403
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the virtual MFA devices.
   */
  virtualMFADevices?: DescribeVirtualMFADevicesResponseBodyVirtualMFADevices[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      virtualMFADevices: 'VirtualMFADevices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      virtualMFADevices: { 'type': 'array', 'itemType': DescribeVirtualMFADevicesResponseBodyVirtualMFADevices },
    };
  }

  validate() {
    if(Array.isArray(this.virtualMFADevices)) {
      $dara.Model.validateArray(this.virtualMFADevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

