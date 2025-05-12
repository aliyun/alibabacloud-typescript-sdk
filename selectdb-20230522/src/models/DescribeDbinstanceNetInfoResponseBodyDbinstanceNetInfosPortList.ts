// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosPortList extends $dara.Model {
  /**
   * @remarks
   * The port that is used to connect to the instance.
   * 
   * @example
   * MySQLPort
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the port. Valid values:
   * 
   * *   **HttpPort**: HTTP port.
   * *   **MySQLPort**: MySQL port.
   * 
   * @example
   * 9030
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

