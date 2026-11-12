// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. This operation is supported only for clusters of specific categories. MySQL Normal and Exclusive clusters are not supported. You can call the DescribeDBClusters operation to query the cluster category before you call this operation. Note: This operation is supported only for clusters of specific categories. MySQL Normal and Exclusive clusters are not supported. Before calling this operation, call DescribeDBClusters to confirm the cluster category.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-*************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to switch existing endpoints. Valid values:
   * - **NONE**: Does not switch existing endpoints.
   * - **ALL**: Switches existing endpoints.
   * 
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  existedEndpointSwitchType?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specified VPC ID.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The specified vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      existedEndpointSwitchType: 'ExistedEndpointSwitchType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      existedEndpointSwitchType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
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

