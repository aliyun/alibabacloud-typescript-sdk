// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleWithAdjustmentRequestLifecycleHookContext extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the Lifecycle Hook feature. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  disableLifecycleHook?: boolean;
  /**
   * @remarks
   * The IDs of the lifecycle hooks that you want to disable.
   */
  ignoredLifecycleHookIds?: string[];
  static names(): { [key: string]: string } {
    return {
      disableLifecycleHook: 'DisableLifecycleHook',
      ignoredLifecycleHookIds: 'IgnoredLifecycleHookIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableLifecycleHook: 'boolean',
      ignoredLifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ignoredLifecycleHookIds)) {
      $dara.Model.validateArray(this.ignoredLifecycleHookIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 characters in length. Format requirement: `[0-9a-zA-Z]` and underscores (_). It cannot start with a digit.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value can be up to 256 characters in length.
   * 
   * @example
   * /usr/local/tomcat
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentRequestOverridesContainerOverrides extends $dara.Model {
  /**
   * @remarks
   * The argument that corresponds to the startup command of the container. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The container startup commands. You can specify up to 20 commands. Each command can contain up to 256 characters.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the container. Unit: vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The information about the environment variables.
   */
  environmentVars?: ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars[];
  /**
   * @remarks
   * The memory size that you want to allocate to the container. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The name of container N. If you specify ContainerOverrides, you must also specify Name. ContainerOverrides takes effect only when the container name specified by Name matches that specified in the scaling configuration.
   * 
   * @example
   * container-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      cpu: 'Cpu',
      environmentVars: 'EnvironmentVars',
      memory: 'Memory',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      cpu: 'number',
      environmentVars: { 'type': 'array', 'itemType': ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars },
      memory: 'number',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.commands)) {
      $dara.Model.validateArray(this.commands);
    }
    if(Array.isArray(this.environmentVars)) {
      $dara.Model.validateArray(this.environmentVars);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentRequestOverrides extends $dara.Model {
  /**
   * @remarks
   * The list of parameters that you want to use to override specific configurations for containers.
   */
  containerOverrides?: ScaleWithAdjustmentRequestOverridesContainerOverrides[];
  /**
   * @remarks
   * The number of vCPUs that you want to allocate to the instance. Unit: vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size that you want to allocate to the instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      containerOverrides: 'ContainerOverrides',
      cpu: 'Cpu',
      memory: 'Memory',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerOverrides: { 'type': 'array', 'itemType': ScaleWithAdjustmentRequestOverridesContainerOverrides },
      cpu: 'number',
      memory: 'number',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containerOverrides)) {
      $dara.Model.validateArray(this.containerOverrides);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleWithAdjustmentRequest extends $dara.Model {
  /**
   * @remarks
   * The metadata of the scaling activity.
   * 
   * @example
   * {"key":"value"}
   */
  activityMetadata?: string;
  /**
   * @remarks
   * The type of the scaling policy. Valid values:
   * 
   * *   QuantityChangeInCapacity: adds the specified number of ECS instances to or removes the specified number of ECS instances from the scaling group.
   * *   PercentChangeInCapacity: adds the specified percentage of ECS instances to or removes the specified percentage of ECS instances from the scaling group.
   * *   TotalCapacity: adjusts the number of ECS instances in the scaling group to a specified number.
   * 
   * This parameter is required.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The number of instances in each adjustment. The number of ECS instances in each adjustment cannot exceed 1,000.
   * 
   * *   Valid values if you set the AdjustmentType parameter to QuantityChangeInCapacity: -1000 to 1000.
   * *   Valid values if you set the AdjustmentType parameter to PercentChangeInCapacity: -100 to 10000.
   * *   Valid values if you set the AdjustmentType parameter to TotalCapacity: 0 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * *   None: If this is not specified, auto scaling is performed.
   * *   PlanOnly: Scaling is not triggered. Only elastic planning is performed. The planning result is returned in PlanResult, including the instance type, zone ID, billing type, and number of created instances.
   * 
   * Default value: None.
   * 
   * @example
   * PlanOnly
   */
  executionMode?: string;
  /**
   * @remarks
   * The context of the lifecycle hook.
   */
  lifecycleHookContext?: ScaleWithAdjustmentRequestLifecycleHookContext;
  /**
   * @remarks
   * The minimum number of instances allowed in each adjustment. This parameter takes effect only if you set the `AdjustmentType` parameter to `PercentChangeInCapacity`.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  /**
   * @remarks
   * The overrides that allow you to adjust the scaling group of the Elastic Container Instance type during a scale-out event.
   */
  overrides?: ScaleWithAdjustmentRequestOverrides;
  ownerId?: number;
  /**
   * @remarks
   * Whether the current scale-out task supports concurrency.
   * 
   * @example
   * false
   */
  parallelTask?: boolean;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-j6c1o397427hyjdc****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * Specifies whether to trigger the scaling task in a synchronous manner. This parameter takes effect only on scaling groups for which you specified an expected number of instances. Valid Values:
   * 
   * *   true: triggers the scaling task in a synchronous manner. A scaling activity is triggered at the time when the scaling rule is executed.
   * *   false: does not trigger the scaling task in a synchronous manner. After you change the expected number of instances for the scaling group, Auto Scaling checks whether the total number of instances in the scaling group matches the new expected number and determines whether to trigger the scaling activity based on the check result.
   * 
   * >  For more information, see [Expected number of instances](https://help.aliyun.com/document_detail/146231.html).
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  syncActivity?: boolean;
  static names(): { [key: string]: string } {
    return {
      activityMetadata: 'ActivityMetadata',
      adjustmentType: 'AdjustmentType',
      adjustmentValue: 'AdjustmentValue',
      clientToken: 'ClientToken',
      executionMode: 'ExecutionMode',
      lifecycleHookContext: 'LifecycleHookContext',
      minAdjustmentMagnitude: 'MinAdjustmentMagnitude',
      overrides: 'Overrides',
      ownerId: 'OwnerId',
      parallelTask: 'ParallelTask',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      syncActivity: 'SyncActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityMetadata: 'string',
      adjustmentType: 'string',
      adjustmentValue: 'number',
      clientToken: 'string',
      executionMode: 'string',
      lifecycleHookContext: ScaleWithAdjustmentRequestLifecycleHookContext,
      minAdjustmentMagnitude: 'number',
      overrides: ScaleWithAdjustmentRequestOverrides,
      ownerId: 'number',
      parallelTask: 'boolean',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      syncActivity: 'boolean',
    };
  }

  validate() {
    if(this.lifecycleHookContext && typeof (this.lifecycleHookContext as any).validate === 'function') {
      (this.lifecycleHookContext as any).validate();
    }
    if(this.overrides && typeof (this.overrides as any).validate === 'function') {
      (this.overrides as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

