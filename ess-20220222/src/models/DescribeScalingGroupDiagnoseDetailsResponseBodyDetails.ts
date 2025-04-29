// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupDiagnoseDetailsResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * Item type for diagnostics. Possible values:
   * - AccountArrearage: Checks if the user\\"s account is in arrears.
   * - AccountNotEnoughBalance: Checks the account balance.
   * - ElasticStrength: Checks the inventory health of instance types corresponding to the scaling group configuration.
   * - VSwitch: Checks if the switch is available, for example, whether it has been deleted.
   * - SecurityGroup: Checks if the security group is available, for example, whether it has been deleted.
   * - KeyPair: Checks if the key pair is available, for example, whether it has been deleted.
   * - SlbBackendServerQuota: Checks if the number of ECS instances mounted to the default SLB group and virtual server group exceeds the quota.
   * - AlbBackendServerQuota: Checks if the number of ECS instances mounted to the ALB group exceeds the quota.
   * - NlbBackendServerQuota: Checks if the number of ECS instances mounted to the NLB group exceeds the quota.
   * 
   * @example
   * SecurityGroup
   */
  diagnoseType?: string;
  /**
   * @remarks
   * Error code of the diagnostic item. Possible values:
   * 
   * - VSwitchIdNotFound: The VSwitch does not exist.
   * 
   * - SecurityGroupNotFound: The security group does not exist.
   * 
   * - KeyPairNotFound: The key pair does not exist.
   * 
   * - SlbBackendServerQuotaExceeded: The number of ECS instances mounted on the backend of the SLB default group and virtual server group exceeds the quota.
   * 
   * - AlbBackendServerQuotaExceeded: The number of ECS instances mounted on the backend of the ALB group exceeds the quota.
   * 
   * - NlbBackendServerQuotaExceeded: The number of ECS instances mounted on the backend of the NLB group exceeds the quota.
   * 
   * - AccountArrearage: The account is in arrears.
   * 
   * - AccountNotEnoughBalance: The account balance is insufficient.
   * 
   * - ElasticStrengthAlert: The inventory health is poor.
   * 
   * @example
   * AccountArrearage
   */
  errorCode?: string;
  /**
   * @remarks
   * The resource ID corresponding to the diagnostic result.
   * 
   * @example
   * sg-280ih****
   */
  resourceId?: string;
  /**
   * @remarks
   * Status of the diagnostic item. Possible values:
   * 
   * - Normal: The diagnostic result is normal.
   * 
   * - Warn: The diagnostic result is a warning.
   * 
   * - Critical: The diagnostic result is critical.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      diagnoseType: 'DiagnoseType',
      errorCode: 'ErrorCode',
      resourceId: 'ResourceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnoseType: 'string',
      errorCode: 'string',
      resourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

