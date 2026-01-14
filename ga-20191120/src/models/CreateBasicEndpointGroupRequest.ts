// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicEndpointGroupRequest extends $dara.Model {
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
   * The description of the endpoint group.
   * 
   * The description can be up to 200 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * BasicEndpointGroup
   */
  description?: string;
  /**
   * @remarks
   * The endpoint address.
   * 
   * @example
   * eni-bp1a05txelswuj8g****
   */
  endpointAddress?: string;
  /**
   * @remarks
   * The ID of the region to which the endpoint group belongs.
   * 
   * You can call the [ListAvailableBusiRegions](https://help.aliyun.com/document_detail/2253223.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The secondary address of the endpoint.
   * 
   * You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
   * 
   * *   When the endpoint type is **ECS**, you can set **EndpointSubAddress** to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
   * *   If the endpoint type is **ENI**, you can set **EndpointSubAddress** to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
   * 
   * @example
   * 172.16.XX.XX
   */
  endpointSubAddress?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **ENI**
   * *   **SLB**
   * *   **ECS**
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
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
      description: 'Description',
      endpointAddress: 'EndpointAddress',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointSubAddress: 'EndpointSubAddress',
      endpointType: 'EndpointType',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      description: 'string',
      endpointAddress: 'string',
      endpointGroupRegion: 'string',
      endpointSubAddress: 'string',
      endpointType: 'string',
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

