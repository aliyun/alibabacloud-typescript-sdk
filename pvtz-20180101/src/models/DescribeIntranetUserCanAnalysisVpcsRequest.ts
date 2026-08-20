// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntranetUserCanAnalysisVpcsRequest extends $dara.Model {
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * CLOUD
   */
  networkType?: string;
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
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The level in the query hierarchy. For example, you can query for VPCs that belong to a specific cloud account.
   * 
   * @example
   * 1
   */
  queryTreeLevel?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The owner of the VPC.
   * 
   * @example
   * 1204673843521685
   */
  vpcOwner?: number;
  /**
   * @remarks
   * The VPC type.
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'NetworkType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryTreeLevel: 'QueryTreeLevel',
      regionId: 'RegionId',
      vpcOwner: 'VpcOwner',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryTreeLevel: 'number',
      regionId: 'string',
      vpcOwner: 'number',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

