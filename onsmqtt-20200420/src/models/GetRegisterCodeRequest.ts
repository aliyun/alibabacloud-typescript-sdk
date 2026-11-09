// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegisterCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

