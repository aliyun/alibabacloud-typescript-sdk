// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewaysRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL with which the SAG instance is associated.
   * 
   * @example
   * acl-xhwhyuo43l0n****
   */
  aclIds?: string;
  /**
   * @remarks
   * The ID of the CCN instance with which the SAG instance is associated.
   * 
   * @example
   * ccn-bxuau4ezctt****
   */
  associatedCcnId?: string;
  /**
   * @remarks
   * The name of the associated CCN instance.
   * 
   * The name must be 2 to 100 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * ccn
   */
  associatedCcnName?: string;
  /**
   * @remarks
   * The business status of the SAG instance. Valid values:
   * 
   * *   **Normal**: running as expected.
   * *   **Arrearage**: locked due to overdue payments.
   * 
   * @example
   * Normal
   */
  businessState?: string;
  /**
   * @remarks
   * Specifies whether the SAG instance can be associated with a quality of service (QoS) policy. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * Specifies whether to query SAG instances that cannot be associated with QoS policies.
   * 
   * @example
   * false
   */
  canAssociateQos?: boolean;
  /**
   * @remarks
   * The model of SAG device. Valid values:
   * 
   * *   **sag-1000**
   * *   **sag-100wm**
   * 
   * @example
   * sag-100wm
   */
  hardwareType?: string;
  /**
   * @remarks
   * The type of the SAG instance. Valid values:
   * 
   * *   **software**: an SAG app instance
   * *   **hardware**: an SAG CPE instance
   * 
   * @example
   * hardware
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the SAG instance.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**. Valid values: **1** to **50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the SAG instance belongs.
   * 
   * @example
   * rg-acfm2iu4fnc****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * @example
   * sag32a3****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The ID of the SAG instance.
   * 
   * @example
   * sag-6z21oj0vjjrx6s****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The IDs of the SAG instances.
   */
  smartAGIds?: string[];
  /**
   * @remarks
   * The software version of the SAG device.
   * 
   * @example
   * 2.3.0.0
   */
  softwareVersion?: string;
  /**
   * @remarks
   * The status of the SAG instance. Valid values:
   * 
   * *   **Ordered**: Your order has been placed.
   * *   **Delivered**: Your order has been shipped.
   * *   **Received**: You have received the SAG device.
   * *   **Returning**: The order is being returned.
   * *   **Active**: The SAG device is active.
   * *   **init**: The SAG device is being initialized.
   * *   **Offline**: The SAG device is disconnected.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the ACL rule.
   * 
   * Specifies that the SAG instance which is not associated with the ACL is queried. Separate ACL IDs with commas (,).
   * 
   * @example
   * acl-sjfbgngj****
   */
  unboundAclIds?: string;
  /**
   * @remarks
   * The version filter. Valid values:
   * 
   * *   **greater**: later than the current version
   * *   **less**: earlier than the current version
   * *   **equals**: equal to the current version
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

