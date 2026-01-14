// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicEndpointsRequestEndpoints extends $dara.Model {
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
   * The secondary address of the endpoint.
   * 
   * This parameter is required only if you set the endpoint type to **ECS**, **ENI**, or **NLB**.
   * 
   * *   If you set the endpoint type to **ECS**, you can set **EndpointSubAddress** to the secondary private IP address of the primary ENI. If you leave this parameter empty, the primary private IP address of the primary ENI is used.
   * *   If you set the endpoint type to **ENI**, you can set **EndpointSubAddress** to the secondary private IP address of the secondary ENI. If you leave this parameter empty, the primary private IP address of the secondary ENI is used.
   * *   If you set the endpoint type to **NLB**, you can set **EndpointSubAddress** to the primary private IP address of the NLB backend server.
   * 
   * @example
   * 172.16.XX.XX
   */
  endpointSubAddress?: string;
  /**
   * @remarks
   * The secondary address type of the endpoint. Valid values:
   * 
   * *   **primary**: a primary private IP address.
   * *   **secondary**: a secondary private IP address.
   * 
   * This parameter is required only if you set the endpoint type to **ECS**, **ENI**, or **NLB**. If you set the endpoint type to **NLB**, only **primary** is supported.
   * 
   * @example
   * primary
   */
  endpointSubAddressType?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **ENI**: elastic network interface (ENI).
   * *   **SLB**: Classic Load Balancer (CLB) instance.
   * *   **ECS**: Elastic Compute Service (ECS) instance.
   * *   **NLB**: Network Load Balancer (NLB) instance.
   * 
   * >  This parameter is required.
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  /**
   * @remarks
   * The ID of the zone where the endpoint resides.
   * 
   * This parameter is required only if you set the endpoint type to **NLB**.
   * 
   * @example
   * cn-hangzhou-g
   */
  endpointZoneId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * ep01
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      endpointAddress: 'EndpointAddress',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointAddress: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointsRequest extends $dara.Model {
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
   * The endpoints.
   * 
   * This parameter is required.
   */
  endpoints?: CreateBasicEndpointsRequestEndpoints[];
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
      endpointGroupId: 'EndpointGroupId',
      endpoints: 'Endpoints',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      endpointGroupId: 'string',
      endpoints: { 'type': 'array', 'itemType': CreateBasicEndpointsRequestEndpoints },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

