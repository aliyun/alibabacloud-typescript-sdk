// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAuditPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the request. Set this parameter to **Console**.
   * 
   * @example
   * Console
   */
  auditLogSwitchSource?: string;
  /**
   * @remarks
   * The status of the audit log. Valid values:
   * 
   * - **enable**: Enables the audit log feature.
   * 
   * - **disabled**: Disables the audit log feature.
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
   * This parameter is effective only for the **V2_Standard** (DAS Enterprise Edition (NoSQL Compatible) audit log) edition. It specifies the hot storage duration for the audit log. Valid values: 0 to 7. Unit: days.
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
   * The edition of the audit log. Valid values:
   * 
   * - **Trial**: Trial Edition.
   * 
   * - **Standard**: Standard Edition.
   * 
   * - **V2_Standard**: DAS Enterprise Edition (NoSQL Compatible) audit log.
   * 
   * > * The default value of this parameter is **Trial**. Starting from January 6, 2022, the Standard edition is being rolled out across regions, and new applications for the Trial edition are no longer accepted.
   * >
   * > * Starting from February 2026, the DAS Enterprise Edition (NoSQL Compatible) audit log will be rolled out across regions, and new applications for the Standard edition will no longer be accepted.
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * - For the **Standard** edition, this parameter specifies the retention period for the audit log. Valid values: 1 to 365. The default value is 30. Unit: days.
   * 
   * - For the **V2_Standard** (DAS Enterprise Edition (NoSQL Compatible) audit log) edition, this parameter specifies the cold storage duration for the audit log. Valid values: 30, 180, 365, 1095, and 1825. Unit: days.
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

