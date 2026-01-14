// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBasicEndpointsResponseBodyEndpoints extends $dara.Model {
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
   * The type of the endpoint. Valid values:
   * 
   * *   **ENI:** ENI.
   * *   **SLB:** CLB instance.
   * *   **ECS:** ECS instance.
   * *   **NLB:** NLB instance.
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      endpointAddress: 'EndpointAddress',
      endpointId: 'EndpointId',
      endpointSubAddress: 'EndpointSubAddress',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointAddress: 'string',
      endpointId: 'string',
      endpointSubAddress: 'string',
      endpointType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBasicEndpointsResponseBody extends $dara.Model {
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
   * The endpoints in the endpoint group.
   */
  endpoints?: CreateBasicEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointGroupId: 'EndpointGroupId',
      endpoints: 'Endpoints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroupId: 'string',
      endpoints: { 'type': 'array', 'itemType': CreateBasicEndpointsResponseBodyEndpoints },
      requestId: 'string',
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

