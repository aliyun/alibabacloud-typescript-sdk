// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmoothExpandPreCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * *   RDS
   * *   POLARDB
   * 
   * This parameter is required.
   * 
   * @example
   * RDS
   */
  dbInstType?: string;
  /**
   * @remarks
   * The name of the PolarDB-X database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds*******
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstType: 'DbInstType',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstType: 'string',
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

