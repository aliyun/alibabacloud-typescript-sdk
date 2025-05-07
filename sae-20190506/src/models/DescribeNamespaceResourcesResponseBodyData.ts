// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of applications.
   * 
   * @example
   * 1
   */
  appCount?: number;
  /**
   * @remarks
   * The region to which the namespace belongs.
   * 
   * @example
   * cn-shanghai
   */
  belongRegion?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * decs
   */
  description?: string;
  /**
   * @remarks
   * The ID of the jump server application.
   * 
   * @example
   * 5ec46468-6b26-4a3c-9f7c-bf88761a****
   */
  jumpServerAppId?: string;
  /**
   * @remarks
   * The IP address of the jump server.
   * 
   * @example
   * 120.78.XXX.XX
   */
  jumpServerIp?: string;
  /**
   * @remarks
   * The ID of the change order.
   * 
   * @example
   * afedb3c4-63f8-4a3d-aaa3-2c30363f****
   */
  lastChangeOrderId?: string;
  /**
   * @remarks
   * Indicates whether a change order is being executed in the namespace. Valid values:
   * 
   * *   **true**: indicates that a change order is being executed in the namespace.
   * *   **false**: indicates that no change orders are being executed in the namespace.
   * 
   * @example
   * true
   */
  lastChangeOrderRunning?: boolean;
  /**
   * @remarks
   * The status of the latest change order. Valid values:
   * 
   * *   **READY**: The change order is ready.
   * *   **RUNNING**: The change order is being executed.
   * *   **SUCCESS**: The change order was executed.
   * *   **FAIL**: The change order could not be executed.
   * *   **ABORT**: The change order was terminated.
   * *   **WAIT_BATCH_CONFIRM**: The change order is pending execution. You must manually confirm the release batch.
   * *   **AUTO_BATCH_WAIT**: The change order is pending execution. SAE will automatically confirm the release batch.
   * *   **SYSTEM_FAIL**: A system exception occurred.
   * *   **WAIT_APPROVAL**: The change order is pending approval.
   * *   **APPROVED**: The change order is approved and is pending execution.
   * 
   * @example
   * SUCCESS
   */
  lastChangeOrderStatus?: string;
  /**
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-shangha:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * Indicates whether the notification of a change order is expired. Valid values:
   * 
   * *   **true**: indicates that the notification is expired.
   * *   **false**: indicates that the notification is not expired.
   * 
   * @example
   * true
   */
  notificationExpired?: boolean;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the tenant in the SAE namespace.
   * 
   * @example
   * 838cad95-973f-48fe-830b-2a8546d7****
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * test@aliyun.com
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * test
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * test
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      appCount: 'AppCount',
      belongRegion: 'BelongRegion',
      description: 'Description',
      jumpServerAppId: 'JumpServerAppId',
      jumpServerIp: 'JumpServerIp',
      lastChangeOrderId: 'LastChangeOrderId',
      lastChangeOrderRunning: 'LastChangeOrderRunning',
      lastChangeOrderStatus: 'LastChangeOrderStatus',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      notificationExpired: 'NotificationExpired',
      securityGroupId: 'SecurityGroupId',
      tenantId: 'TenantId',
      userId: 'UserId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCount: 'number',
      belongRegion: 'string',
      description: 'string',
      jumpServerAppId: 'string',
      jumpServerIp: 'string',
      lastChangeOrderId: 'string',
      lastChangeOrderRunning: 'boolean',
      lastChangeOrderStatus: 'string',
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      notificationExpired: 'boolean',
      securityGroupId: 'string',
      tenantId: 'string',
      userId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

