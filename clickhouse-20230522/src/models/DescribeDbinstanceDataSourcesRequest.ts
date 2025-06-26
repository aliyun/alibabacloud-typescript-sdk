// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDataSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbtest
   */
  DBName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * tableTest
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBName: 'DBName',
      regionId: 'RegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBName: 'string',
      regionId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

