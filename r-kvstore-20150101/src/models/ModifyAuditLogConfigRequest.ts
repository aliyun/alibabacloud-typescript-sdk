// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable audit logging. Valid values:
   * * **true** (default): Enabled.
   * * **false**: Disabled.
   * 
   * > If the instance uses the [cluster architecture](https://help.aliyun.com/document_detail/52228.html) or [read/write splitting architecture](https://help.aliyun.com/document_detail/62870.html), audit logs for data nodes and proxy nodes are enabled or disabled at the same time. You cannot enable them separately.
   * 
   * @example
   * true
   */
  dbAudit?: boolean;
  /**
   * @remarks
   * The instance ID. You can call [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) to query the instance ID.
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
   * The number of days for which audit logs are retained. Valid values: **1** to **365**.
   * > * This parameter is required when **DbAudit** is set to **true**.
   * > * This parameter takes effect on all instances in the current region.
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

