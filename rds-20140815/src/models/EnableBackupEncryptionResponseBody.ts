// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableBackupEncryptionResponseBody extends $dara.Model {
  /**
   * @example
   * rm-wz951f7f******
   */
  DBInstanceId?: string;
  /**
   * @example
   * FCA65FA6-658A-5C43-96F4-D************
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

