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

