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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * >  This is a reserved parameter.
   * 
   * @example
   * None
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

