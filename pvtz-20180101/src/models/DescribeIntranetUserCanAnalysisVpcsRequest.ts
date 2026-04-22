// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntranetUserCanAnalysisVpcsRequest extends $dara.Model {
  /**
   * @example
   * CLOUD
   */
  networkType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  queryTreeLevel?: number;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * 1204673843521685
   */
  vpcOwner?: number;
  /**
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

