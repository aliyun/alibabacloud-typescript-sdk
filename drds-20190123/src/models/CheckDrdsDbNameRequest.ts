// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDrdsDbNameRequest extends $dara.Model {
  /**
   * @remarks
   * DRDS database name
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * DRDS instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * drds********
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      drdsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

