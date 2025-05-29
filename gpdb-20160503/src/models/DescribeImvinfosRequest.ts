// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIMVInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  database?: string;
  /**
   * @remarks
   * The name of MV
   * 
   * @example
   * public."mv1"
   */
  MVName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      MVName: 'MVName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      MVName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

