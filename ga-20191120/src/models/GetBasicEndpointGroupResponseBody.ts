// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBasicEndpointGroupResponseBody extends $dara.Model {
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
   * The description of the endpoint group.
   * 
   * @example
   * BasicEndpointGroup
   */
  description?: string;
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
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint group resides.
   * 
   * @example
   * cn-shanghai
   */
  endpointGroupRegion?: string;
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
   * The type of endpoint. Valid values:
   * 
   * *   **ENI**: elastic network interface (ENI).
   * *   **SLB**: Classic Load Balancer (CLB) instance.
   * *   **ECS**: Elastic Compute Service (ECS) instance.
   * *   **NLB**: Network Load Balancer (NLB) instance
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * @example
   * group1
   */
  name?: string;
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
   * The status of the endpoint group. Valid values:
   * 
   * *   **init**: being initialized.
   * *   **active**: running as expected.
   * *   **updating**: being updated.
   * *   **deleting**: being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      description: 'Description',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointSubAddress: 'EndpointSubAddress',
      endpointType: 'EndpointType',
      name: 'Name',
      requestId: 'RequestId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      description: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointGroupRegion: 'string',
      endpointSubAddress: 'string',
      endpointType: 'string',
      name: 'string',
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

