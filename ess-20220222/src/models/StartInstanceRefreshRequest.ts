// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRefreshRequestCheckpoints extends $dara.Model {
  /**
   * @remarks
   * The percentage of new instances relative to the total number of instances in the scaling group. The task is automatically paused when this percentage is reached. Valid values: 1 to 100 (%).
   * 
   * > The values must be specified in ascending order, and the last value must be 100.
   * 
   * @example
   * 20
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRefreshRequestDesiredConfigurationContainersEnvironmentVars extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not available for use.
   * 
   * @example
   * fieldPath
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 characters in length and can contain digits, letters, and underscores (_). It cannot start with a digit.
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
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRefFieldPath: 'FieldRefFieldPath',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRefFieldPath: 'string',
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

export class StartInstanceRefreshRequestDesiredConfigurationContainers extends $dara.Model {
  /**
   * @remarks
   * The arguments of the container startup command. You can specify up to 10 arguments.
   */
  args?: string[];
  /**
   * @remarks
   * The startup commands of the container. You can specify up to 20 commands. Each command can contain up to 256 characters.
   */
  commands?: string[];
  /**
   * @remarks
   * The environment variable information.
   */
  environmentVars?: StartInstanceRefreshRequestDesiredConfigurationContainersEnvironmentVars[];
  /**
   * @remarks
   * The container image.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest
   */
  image?: string;
  /**
   * @remarks
   * The custom container name.
   * 
   * @example
   * nginx
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      commands: 'Commands',
      environmentVars: 'EnvironmentVars',
      image: 'Image',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      commands: { 'type': 'array', 'itemType': 'string' },
      environmentVars: { 'type': 'array', 'itemType': StartInstanceRefreshRequestDesiredConfigurationContainersEnvironmentVars },
      image: 'string',
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

export class StartInstanceRefreshRequestDesiredConfigurationLaunchTemplateOverrides extends $dara.Model {
  /**
   * @remarks
   * The instance type that overrides the instance type specified in the launch template.
   * 
   * > This parameter takes effect only when the LaunchTemplateId parameter specifies a launch template.
   * 
   * @example
   * ecs.c5.2xlarge
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRefreshRequestDesiredConfiguration extends $dara.Model {
  /**
   * @remarks
   * The list of containers included in the instance.
   * 
   * > - This parameter is supported only for Elastic Container Instance (ECI) scaling groups.
   * > - Only the container configurations that match `Container.Name` in the current scaling configuration container list are refreshed.
   */
  containers?: StartInstanceRefreshRequestDesiredConfigurationContainers[];
  /**
   * @remarks
   * The image ID.
   * 
   * 
   * 
   * > - After the instance refresh task is completed, the image in the currently active configuration of the scaling group is updated to this image.
   * > - This parameter is not supported when the instance configuration source of the scaling group is a launch template.
   * 
   * @example
   * m-2ze8cqacj7opnf***
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the launch template from which the scaling group obtains launch configuration information.
   * 
   * @example
   * lt-2ze2qli30u***
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The instance type information that overrides the launch template.
   */
  launchTemplateOverrides?: StartInstanceRefreshRequestDesiredConfigurationLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version of the launch template. Valid values:
   * 
   * - A fixed template version number.
   * - Default: always uses the default version of the template.
   * - Latest: always uses the latest version of the template.
   * 
   * > When the version is set to Default or Latest, the instance refresh task does not support rollback.
   * 
   * @example
   * 8
   */
  launchTemplateVersion?: string;
  /**
   * @remarks
   * The ID of the scaling configuration.
   * 
   * @example
   * asc-2zed7lqn4ts4****
   */
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      imageId: 'ImageId',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateOverrides: 'LaunchTemplateOverrides',
      launchTemplateVersion: 'LaunchTemplateVersion',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': StartInstanceRefreshRequestDesiredConfigurationContainers },
      imageId: 'string',
      launchTemplateId: 'string',
      launchTemplateOverrides: { 'type': 'array', 'itemType': StartInstanceRefreshRequestDesiredConfigurationLaunchTemplateOverrides },
      launchTemplateVersion: 'string',
      scalingConfigurationId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(Array.isArray(this.launchTemplateOverrides)) {
      $dara.Model.validateArray(this.launchTemplateOverrides);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The duration for which the task is paused when a checkpoint is reached.
   * - Unit: minutes.
   * - Valid values: 1 to 2880.
   *  - Default value: 60.
   * 
   * @example
   * 10
   */
  checkpointPauseTime?: number;
  /**
   * @remarks
   * The checkpoints for the refresh task. When the percentage of new instances reaches a specified value during the instance refresh, the task is automatically paused for CheckpointPauseTime minutes.
   */
  checkpoints?: StartInstanceRefreshRequestCheckpoints[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The desired configuration for the instance refresh.
   * 
   * > - You cannot specify ScalingConfigurationId, ImageId, LaunchTemplateId, and Containers at the same time. If this parameter is left empty, the currently active configuration of the scaling group is used for the refresh.
   * > - After the instance refresh task is completed, the active scaling configuration of the scaling group is updated to this configuration.
   */
  desiredConfiguration?: StartInstanceRefreshRequestDesiredConfiguration;
  /**
   * @remarks
   * The maximum percentage by which the number of instances in the scaling group can exceed the scaling group capacity during the instance refresh. Valid values: 100 to 200.
   * Default value: 120.
   * 
   * > When MinHealthyPercentage = MaxHealthyPercentage = 100, one instance is refreshed at a time.
   * 
   * @example
   * 100
   */
  maxHealthyPercentage?: number;
  /**
   * @remarks
   * The minimum percentage of instances that must remain in service in the scaling group during the instance refresh. Valid values: 0 to 100.
   * Default value: 80.
   * 
   * @example
   * 80
   */
  minHealthyPercentage?: number;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * Specifies whether to skip instances that already match the desired configuration.
   * 
   * > The system determines whether an instance matches based on the ID of the desired scaling configuration, not by comparing individual configuration items.
   * 
   * Valid values:
   * 
   * - true: Instances that were already created with the desired configuration are skipped.
   * - false: All instances in the scaling group are refreshed when the instance refresh task starts.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  skipMatching?: boolean;
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      checkpointPauseTime: 'CheckpointPauseTime',
      checkpoints: 'Checkpoints',
      clientToken: 'ClientToken',
      desiredConfiguration: 'DesiredConfiguration',
      maxHealthyPercentage: 'MaxHealthyPercentage',
      minHealthyPercentage: 'MinHealthyPercentage',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
      skipMatching: 'SkipMatching',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpointPauseTime: 'number',
      checkpoints: { 'type': 'array', 'itemType': StartInstanceRefreshRequestCheckpoints },
      clientToken: 'string',
      desiredConfiguration: StartInstanceRefreshRequestDesiredConfiguration,
      maxHealthyPercentage: 'number',
      minHealthyPercentage: 'number',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
      skipMatching: 'boolean',
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkpoints)) {
      $dara.Model.validateArray(this.checkpoints);
    }
    if(this.desiredConfiguration && typeof (this.desiredConfiguration as any).validate === 'function') {
      (this.desiredConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

