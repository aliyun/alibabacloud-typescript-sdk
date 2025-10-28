// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Set the value to true if scale-outs are allowed.
   * 
   * @example
   * true
   */
  acceptEULA?: boolean;
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 74ee****-db65-4322-a1f6-bcb60e5b****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance group to which the application is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * 8123db90-880f-486f-****-************
   */
  groupId?: string;
  /**
   * @remarks
   * The relationship among the conditions that trigger a scale-in.
   * 
   * *   OR: one of the conditions
   * *   AND: all conditions
   * 
   * @example
   * "OR"
   */
  inCondition?: string;
  /**
   * @remarks
   * The CPU utilization that triggers a scale-in.
   * 
   * @example
   * 50
   */
  inCpu?: number;
  /**
   * @remarks
   * The duration in which the metric threshold is exceeded. Unit: minutes.
   * 
   * @example
   * 50
   */
  inDuration?: number;
  /**
   * @remarks
   * Specifies whether to allow scale-ins.
   * 
   * *   true: allows scale-ins.
   * *   false: does not allow scale-ins.
   * 
   * @example
   * true
   */
  inEnable?: boolean;
  /**
   * @remarks
   * The minimum number of instances that must be retained in each group when a scale-in is performed.
   * 
   * @example
   * 3
   */
  inInstanceNum?: number;
  /**
   * @remarks
   * The system load that triggers a scale-in.
   * 
   * @example
   * 50
   */
  inLoad?: number;
  /**
   * @remarks
   * The minimum service latency that triggers a scale-in. The lower limit is 0. Unit: milliseconds.
   * 
   * @example
   * 50
   */
  inRT?: number;
  /**
   * @remarks
   * The number of instances that are removed during each scale-in.
   * 
   * @example
   * 1
   */
  inStep?: number;
  /**
   * @remarks
   * The key pair that is used to log on to the instance. This parameter takes effect only if you choose to create instances based on the specifications of an existing instance during a scale-out.
   * 
   * @example
   * "tdy218"
   */
  keyPairName?: string;
  /**
   * @remarks
   * The multi-zone scaling policy. Valid values:
   * 
   * *   PRIORITY: The vSwitch that is first selected has the highest priority.
   * *   BALANCE: This policy evenly distributes instances across zones in which the vSwitches reside.
   * 
   * @example
   * "PRIORITY"
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The CPU utilization that triggers a scale-out.
   * 
   * @example
   * 50
   */
  outCPU?: number;
  /**
   * @remarks
   * The relationship among the conditions that trigger a scale-out.
   * 
   * *   OR: one of the conditions
   * *   AND: all conditions
   * 
   * @example
   * "OR"
   */
  outCondition?: string;
  /**
   * @remarks
   * The duration in which the metric threshold is exceeded. Unit: minutes.
   * 
   * @example
   * 50
   */
  outDuration?: number;
  /**
   * @remarks
   * Specifies whether to allow scale-outs.
   * 
   * @example
   * true
   */
  outEnable?: boolean;
  /**
   * @remarks
   * The maximum number of instances in each group when a scale-out is performed.
   * 
   * @example
   * 10
   */
  outInstanceNum?: number;
  /**
   * @remarks
   * The system load that triggers a scale-out.
   * 
   * @example
   * 50
   */
  outLoad?: number;
  /**
   * @remarks
   * The minimum service latency that triggers a scale-out. The lower limit is 0. Unit: milliseconds.
   * 
   * @example
   * 0
   */
  outRT?: number;
  /**
   * @remarks
   * The number of instances that are added during each scale-out.
   * 
   * @example
   * 0
   */
  outStep?: number;
  /**
   * @remarks
   * The password that is used to log on to the instance. This parameter takes effect only if you choose to create instances based on the specifications of an existing instance during a scale-out.
   * 
   * @example
   * "Pwd*****"
   */
  password?: string;
  /**
   * @remarks
   * The source of the instance to be added during a scale-out. Valid values:
   * 
   * *   NEW: elastic resources
   * *   AVAILABLE: existing resources If you prefer existing resources to elastic resources, set this parameter to AVAILABLE_FIRST.
   * 
   * If you set this parameter to NEW or AVAILABLE_FIRST, you must specify the auto-scaling parameters. If you set this parameter to NEW, instances are created based on a launch template or the specifications of an existing instance.
   * 
   * @example
   * "AVAILABLE"
   */
  resourceFrom?: string;
  /**
   * @remarks
   * The instance handling mode during a scale-in. Valid values:
   * 
   * *   release: When a scale-in is performed, instances that are no longer used are released.
   * *   recycle: When a scale-in is performed, instances that are no longer used are stopped and reclaimed.
   * 
   * @example
   * "release"
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The ID of the launch template that is used to create instances during a scale-out. This parameter takes effect only if you set the OutEnable parameter to true. This parameter takes precedence over the TemplateInstanceId parameter.
   * 
   * @example
   * "lt-wz9hkhn8wp*****"
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the instance whose specifications are used to create instances during a scale-out. This parameter is valid only when you set the OutEnable parameter to true.
   * 
   * @example
   * "1"
   */
  templateInstanceId?: string;
  /**
   * @remarks
   * The name of the instance whose specifications are used to create instances during a scale-out. This parameter takes effect only if you specify the TemplateInstanceId parameter.
   * 
   * @example
   * "tpl-tdy218"
   */
  templateInstanceName?: string;
  /**
   * @remarks
   * The version of the launch template that is used to create instances during a scale-out. This parameter takes effect only if you set the OutEnable parameter to true. To use the default template version, set this parameter to `-1`. Otherwise, set this parameter to the version that you want to use.
   * 
   * @example
   * -1
   */
  templateVersion?: number;
  /**
   * @remarks
   * The IDs of the vSwitches that are associated with the VPC. Separate multiple IDs with commas (,).
   * 
   * @example
   * "vsw-bp1ldxs3d4fd*****"
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) that is associated with the instances created based on a launch template or the specifications of an existing instance.
   * 
   * @example
   * "vpc-bp1j55oz3bg*****"
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptEULA: 'AcceptEULA',
      appId: 'AppId',
      groupId: 'GroupId',
      inCondition: 'InCondition',
      inCpu: 'InCpu',
      inDuration: 'InDuration',
      inEnable: 'InEnable',
      inInstanceNum: 'InInstanceNum',
      inLoad: 'InLoad',
      inRT: 'InRT',
      inStep: 'InStep',
      keyPairName: 'KeyPairName',
      multiAzPolicy: 'MultiAzPolicy',
      outCPU: 'OutCPU',
      outCondition: 'OutCondition',
      outDuration: 'OutDuration',
      outEnable: 'OutEnable',
      outInstanceNum: 'OutInstanceNum',
      outLoad: 'OutLoad',
      outRT: 'OutRT',
      outStep: 'OutStep',
      password: 'Password',
      resourceFrom: 'ResourceFrom',
      scalingPolicy: 'ScalingPolicy',
      templateId: 'TemplateId',
      templateInstanceId: 'TemplateInstanceId',
      templateInstanceName: 'TemplateInstanceName',
      templateVersion: 'TemplateVersion',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptEULA: 'boolean',
      appId: 'string',
      groupId: 'string',
      inCondition: 'string',
      inCpu: 'number',
      inDuration: 'number',
      inEnable: 'boolean',
      inInstanceNum: 'number',
      inLoad: 'number',
      inRT: 'number',
      inStep: 'number',
      keyPairName: 'string',
      multiAzPolicy: 'string',
      outCPU: 'number',
      outCondition: 'string',
      outDuration: 'number',
      outEnable: 'boolean',
      outInstanceNum: 'number',
      outLoad: 'number',
      outRT: 'number',
      outStep: 'number',
      password: 'string',
      resourceFrom: 'string',
      scalingPolicy: 'string',
      templateId: 'string',
      templateInstanceId: 'string',
      templateInstanceName: 'string',
      templateVersion: 'number',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

