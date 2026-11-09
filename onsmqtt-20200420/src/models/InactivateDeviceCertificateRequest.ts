// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InactivateDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The SN of the CA certificate to which the device certificate belongs. The SN uniquely identifies a CA certificate.
   * 
   * The value can be up to 128 bytes in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
  /**
   * @remarks
   * The serial number (SN) of the device certificate that you want to inactivate. The SN uniquely identifies a device certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which the device certificate is attached.
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

