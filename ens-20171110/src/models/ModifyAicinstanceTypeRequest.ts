// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAICInstanceTypeRequest extends $dara.Model {
  /**
   * @example
   * [object Object]
   */
  environmentVar?: string;
  /**
   * @example
   * 30
   */
  frequency?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourImage ID
   */
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aic-xxxx-0
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aic.cf52r.c1.np
   */
  instanceType?: string;
  /**
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

