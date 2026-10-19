// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedClusterInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * The dedicated cluster ID. You can obtain the ID on the dedicated cluster information page in the ApsaraDB for MyBase console.
   * > To specify multiple IDs, separate them with commas (,).
   * 
   * @example
   * dhg-5f2v98840ioq****
   */
  clusterId?: string;
  /**
   * @remarks
   * The host ID in the dedicated cluster. You can call [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/200944.html) to query the host ID.
   * > To specify multiple IDs, separate them with commas (,).
   * 
   * @example
   * ch-t4n664a9mal4c****
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The database engine. Set the value to **Redis**.
   * 
   * @example
   * Redis
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version. Set the value to **5.0**.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The instance ID.
   * > The instance must be created in a dedicated cluster. For more information, see [ApsaraDB for MyBase](https://help.aliyun.com/document_detail/141455.html).
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type of the instance endpoint. Valid values:
   * * **0**: Internet.
   * * **1**: Classic network.
   * * **2**: Virtual Private Cloud (VPC).
   * 
   * @example
   * 2
   */
  instanceNetType?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * * **0**: Creating.
   * * **1**: Running.
   * * **3**: Deleting.
   * * **5**: Changing specifications.
   * * **6**: Migrating.
   * * **7**: Restoring from backup.
   * * **8**: Switching.
   * * **9**: Deleting expired data.
   * 
   * @example
   * 1
   */
  instanceStatus?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than **0** and less than or equal to the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) to query region IDs.
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
   * The zone ID. You can call [DescribeZones](https://help.aliyun.com/document_detail/473764.html) to query zone IDs.
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

