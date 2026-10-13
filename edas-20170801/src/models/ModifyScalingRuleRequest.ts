// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Must be set to true if auto scaling is used.
   * 
   * @example
   * true
   */
  acceptEULA?: boolean;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 74ee****-db65-4322-a1f6-bcb60e5b****
   */
  appId?: string;
  /**
   * @remarks
   * The deployment group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8123db90-880f-486f-****-************
   */
  groupId?: string;
  /**
   * @remarks
   * The trigger condition. Valid values:
   * 
   * - OR: Any condition.
   * - AND: All conditions.
   * 
   * @example
   * "OR"
   */
  inCondition?: string;
  /**
   * @remarks
   * The trigger metric: CPU utilization.
   * 
   * @example
   * 50
   */
  inCpu?: number;
  /**
   * @remarks
   * The duration, in minutes.
   * 
   * @example
   * 50
   */
  inDuration?: number;
  /**
   * @remarks
   * Specifies whether to include the scale-in rule. Valid values:
   * 
   * - true: Included.
   * - false: Not included.
   * 
   * @example
   * true
   */
  inEnable?: boolean;
  /**
   * @remarks
   * The minimum number of instances to retain when the group scales in.
   * 
   * @example
   * 3
   */
  inInstanceNum?: number;
  /**
   * @remarks
   * The trigger metric: system load.
   * 
   * @example
   * 50
   */
  inLoad?: number;
  /**
   * @remarks
   * The trigger metric: service latency. Unit: milliseconds. Minimum value: 0.
   * 
   * @example
   * 50
   */
  inRT?: number;
  /**
   * @remarks
   * The number of instances to scale in at a time.
   * 
   * @example
   * 1
   */
  inStep?: number;
  /**
   * @remarks
   * The name of the logon key pair for the instance. This parameter is valid only when the existing instance rule is used for auto scaling.
   * 
   * @example
   * "tdy218"
   */
  keyPairName?: string;
  /**
   * @remarks
   * The multi-zone scaling policy for auto scaling. Valid values:
   * - PRIORITY: Priority policy.
   * - BALANCE: Balanced distribution policy.
   * 
   * @example
   * "PRIORITY"
   */
  multiAzPolicy?: string;
  /**
   * @remarks
   * The trigger metric: CPU utilization.
   * 
   * @example
   * 50
   */
  outCPU?: number;
  /**
   * @remarks
   * The trigger condition. Valid values:
   * 
   * - OR: Any condition.
   * - AND: All conditions.
   * 
   * @example
   * "OR"
   */
  outCondition?: string;
  /**
   * @remarks
   * The duration, in minutes.
   * 
   * @example
   * 50
   */
  outDuration?: number;
  /**
   * @remarks
   * Specifies whether to include the scale-out rule.
   * 
   * @example
   * true
   */
  outEnable?: boolean;
  /**
   * @remarks
   * The maximum number of instances when the group scales out.
   * 
   * @example
   * 10
   */
  outInstanceNum?: number;
  /**
   * @remarks
   * The trigger metric: system load.
   * 
   * @example
   * 50
   */
  outLoad?: number;
  /**
   * @remarks
   * The trigger metric: service latency. Unit: milliseconds. Minimum value: 0.
   * 
   * @example
   * 0
   */
  outRT?: number;
  /**
   * @remarks
   * The number of instances to scale out at a time.
   * 
   * @example
   * 0
   */
  outStep?: number;
  /**
   * @remarks
   * The logon password of the instance. This parameter is valid only when the existing instance rule is used for auto scaling.
   * 
   * @example
   * "Pwd*****"
   */
  password?: string;
  /**
   * @remarks
   * The source of instances for scale-out. Valid values:
   * - NEW: Elastic resources.
   * - AVAILABLE: Existing resources. To prioritize existing resources, use AVAILABLE_FIRST.
   * 
   * If you set this parameter to NEW or AVAILABLE_FIRST, you must specify auto scaling parameters. Auto scaling includes two modes: launch template and existing instance rule.
   * 
   * @example
   * "AVAILABLE"
   */
  resourceFrom?: string;
  /**
   * @remarks
   * The reclamation mode for scale-in. Valid values:
   * - release: Release mode.
   * - recycle: Stop and reclaim mode.
   * 
   * @example
   * "release"
   */
  scalingPolicy?: string;
  /**
   * @remarks
   * The launch template ID for auto scaling. This parameter is valid only when OutEnable is set to true, and it has a higher priority than TemplateInstanceId.
   * 
   * @example
   * "lt-wz9hkhn8wp*****"
   */
  templateId?: string;
  /**
   * @remarks
   * The instance ID for the existing instance rule of auto scaling. This parameter is valid only when OutEnable is set to true.
   * 
   * @example
   * "1"
   */
  templateInstanceId?: string;
  /**
   * @remarks
   * The instance name for the existing instance rule of auto scaling. This parameter is valid only when TemplateInstanceId is specified.
   * 
   * @example
   * "tpl-tdy218"
   */
  templateInstanceName?: string;
  /**
   * @remarks
   * The launch template version for auto scaling. This parameter is valid only when OutEnable is set to true. Set this parameter to `-1` to use the default template version, or set it to a specific version number.
   * 
   * @example
   * -1
   */
  templateVersion?: number;
  /**
   * @remarks
   * The list of vSwitch IDs in the VPC. Separate multiple IDs with commas (,).
   * 
   * @example
   * "vsw-bp1ldxs3d4fd*****"
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID associated with the launch template or existing instance rule for auto scaling.
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

