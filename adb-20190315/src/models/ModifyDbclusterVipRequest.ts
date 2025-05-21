// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterVipRequest extends $dara.Model {
  /**
   * @remarks
   * The internal or public endpoint for which the server certificate needs to be created or updated.
   * 
   * @example
   * am-2ze8mbuai974s4y2500000169.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-2ze8mbuai97*****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1at5ze0t5u3xtqn****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1aadw9k19x6cis9****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

