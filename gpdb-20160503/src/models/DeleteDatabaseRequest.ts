// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in the specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the queried database.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  databaseName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      databaseName: 'DatabaseName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      databaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

