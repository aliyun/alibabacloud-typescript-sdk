// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancesForCloneRequest extends $dara.Model {
  clientToken?: string;
  connectionMode?: string;
  currentInstanceId?: string;
  DBInstanceClass?: string;
  DBInstanceId?: string;
  DBInstanceStatus?: string;
  DBInstanceType?: string;
  engine?: string;
  engineVersion?: string;
  expired?: string;
  instanceNetworkType?: string;
  nodeType?: string;
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  payType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  searchKey?: string;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  proxyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionMode: 'ConnectionMode',
      currentInstanceId: 'CurrentInstanceId',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceType: 'DBInstanceType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      expired: 'Expired',
      instanceNetworkType: 'InstanceNetworkType',
      nodeType: 'NodeType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchKey: 'SearchKey',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
      proxyId: 'proxyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionMode: 'string',
      currentInstanceId: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStatus: 'string',
      DBInstanceType: 'string',
      engine: 'string',
      engineVersion: 'string',
      expired: 'string',
      instanceNetworkType: 'string',
      nodeType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchKey: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
      proxyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

