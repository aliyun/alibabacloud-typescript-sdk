// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicAccelerateIpEndpointRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated IP address instance ID of the basic Global Accelerator (GA) instance.
   * 
   * @example
   * gaip-bp1****
   */
  accelerateIpId?: string;
  /**
   * @remarks
   * The instance ID of the basic Global Accelerator (GA) instance.
   * 
   * @example
   * ga-bp11v53zfftax68b0daws
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The address of the endpoint.
   * 
   * @example
   * eni-bp1a05txelswuj8g****
   */
  endpointAddress?: string;
  /**
   * @remarks
   * The endpoint ID of the basic Global Accelerator (GA) instance.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint of the basic Global Accelerator (GA) instance.
   * 
   * @example
   * ep01
   */
  endpointName?: string;
  /**
   * @remarks
   * The secondary address of the endpoint.
   * 
   * This parameter is returned when the endpoint type attached to the accelerated IP address is **ECS**, **ENI**, or **NLB**.
   * - If the endpoint type is **ECS**, EndpointSubAddress is the secondary private IP address or the primary private IP address of the primary network interface controller (NIC).
   * - If the endpoint type is **ENI**, EndpointSubAddress is the secondary private IP address or the primary private IP address of the secondary elastic network interface (ENI).
   * - If the endpoint type is **NLB**, EndpointSubAddress is the primary private IP address of the NLB backend server.
   * 
   * @example
   * 172.16.XX.XX
   */
  endpointSubAddress?: string;
  /**
   * @remarks
   * The type of the secondary address of the endpoint. Valid values:
   * - **primary**: The secondary address type is the primary private IP address.
   * - **secondary**: The secondary address type is the secondary private IP address.
   * 
   * This parameter is returned when the endpoint type bound to the accelerated IP address is **ECS**, **ENI**, or **NLB**. If the endpoint type is **NLB**, only **primary** is returned.
   * 
   * @example
   * primary
   */
  endpointSubAddressType?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * - **ENI**: an Alibaba Cloud elastic network interface (ENI).
   * - **SLB**: an Alibaba Cloud Classic Load Balancer (CLB) instance.
   * - **ECS**: an Alibaba Cloud ECS instance.
   * - **NLB**: an Alibaba Cloud Network Load Balancer (NLB) instance.
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  /**
   * @remarks
   * The zone ID of the endpoint.
   * 
   * Currently, this parameter is returned only when the endpoint type bound to the accelerated IP address is **NLB**.
   * 
   * @example
   * cn-hangzhou-g
   */
  endpointZoneId?: string;
  /**
   * @remarks
   * The accelerated IP address of the basic Global Accelerator (GA) instance.
   * 
   * @example
   * 116.132.XX.XX
   */
  ipAddress?: string;
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
   * The status of the attachment between the accelerated IP address and the endpoint of the basic Global Accelerator (GA) instance.
   * 
   * The value **active** indicates that the accelerated IP address is attached to the endpoint.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      endpointAddress: 'EndpointAddress',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      ipAddress: 'IpAddress',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpId: 'string',
      acceleratorId: 'string',
      endpointAddress: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      ipAddress: 'string',
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

