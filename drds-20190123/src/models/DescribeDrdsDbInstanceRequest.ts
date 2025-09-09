// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsDbInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom ApsaraDB RDS for MySQL instance that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-bp1t1mk5a5bdj****
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * drds_test
   */
  dbName?: string;
  /**
   * @remarks
   * The name of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drdshbga1138****
   */
  drdsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      dbInstanceId: 'DbInstanceId',
      dbName: 'DbName',
      drdsInstanceId: 'DrdsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbInstanceId: 'string',
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

