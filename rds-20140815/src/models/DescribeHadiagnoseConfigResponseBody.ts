// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHADiagnoseConfigResponseBody extends $dara.Model {
  requestId?: string;
  tcpConnectionType?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tcpConnectionType: 'TcpConnectionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tcpConnectionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

