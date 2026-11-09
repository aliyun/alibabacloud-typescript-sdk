// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InactivateCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the CA certificate is attached.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The serial number (SN) of the CA certificate that you want to unregister. The SN uniquely identifies a CA certificate.
   * 
   * The value can be up to 128 bytes long.
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

