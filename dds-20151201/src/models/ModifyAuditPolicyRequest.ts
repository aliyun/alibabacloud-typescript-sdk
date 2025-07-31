// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The request source for the audit log feature. Set the value to **Console**.
   * 
   * @example
   * Console
   */
  auditLogSwitchSource?: string;
  /**
   * @remarks
   * Specifies whether to enable the audit log feature. Valid values:
   * 
   * *   **enable**
   * *   **disabled**
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  auditStatus?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1785659e3f****
   */
  DBInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the audit log feature. Valid values:
   * 
   * *   **Trail**: free trial edition.
   * *   **Standard**: official edition.
   * 
   * > The default value is **Trail**. Starting from January 6, 2022, the official edition of the audit log feature has been launched in all regions, and the free trial edition of the feature can no longer be applied for. We recommend that you set this parameter to **Standard**.
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The log retention period. Valid values: 1 to 365 days. Default value: 30 days.
   * 
   * @example
   * 30
   */
  storagePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      auditLogSwitchSource: 'AuditLogSwitchSource',
      auditStatus: 'AuditStatus',
      DBInstanceId: 'DBInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      serviceType: 'ServiceType',
      storagePeriod: 'StoragePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditLogSwitchSource: 'string',
      auditStatus: 'string',
      DBInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      serviceType: 'string',
      storagePeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

