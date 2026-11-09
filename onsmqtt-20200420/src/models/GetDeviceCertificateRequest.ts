// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to which the device certificate to be queried belongs, used to uniquely identify a CA certificate. Value range: no more than 128 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The SN serial number of the device certificate to be queried, used to uniquely identify a device certificate. Value range: no more than 128 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The instance ID to which the device certificate is bound, i.e., the instance ID of the Cloud Message Queue MQTT version.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceSn: 'DeviceSn',
      mqttInstanceId: 'MqttInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceSn: 'string',
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

