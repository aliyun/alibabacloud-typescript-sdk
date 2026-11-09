// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to which the CA certificate is bound, which is the instance ID of ApsaraMQ for MQTT.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The serial number (SN) of the CA certificate to be activated. The SN uniquely identifies a CA certificate. The value can be up to 128 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  sn?: string;
  static names(): { [key: string]: string } {
    return {
      mqttInstanceId: 'MqttInstanceId',
      sn: 'Sn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mqttInstanceId: 'string',
      sn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

