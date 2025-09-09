// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDbInstanceDbsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the privileged account of the PolarDB-X 1.0 instance. You do not need to specify this parameter if you have no privileged account.
   * 
   * @example
   * test
   */
  accountName?: string;
  /**
   * @remarks
   * The engine type of the storage-layer databases. Valid values: **POLARDB** and **RDS**.
   * 
   * @example
   * POLARDB
   */
  dbInstType?: string;
  /**
   * @remarks
   * The ID of the instance in which the storage-layer databases are deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-****************
   */
  dbInstanceId?: string;
  /**
   * @remarks
   * The ID of the PolarDB-X 1.0 instance.
   * 
   * This parameter is required.
   * 
   * @example
   * drds************
   */
  drdsInstanceId?: string;
  /**
   * @remarks
   * The password of the privileged account. You do not need to specify this parameter if you have no privileged account.
   * 
   * @example
   * pwd_111111
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      dbInstType: 'DbInstType',
      dbInstanceId: 'DbInstanceId',
      drdsInstanceId: 'DrdsInstanceId',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      dbInstType: 'string',
      dbInstanceId: 'string',
      drdsInstanceId: 'string',
      password: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

