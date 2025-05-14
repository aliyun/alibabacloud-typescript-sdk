// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateRtcRobotInstanceRequestConfig } from "./UpdateRtcRobotInstanceRequestConfig";


export class UpdateRtcRobotInstanceRequest extends $dara.Model {
  config?: UpdateRtcRobotInstanceRequestConfig;
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
      config: 'Config',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateRtcRobotInstanceRequestConfig,
      instanceId: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

