// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceCertificateByCaSnRequest extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to be queried, indicating which CA certificate\\"s registered device certificates are to be retrieved.
   * 
   * This parameter is required.
   * 
   * @example
   * 007269004887******
   */
  caSn?: string;
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
   * Indicates the page number of the returned results. The starting page is counted from 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of query records to display per page. Value range: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      mqttInstanceId: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

