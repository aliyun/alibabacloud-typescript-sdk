// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated cluster. You can view the dedicated cluster ID on the Dedicated Clusters page in the ApsaraDB for MyBase console.
   * 
   * > Separate multiple IDs with commas (,).
   * 
   * @example
   * dhg-5f2v98840ioq****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the host in the dedicated cluster. You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/200944.html) operation to query the host ID.
   * 
   * > Separate multiple IDs with commas (,).
   * 
   * @example
   * ch-t4n664a9mal4c****
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The database engine of the instance. Set the value to **Redis**.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance. Set the value to **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > The instance must be created by using a dedicated cluster. For more information, see [What is ApsaraDB for MyBase?](https://help.aliyun.com/document_detail/141455.html)
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   **0**: Internet
   * *   **1**: classic network
   * *   **2**: Virtual Private Cloud (VPC)
   * 
   * @example
   * 2
   */
  instanceNetType?: string;
  /**
   * @remarks
   * The state of the instance. Valid values:
   * 
   * *   **0**: The instance is being created.
   * *   **1**: The instance is running.
   * *   **3**: The instance is being deleted.
   * *   **5**: The configurations of the instance are being changed.
   * *   **6**: The instance is being migrated.
   * *   **7**: The instance is being restored from a backup.
   * *   **8**: A master-replica switchover is in progress.
   * *   **9**: Expired data of the instance is being deleted.
   * 
   * @example
   * 1
   */
  instanceStatus?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The zone ID of the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dedicatedHostName: 'DedicatedHostName',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      instanceId: 'InstanceId',
      instanceNetType: 'InstanceNetType',
      instanceStatus: 'InstanceStatus',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dedicatedHostName: 'string',
      engine: 'string',
      engineVersion: 'string',
      instanceId: 'string',
      instanceNetType: 'string',
      instanceStatus: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

