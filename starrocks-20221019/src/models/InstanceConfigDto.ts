// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceConfigDto extends $dara.Model {
  /**
   * @remarks
   * The configuration item name.
   * 
   * @example
   * storage_root_path
   */
  configKey?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * @example
   * BE
   */
  configType?: string;
  /**
   * @remarks
   * The configuration item value.
   * 
   * @example
   * value1
   */
  configValue?: string;
  /**
   * @remarks
   * The compute group ID, which is required only when the parameter is exclusive to the compute group. In other scenarios, leave it empty or set it to the cluster ID.
   * 
   * @example
   * ng-e24924dxxxxx
   */
  nodeGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'configKey',
      configType: 'configType',
      configValue: 'configValue',
      nodeGroupId: 'nodeGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configType: 'string',
      configValue: 'string',
      nodeGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

