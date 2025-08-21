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

export class DescribePortMaxConnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the maximum number of connections that can be established over a port of the instance.
   */
  portMaxConns?: DescribePortMaxConnsResponseBodyPortMaxConns[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 08F79110-2AF5-4FA7-998E-7C5E75EACF9C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      portMaxConns: 'PortMaxConns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      portMaxConns: { 'type': 'array', 'itemType': DescribePortMaxConnsResponseBodyPortMaxConns },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.portMaxConns)) {
      $dara.Model.validateArray(this.portMaxConns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

