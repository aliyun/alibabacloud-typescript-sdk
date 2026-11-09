// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActiveDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The SN of the CA certificate to which the device certificate to be activated belongs. The SN uniquely identifies a CA certificate.
   * Valid values: up to 128 bytes.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The serial number (SN) of the device certificate to be activated. The SN uniquely identifies a device certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The instance ID to which the device certificate is attached, which is the instance ID of MSMQ for MQTT.
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

