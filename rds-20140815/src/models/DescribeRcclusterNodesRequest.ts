// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCClusterNodesRequest extends $dara.Model {
  /**
   * @example
   * c919424d85a644078ab1575c3a02c****
   */
  clusterId?: string;
  /**
   * @example
   * rcnpf5e3ee4a65104cf0801f94850d37****
   */
  nodePoolId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @example
   * vpc-2zet5c7111r33zbie****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodePoolId: 'NodePoolId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodePoolId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

