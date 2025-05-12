// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceNetInfoResponseBodyDBClustersNetInfosPortList extends $dara.Model {
  /**
   * @remarks
   * The port that is used to connect to the BE cluster.
   * 
   * @example
   * MySQLPort/HttpPort
   */
  port?: number;
  /**
   * @remarks
   * The protocol of the port.
   * 
   * @example
   * 9030/8080
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

