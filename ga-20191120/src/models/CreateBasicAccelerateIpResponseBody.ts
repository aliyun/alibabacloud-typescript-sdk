// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicAccelerateIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated IP address of the basic GA instance.
   * 
   * >  This parameter is unavailable.
   * 
   * @example
   * 116.132.XX.XX
   */
  accelerateIpAddress?: string;
  /**
   * @remarks
   * The ID of the accelerated IP address.
   * 
   * @example
   * gaip-bp1****
   */
  accelerateIpId?: string;
  /**
   * @remarks
   * The ID of the basic GA instance.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the accelerated IP address. Valid values:
   * 
   * **init:** The accelerated IP address is being initialized.
   * 
   * @example
   * null
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpAddress: 'AccelerateIpAddress',
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      ipSetId: 'IpSetId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpAddress: 'string',
      accelerateIpId: 'string',
      acceleratorId: 'string',
      ipSetId: 'string',
      requestId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

