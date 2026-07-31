// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The cluster ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The cluster ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The resource group name.
   * > If this parameter is not specified, information about all resource groups in the specified cluster is returned by default.
   * 
   * @example
   * test_group
   */
  groupName?: string;
  /**
   * @remarks
   * The resource group type. Valid values:
   * - **Interactive**
   * - **Job**
   * > For more information about resource groups in Data Lakehouse Edition, see [Resource group overview](https://help.aliyun.com/document_detail/428610.html).
   * 
   * @example
   * Job
   */
  groupType?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612393.html) operation to query the region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      groupName: 'string',
      groupType: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

