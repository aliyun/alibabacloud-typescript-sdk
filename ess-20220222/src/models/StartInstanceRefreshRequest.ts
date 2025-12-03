// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRefreshRequestCheckpoints extends $dara.Model {
  /**
   * @remarks
   * The percentage of new instances in the scaling group to the total number of instances. When this percentage is reached, the task is automatically suspended. Valid values: 1 to 100 (%).
   * 
   * >  Requires a small to large setting, and the last progress percentage needs to be 100.
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
   * >  This parameter is unavailable for use.
   * 
   * @example
   * fieldPath
   */
  fieldRefFieldPath?: string;
  /**
   * @remarks
   * The name of the environment variable. It can be 1 to 128 characters in length. Format requirement:[0-9a-zA-Z], and underscores, cannot start with a number.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value must be 0 to 256 bits in length.
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
   * The environment variables.
   */
  environmentVars?: StartInstanceRefreshRequestDesiredConfigurationContainersEnvironmentVars[];
  /**
   * @remarks
   * The image in the container.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:latest
   */
  image?: string;
  /**
   * @remarks
   * The custom name of the container.
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
   * The instance type specified by using this parameter overwrites the instance type of the launch template.
   * 
   * >  This parameter takes effect only if you specify LaunchTemplateId.
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
   * The containers in the elastic container instance.
   * 
   * > 
   * 
   * *   This parameter supports only scaling groups of the ECI type.
   * 
   * *   Only the containers in the scaling configuration list that are the same as those in the `Container.Name` are refreshed.
   */
  containers?: StartInstanceRefreshRequestDesiredConfigurationContainers[];
  /**
   * @remarks
   * The image ID.
   * 
   * > 
   * 
   * *   After the instance refresh task is complete, the active scaling configuration uses the image specified by this parameter.
   * 
   * *   If the instance configuration source of the scaling group is a launch template, you cannot specify this parameter.
   * 
   * @example
   * m-2ze8cqacj7opnf***
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the launch template that you want to enable in the scaling group.
   * 
   * @example
   * lt-2ze2qli30u***
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The information about the instance types that are extended in the launch template.
   */
  launchTemplateOverrides?: StartInstanceRefreshRequestDesiredConfigurationLaunchTemplateOverrides[];
  /**
   * @remarks
   * The version number of the launch template. Valid value:
   * 
   * *   A fixed template version number.
   * *   Default: the default version of the template.
   * *   Latest: the latest version of the template.
   * 
   * >  If you set the version to Default or Latest, the instance refresh task cannot be rolled back.
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
   * The duration of the pause when the refresh task checkpoint is entered.
   * 
   * *   Unit: minutes
   * *   Valid values: 1 to 2880.
   * *   Default: 60.
   * 
   * @example
   * 10
   */
  checkpointPauseTime?: number;
  /**
   * @remarks
   * Refresh Task Checkpoint: specifies that the task is automatically suspended for CheckpointPauseTime minutes when the proportion of new instances reaches the specified value during instance refresh.
   */
  checkpoints?: StartInstanceRefreshRequestCheckpoints[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The desired configurations of the instance refresh task.
   * 
   * > 
   * 
   * *   ScalingConfigurationId, ImageId, LaunchTemplateId, and Containers cannot be set at the same time. If you do not specify this parameter, the scaling group is refreshed based on the configurations that are in effect.
   * 
   * *   After the instance refresh task is complete, the scaling group uses the scaling configuration specified by this parameter.
   */
  desiredConfiguration?: StartInstanceRefreshRequestDesiredConfiguration;
  /**
   * @remarks
   * The ratio of instances that can exceed the upper limit of the scaling group capacity to all instances in the scaling group during instance refresh. Valid values: 100 to 200. Default value: 120.
   * 
   * >  If you set MinHealthyPercentage and MaxHealthyPercentage to 100, Auto Scaling refreshes the configurations of one instance each time the instance refresh task starts.
   * 
   * @example
   * 100
   */
  maxHealthyPercentage?: number;
  /**
   * @remarks
   * The ratio of instances that are in the In Service state to all instances in the scaling group during instance refresh. Valid values: 0 to 100. Default value: 80.
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
   * Specifies whether to skip instances that match the desired scaling configuration.
   * 
   * >  The system determines the match based on the ID of the desired scaling configuration rather than individual configuration items.
   * 
   * Valid values:
   * 
   * *   true: skips instances that match the desired scaling configuration. When you initiate an instance refresh task, the system checks the configurations of all instances. The refresh operation is skipped for instances created based on the desired scaling configuration.
   * *   false: does not skip instances that match the desired scaling configuration. When an instance refresh task is initiated, all instances in the scaling group at the time of initiation are refreshed.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  skipMatching?: boolean;
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

