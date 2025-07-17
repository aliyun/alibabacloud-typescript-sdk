// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRefreshRequestDesiredConfiguration extends $dara.Model {
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
   * The ID of the scaling configuration.
   * 
   * >  After the instance refresh task is complete, the scaling group uses the scaling configuration specified by this parameter.
   * 
   * @example
   * asc-2zed7lqn4ts4****
   */
  scalingConfigurationId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      scalingConfigurationId: 'ScalingConfigurationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      scalingConfigurationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceRefreshRequest extends $dara.Model {
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
   * *   When you call this operation, you must specify one of the following parameters: ScalingConfigurationId and ImageId.
   * 
   * *   Instances whose configurations match the desired configurations of the task are ignored during instance refresh.
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
    if(this.desiredConfiguration && typeof (this.desiredConfiguration as any).validate === 'function') {
      (this.desiredConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

