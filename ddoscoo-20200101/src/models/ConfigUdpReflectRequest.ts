// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigUdpReflectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

