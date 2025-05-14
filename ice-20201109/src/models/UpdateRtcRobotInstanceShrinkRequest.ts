// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcRobotInstanceShrinkRequest extends $dara.Model {
  configShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 727dc0e296014bb58670940a3da95592
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      configShrink: 'Config',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configShrink: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

