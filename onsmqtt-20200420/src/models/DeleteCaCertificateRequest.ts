// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCaCertificateRequest extends $dara.Model {
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
   * The serial number (SN) of the CA certificate to delete. The SN uniquely identifies a CA certificate. The value cannot exceed 128 bytes.
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

