// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceNetTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The endpoint that is used to connect to the instance after the switch of endpoints.
   * 
   * @example
   * new**********.mysql.rds.aliyuncs.com
   */
  newConnectionString?: string;
  /**
   * @remarks
   * The endpoint that is used to connect to the instance before the switch of endpoints.
   * 
   * @example
   * rm-bp1**************.mysql.rds.aliyuncs.com
   */
  oldConnectionString?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 65BDA532-28AF-4122-AA39-B382721EEE64
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      newConnectionString: 'NewConnectionString',
      oldConnectionString: 'OldConnectionString',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newConnectionString: 'string',
      oldConnectionString: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

