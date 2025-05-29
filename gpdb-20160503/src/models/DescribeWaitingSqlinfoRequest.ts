// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWaitingSQLInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the instance IDs of all AnalyticDB for PostgreSQL instances in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  database?: string;
  /**
   * @remarks
   * The ID of the process that uniquely identifies the query.
   * 
   * >  You can call the [DescribeWaitingSQLRecords](https://help.aliyun.com/document_detail/461735.html) operation to obtain the process IDs of lock-waiting queries.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  PID?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      database: 'Database',
      PID: 'PID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      database: 'string',
      PID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

