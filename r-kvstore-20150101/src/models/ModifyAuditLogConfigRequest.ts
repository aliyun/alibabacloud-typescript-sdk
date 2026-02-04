// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the audit log feature. Default value: true. Valid values:
   * 
   * *   **true**: enables the audit log feature.
   * *   **false**: disables the audit log feature.
   * 
   * > If the instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html) or [read/write splitting architecture](https://help.aliyun.com/document_detail/62870.html), the audit log feature is enabled or disabled for both the data nodes and proxy nodes. You cannot separately enable the audit log feature for the data nodes or proxy nodes.
   * 
   * @example
   * true
   */
  dbAudit?: boolean;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The retention period of audit logs. Valid values: **1** to **365**. Unit: days.
   * 
   * > 
   * 
   * *   This parameter is required only when the **DbAudit** parameter is set to **true**.
   * 
   * *   The value of this parameter takes effect for all instances in the current region.
   * 
   * @example
   * 10
   */
  retention?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      dbAudit: 'DbAudit',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      retention: 'Retention',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbAudit: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      retention: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

