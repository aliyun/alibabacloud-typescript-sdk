// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutgoingDestinationIPResponseBodyDstIPListApplicationPortList extends $dara.Model {
  /**
   * @remarks
   * The application type used in the access control policy. Valid values:
   * 
   * *   **FTP**
   * *   **HTTP**
   * *   **HTTPS**
   * *   **Memcache**
   * *   **MongoDB**
   * *   **MQTT**
   * *   **MySQL**
   * *   **RDP**
   * *   **Redis**
   * *   **SMTP**
   * *   **SMTPS**
   * *   **SSH**
   * *   **SSL_No_Cert**
   * *   **SSL**
   * *   **VNC**
   * 
   * >  The value of this parameter depends on the value of the Proto parameter. If you set Proto to TCP, you can set ApplicationNameList to any valid value. If you configure both ApplicationNameList and ApplicationName, only the value of ApplicationNameList is used.
   * 
   * @example
   * HTTP
   */
  applicationName?: string;
  /**
   * @remarks
   * The application port.
   * 
   * @example
   * 80
   */
  port?: number;
  unknownReason?: string[];
  static names(): { [key: string]: string } {
    return {
      applicationName: 'ApplicationName',
      port: 'Port',
      unknownReason: 'UnknownReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationName: 'string',
      port: 'number',
      unknownReason: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.unknownReason)) {
      $dara.Model.validateArray(this.unknownReason);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

