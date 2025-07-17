// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingGroupDiagnoseDetailsResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * The type of the diagnostic item. Valid values:
   * 
   * *   AccountArrearage: Checks whether your Alibaba Cloud account has overdue payments.
   * *   AccountNotEnoughBalance: Checks whether the balance of your Alibaba Cloud account is sufficient.
   * *   ElasticStrength: Checks whether the instance types that are specified in the scaling configuration are sufficient.
   * *   VSwitch: Checks whether the vSwitch is available. If the specified vSwitch is deleted, specify an existing vSwitch for the scaling group.
   * *   SecurityGroup: Checks whether the security group is available. If the specified security group is deleted, specify an existing security group for the scaling group.
   * *   KeyPair: Checks whether the key pair is available. If the specified key pair is deleted, specify another key pair for the scaling group.
   * *   SlbBackendServerQuota: Checks whether the number of ECS instances that are added to the default server group and the vServer groups of the SLB instances associated with the scaling group has reached the upper limit.
   * *   AlbBackendServerQuota: Checks whether the number of ECS instances that are attached to the ALB instances of the scaling group has reached the upper limit.
   * *   NlbBackendServerQuota: Checks whether the number of ECS instances that are attached to the NLB instances of the scaling group has reached the upper limit.
   * 
   * @example
   * SecurityGroup
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
   * *   AccountArrearage: Your account has an overdue payment.
   * *   AccountNotEnoughBalance: The balance of your Alibaba Cloud account is insufficient.
   * *   ElasticStrengthAlert: The inventory levels are lower than required.
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

export class DescribeScalingGroupDiagnoseDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostic reports.
   */
  details?: DescribeScalingGroupDiagnoseDetailsResponseBodyDetails[];
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 688B18B8-FB1E-42EB-A1ED-7F55B090****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeScalingGroupDiagnoseDetailsResponseBodyDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

