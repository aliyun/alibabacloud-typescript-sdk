// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransitRouteTableAggregationDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The message returned if the configuration of the aggregate route fails.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The ID of the VPC instance for which the aggregate route is configured.
   * 
   * @example
   * vpc-6eh7fp9hdqa2wv85t****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration status of the aggregate route.
   * 
   * - **Configured**: The aggregate route is advertised to the VPC instance.
   * 
   * - **Configuring**: The aggregate route is being advertised.
   * 
   * - **ConfigFailed**: The aggregate route failed to be advertised.
   * 
   * - **PartialConfigured**: The aggregate route was partially advertised.
   * 
   * - **Deleting**: The aggregate route is being deleted.
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
   * The number of entries returned on each page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The configuration details of the aggregate route.
   */
  data?: DescribeTransitRouteTableAggregationDetailResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
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

