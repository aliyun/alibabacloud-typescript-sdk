// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckRoleRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the role. Valid values:
   * 
   * *   EcsRole: a role with the permissions to access Elastic Compute Service (ECS) resources
   * *   CsgRole: a role with the permissions to perform Cloud Storage Gateway (CSG) backup
   * *   NasRole: a role with the permissions to perform NAS backup
   * *   OssRole: a role with the permissions to perform Object Storage Service (OSS) backup
   * *   UdmRole: a role with the permissions to perform ECS instance backup
   * *   VMwareLocalRole: a role with the permissions to back up on-premises VMware virtual machines (VMs)
   * *   VMwareCloudRole: a role with the permissions to back up VMs deployed on Alibaba Cloud VMware Service (ACVS)
   * *   EcsBackupRole: a role with the permissions to perform ECS backup
   * *   OtsRole: a role with the permissions to perform Tablestore backup
   * *   CrossAccountRole: a role with the permissions to perform cross-account backup
   * 
   * @example
   * OssRole
   */
  checkRoleType?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
   * 
   * @example
   * BackupRole
   */
  crossAccountRoleName?: string;
  /**
   * @remarks
   * The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.
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

