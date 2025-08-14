// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouteTableAggregationDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the configuration of the aggregate route fails.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) for which the aggregate route is configured.
   * 
   * @example
   * vpc-6eh7fp9hdqa2wv85t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the aggregate route. Valid values:
   * 
   * *   **Configured**: The aggregate route is advertised to the VPC.
   * *   **Configuring**: The aggregate route is being advertised.
   * *   **ConfigFailed**: The aggregate route failed to be advertised.
   * *   **PartialConfigured**: Failed to advertise the aggregate route to some VPCs.
   * *   **Deleting**: The aggregate route is being deleted.
   * 
   * @example
   * Configured
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransitRouteTableAggregationDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The configuration of the aggregate route.
   */
  data?: DescribeTransitRouteTableAggregationDetailResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeTransitRouteTableAggregationDetailResponseBodyData },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

