// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleWithAdjustmentRequestLifecycleHookContext extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable all lifecycle hooks for the scaling activity. Valid values:
   * 
   * - true: Disables all lifecycle hooks.
   * - false: Does not disable lifecycle hooks.
   * 
   * @example
   * false
   */
  disableLifecycleHook?: boolean;
  /**
   * @remarks
   * The list of IDs of the lifecycle hooks that are disabled for the scaling activity.
   */
  ignoredLifecycleHookIds?: string[];
  /**
   * @remarks
   * The default execution result of the lifecycle hook in this scaling activity. If specified, this value overrides the original default execution result of the hook.
   * 
   * @example
   * CONTINUE
   */
  lifecycleHookResult?: string;
  static names(): { [key: string]: string } {
    return {
      disableLifecycleHook: 'DisableLifecycleHook',
      ignoredLifecycleHookIds: 'IgnoredLifecycleHookIds',
      lifecycleHookResult: 'LifecycleHookResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableLifecycleHook: 'boolean',
      ignoredLifecycleHookIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHookResult: 'string',
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
   * The name of the environment variable. The name must be 1 to 128 characters in length. It can contain letters, digits, and underscores (_), and cannot start with a digit.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value can be 0 to 256 characters in length.
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
   * The arguments for the container startup command. A maximum of 10 arguments can be specified.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands for the container. A maximum of 20 commands can be specified. Each command can contain up to 256 characters.
   */
  commands?: string[];
  /**
   * @remarks
   * The number of vCPUs for the container. Unit: cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The list of environment variables.
   */
  environmentVars?: ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars[];
  /**
   * @remarks
   * The memory size of the container. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The name of the container. When you need to override container parameters, you must specify the container name. The container parameters can be overridden only when the container name matches the container name in the scaling configuration.
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
   * The override parameters for the container list.
   */
  containerOverrides?: ScaleWithAdjustmentRequestOverridesContainerOverrides[];
  /**
   * @remarks
   * The number of vCPUs at the instance level. Unit: cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size at the instance level. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The user data of the ECS instance. The user data must be encoded in Base64. The maximum size of the raw data before encoding is 32 KB.
   * 
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
   * The adjustment method for the scaling activity. Valid values:
   * 
   * - QuantityChangeInCapacity: Increases or decreases a specified number of ECS instances.
   * - PercentChangeInCapacity: Increases or decreases a specified percentage of ECS instances.
   * - TotalCapacity: Adjusts the number of ECS instances in the current scaling group to a specified number.
   * 
   * This parameter is required.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The adjustment value for the scaling activity. In all cases, the number of ECS instances adjusted in a single operation cannot exceed 1,000. Otherwise, the adjustment fails. Valid values vary based on the adjustment method:
   * - QuantityChangeInCapacity: -1,000 to 1,000.
   * - PercentChangeInCapacity: -100 to 10,000.
   * - TotalCapacity: 0 to 2,000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * - None: Not specified. Normal scaling is performed.
   * - PlanOnly: Does not trigger scaling. Only elastic planning is executed. The planning results, including instance types, zone IDs, billing methods, and the number of instances to be created, are returned in PlanResult.
   * 
   * Default value: None.
   * 
   * @example
   * PlanOnly
   */
  executionMode?: string;
  /**
   * @remarks
   * The context information of the lifecycle hook.
   */
  lifecycleHookContext?: ScaleWithAdjustmentRequestLifecycleHookContext;
  /**
   * @remarks
   * The minimum number of instances to be adjusted in the scaling activity. This parameter takes effect only when `AdjustmentType` is set to `PercentChangeInCapacity`.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  /**
   * @remarks
   * The override parameters specified for scaling out an Elastic Container Instance (ECI) scaling group.
   */
  overrides?: ScaleWithAdjustmentRequestOverrides;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether the current scaling task supports concurrent execution.
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
   * Specifies whether to synchronously execute the scaling activity. This parameter is valid only for scaling groups that have the expected number of instances configured. Valid values:
   * 
   * - true: Synchronous process. When the scaling rule is executed, the scale-out or scale-in activity of the scaling group is directly triggered.
   * - false: Asynchronous process. When the expected number of instances in the scaling group is modified, the actual scale-out or scale-in activity of the scaling group is not immediately triggered. The system automatically detects the difference between the expected number of instances and the current number of instances in the scaling group, and then triggers the scale-out or scale-in activity.
   * 
   * > For more information about the expected number of instances, see [Expected number of instances](https://help.aliyun.com/document_detail/146231.html).
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

