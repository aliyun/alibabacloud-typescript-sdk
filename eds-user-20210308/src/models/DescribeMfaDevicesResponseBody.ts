// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMfaDevicesResponseBodyMfaDevices } from "./DescribeMfaDevicesResponseBodyMfaDevices";


export class DescribeMfaDevicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the virtual MFA devices.
   */
  mfaDevices?: DescribeMfaDevicesResponseBodyMfaDevices[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6na6YlN9asMM31MsMcdQNpp
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 33DBB8EC-6E68-4726-91C4-E09C59D9A7D8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mfaDevices: 'MfaDevices',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mfaDevices: { 'type': 'array', 'itemType': DescribeMfaDevicesResponseBodyMfaDevices },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mfaDevices)) {
      $dara.Model.validateArray(this.mfaDevices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

