// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleoutApplicationWithNewInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that you want to scale out. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * @example
   * e370c17f-*****-3df0721a327
   */
  appId?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. This parameter takes effect only when the InstanceChargeType parameter is set to PrePaid. Valid values:
   * 
   * *   true: enables auto-renewal.
   * *   false: does not enable auto-renewal. This is the default value.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Valid values:
   * 
   * *   If the InstanceChargePeriodUnit parameter is set to Week, the valid values of the AutoRenewPeriod parameter are 1, 2, and 3.
   * *   If the InstanceChargePeriodUnit parameter is set to Month, the valid values of the AutoRenewPeriod parameter are 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The ID of the cluster to which you want to add ECS instances. If the application and application instance group for the scale-out are specified, this parameter is ignored.
   * 
   * @example
   * e37**********-33df0721a327
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the instance group that you want to scale out. You can call the ListDeployGroup operation to query the group ID. For more information, see [ListDeployGroup](https://help.aliyun.com/document_detail/62077.html).
   * 
   * @example
   * e37**********-33df0721a327
   */
  groupId?: string;
  /**
   * @remarks
   * The duration of the subscription. The unit of the subscription duration is specified by the InstanceChargePeriodUnit parameter. This parameter takes effect only when the InstanceChargeType parameter is set to PrePaid.
   * 
   * *   If the InstanceChargePeriodUnit parameter is set to Week, the valid values of the InstanceChargePeriod parameter are 1, 2, 3, and 4.
   * *   If the InstanceChargePeriodUnit parameter is set to Month, the valid values of the InstanceChargePeriod parameter are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  instanceChargePeriod?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * *   Week: billed on a weekly basis.
   * *   Month: billed on a monthly basis. This is the default value.
   * 
   * @example
   * Month
   */
  instanceChargePeriodUnit?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go. This is the default value.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The number of instances to be added for the scale-out.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  scalingNum?: number;
  /**
   * @remarks
   * The instance reclaim mode of the scaling group. Valid values:
   * 
   * *   recycle: economical mode
   * *   release: release mode
   * 
   * For more information about how to remove instances from a specified scaling group, see [RemoveInstances](https://help.aliyun.com/document_detail/25955.html).
   * 
   * @example
   * release
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the ECS instance launch template. You can call the DescribeLaunchTemplates operation to query the launch template ID. For more information, see [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html).
   * 
   * @example
   * lt-****hy9s2
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the existing ECS instance used for the scale-out. If this parameter is specified, the specifications and configurations of the specified ECS instance are used as a template to purchase new instances.
   * 
   * @example
   * i-28wt4****
   */
  templateInstanceId?: string;
  /**
   * @remarks
   * The version of the ECS instance launch template. You can call the DescribeLaunchTemplateVersions operation to query the launch template version. For more information, see [DescribeLaunchTemplateVersions](https://help.aliyun.com/document_detail/73761.html).
   * 
   * > If you set this parameter to `-1`, the default launch template version is used.
   * 
   * @example
   * -1
   */
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clusterId: 'ClusterId',
      groupId: 'GroupId',
      instanceChargePeriod: 'InstanceChargePeriod',
      instanceChargePeriodUnit: 'InstanceChargePeriodUnit',
      instanceChargeType: 'InstanceChargeType',
      scalingNum: 'ScalingNum',
      scalingPolicy: 'ScalingPolicy',
      templateId: 'TemplateId',
      templateInstanceId: 'TemplateInstanceId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clusterId: 'string',
      groupId: 'string',
      instanceChargePeriod: 'number',
      instanceChargePeriodUnit: 'string',
      instanceChargeType: 'string',
      scalingNum: 'number',
      scalingPolicy: 'string',
      templateId: 'string',
      templateInstanceId: 'string',
      templateVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

