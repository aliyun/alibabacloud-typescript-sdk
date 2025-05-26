// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNetInfoResponseBodyItems } from "./DescribeClusterNetInfoResponseBodyItems";


export class DescribeClusterNetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The network type of the cluster. Only the Virtual Private Cloud (VPC) network type is supported. **VPC** is returned.
   * 
   * @example
   * VPC
   */
  clusterNetworkType?: string;
  /**
   * @remarks
   * The queried network information about the cluster.
   */
  items?: DescribeClusterNetInfoResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69A29B65-CD0C-52B1-BE42-8B454569747F
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
      items: DescribeClusterNetInfoResponseBodyItems,
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

