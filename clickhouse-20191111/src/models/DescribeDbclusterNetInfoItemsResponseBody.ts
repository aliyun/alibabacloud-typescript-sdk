// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems } from "./DescribeDbclusterNetInfoItemsResponseBodyNetInfoItems";


export class DescribeDBClusterNetInfoItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network type of the cluster. Only VPC is supported.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * Indicates whether Server Load Balancer (SLB) is activated in the VPC. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enableSLB?: boolean;
  /**
   * @remarks
   * The network information about the cluster.
   */
  netInfoItems?: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A23C87D-87DF-4DA0-A50E-CB13F4F7923D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      enableSLB: 'EnableSLB',
      netInfoItems: 'NetInfoItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      enableSLB: 'boolean',
      netInfoItems: DescribeDBClusterNetInfoItemsResponseBodyNetInfoItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.netInfoItems && typeof (this.netInfoItems as any).validate === 'function') {
      (this.netInfoItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

