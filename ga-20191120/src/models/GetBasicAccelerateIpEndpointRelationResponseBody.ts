// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicAccelerateIpEndpointRelationResponseBody extends $dara.Model {
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
   * The ID of the endpoint.
   * 
   * @example
   * ep-bp14sz7ftcwwjgrdm****
   */
  endpointId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * ep01
   */
  endpointName?: string;
  /**
   * @remarks
   * The secondary address of the endpoint.
   * 
   * This parameter is returned if the endpoint type is **ECS**, **ENI**, or **NLB**.
   * 
   * *   If the endpoint type is **ECS**, **EndpointSubAddress** returns the primary or secondary private IP address of the primary ENI.
   * *   If the endpoint type is **ENI**, **EndpointSubAddress** returns the primary or secondary private IP address of the secondary ENI.
   * *   If the endpoint type is **NLB**, **EndpointSubAddress** returns the primary private IP address of the NLB backend server.
   * 
   * @example
   * 172.16.XX.XX
   */
  endpointSubAddress?: string;
  /**
   * @remarks
   * The type of the secondary address of the endpoint.
   * 
   * *   **primary**: a primary private IP address.
   * *   **secondary**: a secondary private IP address.
   * 
   * This parameter is returned if the endpoint type is **ECS**, **ENI**, or **NLB**. If the endpoint type is set to **NLB**, **primary** is returned.
   * 
   * @example
   * primary
   */
  endpointSubAddressType?: string;
  /**
   * @remarks
   * The type of endpoint. Valid values:
   * 
   * *   **ENI**: elastic network interface (ENI).
   * *   **SLB**: Classic Load Balancer (CLB) instance.
   * *   **ECS**: Elastic Compute Service (ECS) instance.
   * *   **NLB**: Network Load Balancer (NLB) instance.
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  /**
   * @remarks
   * The ID of the zone where the endpoint is created.
   * 
   * This parameter is returned only when the endpoint type is **NLB**.
   * 
   * @example
   * cn-hangzhou-g
   */
  endpointZoneId?: string;
  /**
   * @remarks
   * The accelerated IP address of the basic GA instance.
   * 
   * @example
   * 116.132.XX.XX
   */
  ipAddress?: string;
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
   * The association status between the accelerated IP address and endpoint.
   * 
   * A value of **active** indicates that the accelerated IP address is associated with the endpoint.
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

