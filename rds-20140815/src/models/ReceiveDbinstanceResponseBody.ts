// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReceiveDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the disaster recovery instance after the switchover.
   * 
   * @example
   * rm-tr2whku*****
   */
  guardDBInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EFB6083A-7699-489B-8278-C0CB4793A96E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      guardDBInstanceId: 'GuardDBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guardDBInstanceId: 'string',
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

