// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEndpointsResponseBodyDataEndpoints } from "./DescribeEndpointsResponseBodyDataEndpoints";


export class DescribeEndpointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the endpoints.
   */
  endpoints?: DescribeEndpointsResponseBodyDataEndpoints[];
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   **VPC**
   * *   **PUBLIC**
   * 
   * @example
   * VPC
   */
  instanceNetworkType?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'Endpoints',
      instanceNetworkType: 'InstanceNetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': DescribeEndpointsResponseBodyDataEndpoints },
      instanceNetworkType: 'string',
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

