// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortMaxConnsResponseBodyPortMaxConns extends $dara.Model {
  /**
   * @remarks
   * The maximum number of connections per second (CPS).
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.***.***.117
   */
  ip?: string;
  /**
   * @remarks
   * The port of the instance.
   * 
   * @example
   * 80
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      ip: 'Ip',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      ip: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

