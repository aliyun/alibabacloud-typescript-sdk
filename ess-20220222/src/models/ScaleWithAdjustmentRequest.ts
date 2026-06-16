// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScaleWithAdjustmentRequestLifecycleHookContext extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable all lifecycle hooks for the scaling activity. Valid values:
   * 
   * - `true`: Disables all lifecycle hooks.
   * 
   * - `false`: Does not disable lifecycle hooks.
   * 
   * @example
   * false
   */
  disableLifecycleHook?: boolean;
  /**
   * @remarks
   * A list of lifecycle hook IDs to ignore during the scaling activity.
   */
  ignoredLifecycleHookIds?: string[];
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
   * The name of the environment variable. It must be 1 to 128 characters long, cannot start with a digit, and can contain only letters (a-z, A-Z), digits (0-9), and underscores (_).
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable, up to 256 characters long.
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
   * The arguments for the container\\"s startup command. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The container\\"s startup command, specified as an array of strings. You can specify up to 20 strings, and each can be up to 256 characters long.
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
   * Environment variables to set in the container.
   */
  environmentVars?: ScaleWithAdjustmentRequestOverridesContainerOverridesEnvironmentVars[];
  /**
   * @remarks
   * The memory size for the container. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The name of the container to override. The override takes effect only if this name matches a container name in the scaling configuration.
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
   * A list of container-specific overrides.
   */
  containerOverrides?: ScaleWithAdjustmentRequestOverridesContainerOverrides[];
  /**
   * @remarks
   * The number of vCPUs for the instance. Unit: cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size for the instance. Unit: GiB.
   * 
   * @example
   * 4
   */
  memory?: number;
  /**
   * @remarks
   * The user data for the ECS instance. It must be Base64-encoded, and the raw data cannot exceed 32 KB.
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
   * The metadata for the scaling activity.
   * 
   * @example
   * {"key":"value"}
   */
  activityMetadata?: string;
  /**
   * @remarks
   * The method used to adjust the number of instances in a scaling activity. Valid values:
   * 
   * - `QuantityChangeInCapacity`: Adds or removes a specified number of ECS instances.
   * 
   * - `PercentChangeInCapacity`: Adds or removes a specified percentage of ECS instances.
   * 
   * - `TotalCapacity`: Adjusts the number of ECS instances in the scaling group to a specified number.
   * 
   * This parameter is required.
   * 
   * @example
   * QuantityChangeInCapacity
   */
  adjustmentType?: string;
  /**
   * @remarks
   * The adjustment value for the scaling activity. A single adjustment cannot add or remove more than 1,000 ECS instances. The valid range depends on `AdjustmentType`:
   * 
   * - `QuantityChangeInCapacity`: -1000 to 1000.
   * 
   * - `PercentChangeInCapacity`: -100 to 10000.
   * 
   * - `TotalCapacity`: 0 to 2000.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  adjustmentValue?: number;
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request. This token must be a unique string of up to 64 ASCII characters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The execution mode. Valid values:
   * 
   * - `None`: Executes a standard scaling activity.
   * 
   * - `PlanOnly`: Only performs elastic planning and returns the results in `PlanResult` without triggering the scaling activity. The results include details such as instance types, availability zones, billing methods, and the number of new instances.
   * 
   * Default value: None.
   * 
   * @example
   * PlanOnly
   */
  executionMode?: string;
  /**
   * @remarks
   * The lifecycle hook context.
   */
  lifecycleHookContext?: ScaleWithAdjustmentRequestLifecycleHookContext;
  /**
   * @remarks
   * The minimum number of instances to adjust in a scaling activity. This parameter takes effect only when `AdjustmentType` is set to `PercentChangeInCapacity`.
   * 
   * @example
   * 1
   */
  minAdjustmentMagnitude?: number;
  /**
   * @remarks
   * The parameters to override when scaling out an ECI scaling group.
   */
  overrides?: ScaleWithAdjustmentRequestOverrides;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether the current scaling activity supports concurrency.
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
   * Specifies whether to execute the scaling activity synchronously. This parameter applies only to scaling groups that are configured with an expected number of instances. Valid values:
   * 
   * - `true`: Synchronous execution. The scaling activity is triggered immediately.
   * 
   * - `false`: Asynchronous execution. The call updates the expected number of instances without immediately triggering the scaling activity. The activity occurs when the system detects a discrepancy between the new expected number and the current number of instances.
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

