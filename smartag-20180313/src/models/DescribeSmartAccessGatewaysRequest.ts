// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewaysRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the access control instance attached to the Smart Access Gateway instance.
   * 
   * @example
   * acl-xhwhyuo43l0n****
   */
  aclIds?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Connect Network (CCN) attached to the Smart Access Gateway instance.
   * 
   * @example
   * ccn-bxuau4ezctt****
   */
  associatedCcnId?: string;
  /**
   * @remarks
   * The name of the associated Cloud Connect Network (CCN) instance. The name must be 2 to 100 characters in length. It must start with a letter or a Chinese character, and can contain digits, underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * ccn
   */
  associatedCcnName?: string;
  /**
   * @remarks
   * The service status of the Smart Access Gateway instance. Valid values:
   * 
   * - **Normal**: Normal.
   * - **Arrearage**: Locked due to overdue payment.
   * 
   * @example
   * Normal
   */
  businessState?: string;
  /**
   * @remarks
   * Specifies whether the Smart Access Gateway instance can be associated with a quality of service (QoS) policy instance. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * This parameter is used to query Smart Access Gateway instances based on whether they can be associated with a QoS policy instance.
   * 
   * @example
   * false
   */
  canAssociateQos?: boolean;
  /**
   * @remarks
   * The device specification of the Smart Access Gateway device. Valid values:
   * 
   * - **sag-1000**.
   * - **sag-100wm**.
   * 
   * @example
   * sag-100wm
   */
  hardwareType?: string;
  /**
   * @remarks
   * The type of the Smart Access Gateway instance. Valid values:
   * 
   * - **software**: SAG app instance.
   * - **hardware**: Smart Access Gateway hardware instance.
   * 
   * @example
   * hardware
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the Smart Access Gateway instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the Smart Access Gateway instance belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The serial number of the Smart Access Gateway device.
   * 
   * @example
   * sag32a3****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway.
   * 
   * @example
   * sag-6z21oj0vjjrx6s****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The list of Smart Access Gateway instance IDs.
   */
  smartAGIds?: string[];
  /**
   * @remarks
   * The software version running on the Smart Access Gateway device.
   * 
   * @example
   * 2.3.0.0
   */
  softwareVersion?: string;
  /**
   * @remarks
   * The status of the Smart Access Gateway instance. Valid values:
   * 
   * - **Ordered**: Ordered.
   * - **Delivered**: Delivered.
   * - **Received**: Received.
   * - **Returning**: Returning.
   * - **Active**: Active.
   * - **Init**: Initializing.
   * - **Offline**: Offline.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the access control instance. This parameter is used to query Smart Access Gateway instances that are not associated with the specified access control instance. Separate multiple access control instance IDs with commas (,).
   * 
   * @example
   * acl-sjfbgngj****
   */
  unboundAclIds?: string;
  /**
   * @remarks
   * The version filter. Valid values:
   * 
   * - **greater**: Greater than the current version.
   * - **less**: Less than the current version.
   * - **equals**: Equal to the current version.
   * 
   * @example
   * equals
   */
  versionComparator?: string;
  static names(): { [key: string]: string } {
    return {
      aclIds: 'AclIds',
      associatedCcnId: 'AssociatedCcnId',
      associatedCcnName: 'AssociatedCcnName',
      businessState: 'BusinessState',
      canAssociateQos: 'CanAssociateQos',
      hardwareType: 'HardwareType',
      instanceType: 'InstanceType',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serialNumber: 'SerialNumber',
      smartAGId: 'SmartAGId',
      smartAGIds: 'SmartAGIds',
      softwareVersion: 'SoftwareVersion',
      status: 'Status',
      unboundAclIds: 'UnboundAclIds',
      versionComparator: 'VersionComparator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclIds: 'string',
      associatedCcnId: 'string',
      associatedCcnName: 'string',
      businessState: 'string',
      canAssociateQos: 'boolean',
      hardwareType: 'string',
      instanceType: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serialNumber: 'string',
      smartAGId: 'string',
      smartAGIds: { 'type': 'array', 'itemType': 'string' },
      softwareVersion: 'string',
      status: 'string',
      unboundAclIds: 'string',
      versionComparator: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.smartAGIds)) {
      $dara.Model.validateArray(this.smartAGIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

