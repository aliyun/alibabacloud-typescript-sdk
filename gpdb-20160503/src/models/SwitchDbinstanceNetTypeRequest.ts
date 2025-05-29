// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchDBInstanceNetTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The prefix of the custom endpoint.
   * 
   * *   The prefix can contain lowercase letters, digits, and hyphens (-) and must start with a lowercase letter.
   * *   The prefix can be up to 30 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * test1234
   */
  connectionStringPrefix?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/2361776.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The port number.
   * 
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStringPrefix: 'ConnectionStringPrefix',
      DBInstanceId: 'DBInstanceId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStringPrefix: 'string',
      DBInstanceId: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

