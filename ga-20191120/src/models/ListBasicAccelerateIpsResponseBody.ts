// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBasicAccelerateIpsResponseBodyAccelerateIps extends $dara.Model {
  /**
   * @remarks
   * The accelerated IP address of the basic GA instance.
   * 
   * @example
   * 116.132.XX.XX
   */
  accelerateIpAddress?: string;
  /**
   * @remarks
   * The ID of the accelerated IP address of the basic GA instance.
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
   * ga-bp17frjjh0udz4qz****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The ID of the acceleration region.
   * 
   * @example
   * ips-bp11r5jb8ogp122xl****
   */
  ipSetId?: string;
  /**
   * @remarks
   * The status of the accelerated IP address. Valid values:
   * 
   * *   **active**: The accelerated IP address is available.
   * *   **binding**: The accelerated IP address is being associated.
   * *   **bound**: The accelerated IP address is associated.
   * *   **unbinding**: The accelerated IP address is being disassociated.
   * *   **deleting**: The accelerated IP address is being deleted.
   * 
   * >  This parameter is unavailable when the accelerated IP address is being created.
   * 
   * @example
   * active
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accelerateIpAddress: 'AccelerateIpAddress',
      accelerateIpId: 'AccelerateIpId',
      acceleratorId: 'AcceleratorId',
      ipSetId: 'IpSetId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIpAddress: 'string',
      accelerateIpId: 'string',
      acceleratorId: 'string',
      ipSetId: 'string',
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

export class ListBasicAccelerateIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated IP addresses of the basic GA instance.
   */
  accelerateIps?: ListBasicAccelerateIpsResponseBodyAccelerateIps[];
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the query. Valid values:
   * 
   * *   If **NextToken** was not returned, it indicates that no additional results exist.
   * *   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
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
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accelerateIps: 'AccelerateIps',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerateIps: { 'type': 'array', 'itemType': ListBasicAccelerateIpsResponseBodyAccelerateIps },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accelerateIps)) {
      $dara.Model.validateArray(this.accelerateIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

