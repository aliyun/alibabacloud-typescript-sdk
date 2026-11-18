// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairAIGatewayInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * - **PostPaid**: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The expiration status of the instance. Valid values:
   * 
   * * **true**: The instance has expired.
   * * **false**: The instance has not expired.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The IDs of the instances to query.
   * > Separate multiple instance IDs with commas (,). You can specify up to 30 instance IDs in a single request.
   * 
   * @example
   * tg-2zezxszhcgatnx****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * * **Normal**: The instance is running.
   * * **Creating**: The instance is being created.
   * * **Changing**: The instance is being modified.
   * * **Inactive**: The instance is disabled.
   * * **Flushing**: The instance data is being purged.
   * * **Released**: The instance is released.
   * * **Transforming**: The instance is being transformed.
   * * **Migrating**: The instance is being migrated.
   * * **BackupRecovering**: The instance is recovering from a backup.
   * * **MinorVersionUpgrading**: The minor version of the instance is being upgraded.
   * * **NetworkModifying**: The network of the instance is being modified.
   * * **SSLModifying**: The SSL configuration of the instance is being modified.
   * * **MajorVersionUpgrading**: A major engine version upgrade is in progress. The instance remains accessible.
   * 
   * > For more information about instance statuses and impacts, see [Instance statuses and impacts](https://help.aliyun.com/document_detail/200740.html).
   * 
   * @example
   * Normal
   */
  instanceStatus?: string;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy search is supported for instance names or instance IDs.
   * 
   * @example
   * apitest
   */
  searchKey?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC. You can call the [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html) operation to query the vSwitch ID.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-bp1nme44gek34slfc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      expired: 'Expired',
      instanceIds: 'InstanceIds',
      instanceStatus: 'InstanceStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      searchKey: 'SearchKey',
      securityToken: 'SecurityToken',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      expired: 'string',
      instanceIds: 'string',
      instanceStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      searchKey: 'string',
      securityToken: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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

