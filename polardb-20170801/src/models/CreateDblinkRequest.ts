// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDBLinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. The client generates the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and must not exceed 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f54a343f1a4233c1e7d1c5c******
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the source cluster for the DBLink.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query the list of PolarDB clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-a************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the DBLink.
   * 
   * - It must contain lowercase letters, and can also contain digits and underscores (_).
   * 
   * - It must start with a letter and end with a letter or a digit.
   * 
   * - It must be no more than 64 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * dblink_test
   */
  DBLinkName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the details of regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the source database.
   * 
   * > You can call the [DescribeDatabases](https://help.aliyun.com/document_detail/173558.html) operation to query information about databases in a PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb1
   */
  sourceDBName?: string;
  /**
   * @remarks
   * The account of the destination database.
   * 
   * > You can call the [DescribeAccounts](https://help.aliyun.com/document_detail/173549.html) operation to query the database accounts of a PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * testacc
   */
  targetDBAccount?: string;
  /**
   * @remarks
   * The ID of the destination cluster for the DBLink.
   * 
   * > - If the destination is a self-managed Oracle database that runs on an ECS instance, set this parameter to `null`.
   * >
   * > - You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/173433.html) operation to query the list of PolarDB clusters.
   * 
   * @example
   * pc-b************
   */
  targetDBInstanceName?: string;
  /**
   * @remarks
   * The name of the destination database.
   * 
   * > You can call the [DescribeDatabases](https://help.aliyun.com/document_detail/173558.html) operation to query information about databases in a PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb2
   */
  targetDBName?: string;
  /**
   * @remarks
   * The password for the destination database account.
   * 
   * This parameter is required.
   * 
   * @example
   * Test1111
   */
  targetDBPasswd?: string;
  /**
   * @remarks
   * The IP address of the self-managed Oracle database that runs on an ECS instance.
   * 
   * @example
   * 192.**.**.46
   */
  targetIp?: string;
  /**
   * @remarks
   * The port number of the self-managed Oracle database that runs on an ECS instance.
   * 
   * @example
   * 1521
   */
  targetPort?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * > You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the details of VPCs.
   * 
   * @example
   * vpc-bp1qpo0kug3a20qqe****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      DBLinkName: 'DBLinkName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sourceDBName: 'SourceDBName',
      targetDBAccount: 'TargetDBAccount',
      targetDBInstanceName: 'TargetDBInstanceName',
      targetDBName: 'TargetDBName',
      targetDBPasswd: 'TargetDBPasswd',
      targetIp: 'TargetIp',
      targetPort: 'TargetPort',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DBClusterId: 'string',
      DBLinkName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sourceDBName: 'string',
      targetDBAccount: 'string',
      targetDBInstanceName: 'string',
      targetDBName: 'string',
      targetDBPasswd: 'string',
      targetIp: 'string',
      targetPort: 'string',
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

