// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAICInstanceTypeRequest extends $dara.Model {
  /**
   * @remarks
   * One or more environment variables to set during instance initialization.
   * 
   * @example
   * [object Object]
   */
  environmentVar?: string;
  /**
   * @remarks
   * The refresh rate. Unit: Hz. Valid values:
   * - 30
   * - 60
   * - 120
   * 
   * @example
   * 30
   */
  frequency?: number;
  /**
   * @remarks
   * The image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * yourImage ID
   */
  imageId?: string;
  /**
   * @remarks
   * The ID of the instance whose specifications you want to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * aic-xxxx-0
   */
  instanceId?: string;
  /**
   * @remarks
   * The target AIC container instance specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * aic.cf52r.c1.np
   */
  instanceType?: string;
  /**
   * @remarks
   * The resolution. Valid values:
   * - 1920*1080
   * - 1080*1920
   * - 1280*720
   * - 720*1280
   * - 2400*1080
   * - 1080*2400
   * - 1920*864
   * - 864*1920
   * 
   * @example
   * 720*1280
   */
  resolution?: string;
  static names(): { [key: string]: string } {
    return {
      environmentVar: 'EnvironmentVar',
      frequency: 'Frequency',
      imageId: 'ImageId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      resolution: 'Resolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentVar: 'string',
      frequency: 'number',
      imageId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      resolution: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

