// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePortMaxConnsResponseBodyPortMaxConns extends $dara.Model {
  cps?: number;
  ip?: string;
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
  portMaxConns?: DescribePortMaxConnsResponseBodyPortMaxConns[];
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

