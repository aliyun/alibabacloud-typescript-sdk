// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID bound to the CA certificate, which is the instance ID of the MQTT version of the cloud message queue.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The SN serial number of the CA certificate to be queried, used to uniquely identify a CA certificate.
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

