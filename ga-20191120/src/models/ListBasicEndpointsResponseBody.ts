// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBasicEndpointsResponseBodyEndpoints extends $dara.Model {
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
   * The address of the endpoint.
   * 
   * @example
   * eni-bp1a05txelswuj8g****
   */
  endpointAddress?: string;
  /**
   * @remarks
   * The ID of the endpoint group to which the endpoint belongs.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint that is associated with the basic GA instance.
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
   * The secondary address type of the endpoint.
   * 
   * *   **primary**: a primary private IP address.
   * *   **secondary**: a secondary private IP address.
   * 
   * This parameter is returned if the type of the endpoint is set to **ECS**, **ENI**, or **NLB**. If the endpoint type is set to **NLB**, **primary** is returned.
   * 
   * @example
   * primary
   */
  endpointSubAddressType?: string;
  /**
   * @remarks
   * The type of endpoint. Valid values:
   * 
   * *   **ENI**: ENI.
   * *   **SLB**: CLB instance.
   * *   **ECS**: ECS instance.
   * *   **NLB**: NLB instance.
   * 
   * @example
   * ENI
   */
  endpointType?: string;
  /**
   * @remarks
   * The zone ID of the endpoint.
   * 
   * This parameter is returned only when the endpoint type is set to **NLB**.
   * 
   * @example
   * cn-hangzhou-g
   */
  endpointZoneId?: string;
  /**
   * @remarks
   * The name of the endpoint.
   * 
   * @example
   * ep01
   */
  name?: string;
  /**
   * @remarks
   * The status of the endpoint. Valid values:
   * 
   * *   **init**: The endpoint is being initialized.
   * *   **active**: The endpoint is available.
   * *   **updating**: The endpoint is being configured.
   * *   **binding**: The endpoint is being associated.
   * *   **unbinding**: The endpoint is being disassociated.
   * *   **deleting**: The endpoint is being deleted.
   * *   **bound**: The endpoint is associated.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      endpointAddress: 'EndpointAddress',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      endpointSubAddress: 'EndpointSubAddress',
      endpointSubAddressType: 'EndpointSubAddressType',
      endpointType: 'EndpointType',
      endpointZoneId: 'EndpointZoneId',
      name: 'Name',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      endpointAddress: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      endpointSubAddress: 'string',
      endpointSubAddressType: 'string',
      endpointType: 'string',
      endpointZoneId: 'string',
      name: 'string',
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

export class ListBasicEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoints that are associated with the basic GA instance.
   */
  endpoints?: ListBasicEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** is not returned, it indicates that no additional results exist.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ListBasicEndpointsResponseBodyEndpoints },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
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

