// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the basic GA instance.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
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
   * The ID of the endpoint group.
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
   * This parameter is required if the endpoint type is **ECS**, **ENI**, or **NLB**.
   * 
   * *   If the endpoint type is **ECS**, you can set **EndpointSubAddress** to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
   * *   If the endpoint type is **ENI**, you can set **EndpointSubAddress** to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
   * *   This parameter is required if the endpoint type is **NLB**. **EndpointSubAddress** is the primary private IP address of the NLB backend server.
   * 
   * @example
   * 172.16.XX.XX
   */
  endpointSubAddress?: string;
  /**
   * @remarks
   * The type of the secondary address of the endpoint. Valid values:
   * 
   * *   **primary**: a primary private IP address.
   * *   **secondary**: a secondary private IP address.
   * 
   * This parameter is required if the endpoint type is **ECS**, **ENI**, or **NLB**. If the endpoint type is **NLB**, only **primary** is supported.
   * 
   * @example
   * primary
   */
  endpointSubAddressType?: string;
  /**
   * @remarks
   * The type of endpoint. Valid values:
   * 
   * *   **ENI**: elastic network interface (ENI)
   * *   **SLB**: Classic Load Balancer (CLB)
   * *   **ECS**: Elastic Compute Service (ECS)
   * *   **NLB**: Network Load Balancer (NLB)
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
   * This parameter is required only if the endpoint type is **NLB**.
   * 
   * @example
   * cn-hangzhou-g
   */
  endpointZoneId?: string;
  /**
   * @remarks
   * The name of the endpoint that is associated with the basic GA instance.
   * 
   * The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * ep01
   */
  name?: string;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
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

