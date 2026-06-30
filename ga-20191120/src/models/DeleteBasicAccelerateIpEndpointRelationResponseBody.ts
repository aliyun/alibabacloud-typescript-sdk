// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBasicAccelerateIpEndpointRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated IP address instance ID of the basic GA instance.
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
   * The endpoint ID of the basic GA instance.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The attach status between the accelerated IP address and the endpoint of the basic GA instance.
   * 
   * > This parameter is not currently in use.
   * 
   * @example
   * null
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      endpointId: 'EndpointId',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      endpointId: 'string',
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

