// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTempDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 248DE93F-8647-4B9D-8287-4A4A0FE56AD5
   */
  requestId?: string;
  /**
   * @remarks
   * The temporary instance ID.
   * 
   * @example
   * sub138****_rm-******
   */
  tempDBInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tempDBInstanceId: 'TempDBInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tempDBInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

