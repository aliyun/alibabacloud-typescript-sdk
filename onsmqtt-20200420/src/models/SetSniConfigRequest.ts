// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSniConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The default certificate. This certificate is returned if no matching domain name is found in the server certificate list.
   * 
   * This parameter is required.
   * 
   * @example
   * 1533xxxx-cn-hangzhou
   */
  defaultCertificate?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-cn-5yd3xxx
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * The Server Name Indication (SNI) configuration that maps domain names to certificates. Format: DomainName#CertificateID#Password(if any);DomainName#CertificateID#Password(if any)
   * 
   * @example
   * *.mqtt.aliyuncs.com#15xxxxx-cn-hangzhou;mqtt-test.mqtt.aliyuncs.com#15xxxx9-cn-hangzhou
   */
  sniConfig?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCertificate: 'DefaultCertificate',
      mqttInstanceId: 'MqttInstanceId',
      sniConfig: 'SniConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCertificate: 'string',
      mqttInstanceId: 'string',
      sniConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

