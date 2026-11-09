// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterCaCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the CA certificate that you want to register with an ApsaraMQ for MQTT broker.
   * 
   * > In the example, 
   *  indicates a line feed.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END CERTIFICATE-----
   */
  caContent?: string;
  /**
   * @remarks
   * The name of the CA certificate that you want to register with an ApsaraMQ for MQTT broker.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt_ca
   */
  caName?: string;
  /**
   * @remarks
   * The ID of the ApsaraMQ for MQTT instance to which you want to bind the CA certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The content of the validation certificate issued by the CA certificate that you want to register with an ApsaraMQ for MQTT broker. The validation certificate must be used together with the registration code of the CA certificate to verify the private key of the CA certificate.
   * 
   * > In the example, 
   *  indicates a line feed.
   * 
   * This parameter is required.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----\\nMIID/DCCAu+Y5sRMpp9tnd+4s******\\n-----END CERTIFICATE-----
   */
  verificationContent?: string;
  static names(): { [key: string]: string } {
    return {
      caContent: 'CaContent',
      caName: 'CaName',
      mqttInstanceId: 'MqttInstanceId',
      verificationContent: 'VerificationContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caContent: 'string',
      caName: 'string',
      mqttInstanceId: 'string',
      verificationContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

