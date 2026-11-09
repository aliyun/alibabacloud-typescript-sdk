// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Cloud Message Queue MQTT version, indicating which instance\\"s device certificates need to be viewed.
   * 
   * This parameter is required.
   * 
   * @example
   * post-cn-7mz2d******
   */
  mqttInstanceId?: string;
  /**
   * @remarks
   * Indicates which page of the results to return. The starting page is counted from 1.
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
      mqttInstanceId: 'MqttInstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

