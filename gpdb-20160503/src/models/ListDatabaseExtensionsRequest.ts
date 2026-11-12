// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseExtensionsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the IDs of all AnalyticDB for PostgreSQL instances in the target region.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database name. The name must meet the following requirements:
   * - It can contain only letters, digits, and underscores (_).
   * - It must start with a letter.
   * - It can be up to 63 characters in length.
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

