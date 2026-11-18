// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the audit log feature. Valid values:
   * * **true**: enables the feature. This is the default value.
   * * **false**: disables the feature.
   * 
   * > If the instance uses the [cluster](https://help.aliyun.com/document_detail/52228.html) or [read/write splitting](https://help.aliyun.com/document_detail/62870.html) architecture, the audit logs of data nodes and proxy nodes are enabled or disabled at the same time. You cannot enable the audit logs for data nodes or proxy nodes separately.
   * 
   * @example
   * true
   */
  dbAudit?: boolean;
  /**
   * @remarks
   * The ID of the instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the instance ID.
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
   * > * The setting of this parameter takes effect on all instances in the current region.
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

