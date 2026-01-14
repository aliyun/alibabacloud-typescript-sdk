// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBasicAccelerateIpEndpointRelationsResponseBodyAccelerateIpEndpointRelations extends $dara.Model {
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
   * ga-bp1miyl2kn2racucvegr5
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
   * NLB
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

export class ListBasicAccelerateIpEndpointRelationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of accelerated IP addresses and the endpoints with which the accelerated IP addresses are associated.
   */
  accelerateIpEndpointRelations?: ListBasicAccelerateIpEndpointRelationsResponseBodyAccelerateIpEndpointRelations[];
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
      accelerateIpEndpointRelations: 'AccelerateIpEndpointRelations',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpEndpointRelations: { 'type': 'array', 'itemType': ListBasicAccelerateIpEndpointRelationsResponseBodyAccelerateIpEndpointRelations },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accelerateIpEndpointRelations)) {
      $dara.Model.validateArray(this.accelerateIpEndpointRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

