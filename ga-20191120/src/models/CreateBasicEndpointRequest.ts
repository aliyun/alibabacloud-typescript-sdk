// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the basic Alibaba Cloud Global Accelerator (GA).
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The address of the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-bp1a05txelswuj8g****
   */
  endpointAddress?: string;
  /**
   * @remarks
   * The endpoint group ID of the basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The secondary address of the endpoint.
   * 
   * This parameter is required when the endpoint type is **ECS**, **ENI**, or **NLB**.
   * - If the endpoint type is **ECS**, EndpointSubAddress can be set to a secondary private IP of the primary network interface controller (NIC). If you leave this parameter empty, the primary private IP of the primary network interface controller (NIC) is used.
   * - If the endpoint type is **ENI**, EndpointSubAddress can be set to a secondary private IP of the secondary network interface controller (NIC). If you leave this parameter empty, the primary private IP of the secondary network interface controller (NIC) is used.
   * - If the endpoint type is **NLB**, this parameter is required. Set EndpointSubAddress to the primary private IP of the NLB backend server.
   * 
   * @example
   * 172.16.XX.XX
   */
  endpointSubAddress?: string;
  /**
   * @remarks
   * The type of the secondary address of the endpoint. Valid values:
   * - **primary**: The secondary address type is the primary private IP address.
   * - **secondary**: The secondary address type is a secondary private IP address.
   * 
   * This parameter is required when the endpoint type is **ECS**, **ENI**, or **NLB**. If the endpoint type is **NLB**, only **primary** is supported.
   * 
   * @example
   * primary
   */
  endpointSubAddressType?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * - **ENI**: Alibaba Cloud elastic network interface (ENI).
   * - **SLB**: Alibaba Cloud Classic Load Balancer (CLB) instance.
   * - **ECS**: Alibaba Cloud ECS instance.
   * - **NLB**: Alibaba Cloud Network Load Balancer (NLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  /**
   * @remarks
   * The zone ID of the endpoint.
   * 
   * Currently, this parameter is required only when the endpoint type is **NLB**.
   * 
   * @example
   * cn-hangzhou-g
   */
  endpointZoneId?: string;
  /**
   * @remarks
   * The name of the endpoint for the basic Alibaba Cloud Global Accelerator (GA) instance.
   * 
   * The name must be 1 to 128 characters in length and must start with a letter or a Chinese character. The name can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * ep01
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **ap-southeast-1**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

