// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHADiagnoseConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06B220E2-EAC5-4DBE-A1FC-1B62DB6A****
   */
  requestId?: string;
  /**
   * @remarks
   * The availability check method that Alibaba Cloud uses for the ApsaraDB RDS instance. Valid values:
   * - **LONG**: persistent connection.
   * - **SHORT**: short-lived connection.
   * 
   * @example
   * LONG
   */
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

