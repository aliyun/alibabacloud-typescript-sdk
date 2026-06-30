// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomRoutingEndpointTrafficPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA) instance for which you want to query traffic policies.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The IP address of the traffic policy destination.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The ID of the endpoint group for which you want to query traffic policies.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The ID of the endpoint for which you want to query traffic policies.
   * 
   * @example
   * ep-bp16jdc00bhe97sr5****
   */
  endpointId?: string;
  /**
   * @remarks
   * The ID of the listener for which you want to query traffic policies.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **ap-southeast-1**.
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
      address: 'Address',
      endpointGroupId: 'EndpointGroupId',
      endpointId: 'EndpointId',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      address: 'string',
      endpointGroupId: 'string',
      endpointId: 'string',
      listenerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

