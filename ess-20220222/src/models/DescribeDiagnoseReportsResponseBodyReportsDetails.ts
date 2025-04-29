// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnoseReportsResponseBodyReportsDetails extends $dara.Model {
  /**
   * @remarks
   * The type of the diagnostic item. Valid values:
   * 
   * *   AccountArrearage: Checks whether your Alibaba Cloud account has overdue payments.
   * *   AccountNotEnoughBalance: Checks whether the balance of your Alibaba Cloud account at the China site (aliyun.com) is greater than or equal to CNY 100.
   * *   ElasticStrength: Checks whether the instance types that are specified in the scaling configuration are sufficient.
   * *   VSwitch: Checks whether a specific vSwitch can work as expected. For example, if a vSwitch is deleted, the vSwitch cannot provide services and an exception occurs.
   * *   SecurityGroup: Checks whether a specific security group can work as expected. For example, if a security group is deleted, the security group cannot provide services and an exception occurs.
   * *   KeyPair: Checks whether the key pair is available. If the specified key pair is deleted, specify another key pair for the scaling group.
   * *   SlbBackendServerQuota: Checks whether the number of ECS instances that are added to the default server group and the vServer groups of the SLB instances associated with the scaling group has reached the upper limit.
   * *   AlbBackendServerQuota: Checks whether the number of ECS instances that are added to the backend server groups of the ALB instances associated with the scaling group has reached the upper limit.
   * *   NlbBackendServerQuota: Checks whether the number of ECS instances that are added to the backend server groups of the NLB instances associated with the scaling group has reached the upper limit.
   * 
   * @example
   * AccountArrearage
   */
  diagnoseType?: string;
  /**
   * @remarks
   * The error code of the diagnostic item. Valid values:
   * 
   * *   VSwitchIdNotFound: The vSwitch does not exist.
   * *   SecurityGroupNotFound: The security group does not exist.
   * *   KeyPairNotFound: The key pair does not exist.
   * *   SlbBackendServerQuotaExceeded: The number of ECS instances that are added to the default server group and the vServer groups of the SLB instances associated with the scaling group has reached the upper limit.
   * *   AlbBackendServerQuotaExceeded: The number of ECS instances that are attached to the ALB instances of the scaling group has reached the upper limit.
   * *   NlbBackendServerQuotaExceeded: The number of ECS instances that are attached to the NLB instances of the scaling group has reached the upper limit.
   * *   AccountArrearage: Your account has overdue payments.
   * *   AccountNotEnoughBalance: The balance of your Alibaba Cloud account is less than CNY 100.
   * *   ElasticStrengthAlert: The inventory levels are lower than expected.
   * 
   * @example
   * VSwitchIdNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * sg-280ih****
   */
  resourceId?: string;
  /**
   * @remarks
   * The status of the diagnostic item. Valid values:
   * 
   * *   Normal: The diagnostic result is normal.
   * *   Warn: The diagnostic result is warning.
   * *   Critical: The diagnostic result is critical.
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

