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

