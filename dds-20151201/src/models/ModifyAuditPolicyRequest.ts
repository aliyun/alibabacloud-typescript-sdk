// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the audit log request. Valid value: **Console**.
   * 
   * @example
   * Console
   */
  auditLogSwitchSource?: string;
  /**
   * @remarks
   * The status of audit logging. Valid values:
   * - **enable**: Enables audit logging.
   * - **disabled**: Disables audit logging.
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
  /**
   * @remarks
   * This parameter takes effect only in the V2_Standard edition (DAS Enterprise Edition NoSQL-compatible audit logs) and specifies the hot storage duration of audit logs. Valid values: 0 to 7. Unit: days.
   * 
   * @example
   * 7
   */
  hotStoragePeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The edition of audit logging. Valid values:
   * 
   * - **Trial**: Free Trial edition.
   * - **Standard**: Standard edition.
   * - **V2_Standard**: DAS Enterprise Edition (NoSQL-compatible) audit logs.
   * > - The default value is **Trial**. Starting from January 6, 2022, the Standard edition of audit logs is gradually rolled out across regions, and applications for the Free Trial edition are no longer accepted.
   * > - Starting from February 2026, DAS Enterprise Edition (NoSQL-compatible) audit logs are gradually rolled out across regions, and applications for the Standard edition are no longer accepted.
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * - In the Standard edition, this parameter specifies the retention period of audit logs. Valid values: 1 to 365. Default value: 30. Unit: days.
   * 
   * - In the V2_Standard edition (DAS Enterprise Edition NoSQL-compatible audit logs), this parameter specifies the cold storage duration of audit logs. Valid values: 30, 180, 365, 1095, and 1825. Unit: days.
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
      hotStoragePeriod: 'HotStoragePeriod',
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
      hotStoragePeriod: 'number',
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

