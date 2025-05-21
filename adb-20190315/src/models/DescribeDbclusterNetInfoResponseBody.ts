// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterNetInfoResponseBodyItems } from "./DescribeDbclusterNetInfoResponseBodyItems";


export class DescribeDBClusterNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network type of the cluster.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * The queried network information about the cluster.
   */
  items?: DescribeDBClusterNetInfoResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterNetworkType: 'ClusterNetworkType',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterNetworkType: 'string',
      items: DescribeDBClusterNetInfoResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

