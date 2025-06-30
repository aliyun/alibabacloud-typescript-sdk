// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceConfigDto extends $dara.Model {
  /**
   * @example
   * storage_root_path
   */
  configKey?: string;
  /**
   * @example
   * BE
   */
  configType?: string;
  /**
   * @example
   * value1
   */
  configValue?: string;
  /**
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

