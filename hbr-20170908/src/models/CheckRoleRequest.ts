// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The role type. Valid values:
   * - EcsRole: access permissions for ECS resources
   * - CsgRole: permissions to back up Cloud Storage Gateway resources
   * - NasRole: permissions to back up NAS resources
   * - OssRole: permissions to back up OSS resources
   * - UdmRole: permissions to back up entire ECS instances
   * - VMwareLocalRole: permissions to back up on-premises VMware virtual machines
   * - VMwareCloudRole: permissions to back up cloud-based VMware virtual machines
   * - EcsBackupRole: permissions for ECS backup
   * - OtsRole: permissions to back up OTS resources
   * - CrossAccountRole: permissions for cross-account backup
   * 
   * @example
   * OssRole
   */
  checkRoleType?: string;
  /**
   * @remarks
   * The name of the RAM role created in the source account for cross-account backup managed by the current account.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The ID of the source account for cross-account backup managed by the current account.
   * 
   * @example
   * 158975xxxxx4625
   */
  crossAccountUserId?: number;
  static names(): { [key: string]: string } {
    return {
      checkRoleType: 'CheckRoleType',
      crossAccountRoleName: 'CrossAccountRoleName',
      crossAccountUserId: 'CrossAccountUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRoleType: 'string',
      crossAccountRoleName: 'string',
      crossAccountUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

