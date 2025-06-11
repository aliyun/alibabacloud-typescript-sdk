// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The encoding standard of the database.
   * For more information, see the Charset field returned by the DescribeCharset operation.
   * 
   * @example
   * utf8mb4_general_ci
   */
  collation?: string;
  /**
   * @remarks
   * Alibaba Cloud CLI
   * 
   * This parameter is required.
   * 
   * @example
   * sms_pre
   */
  databaseName?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **CreateDatabase**.
   * 
   * @example
   * this is a test database
   */
  description?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * utf8mb4
   */
  encoding?: string;
  /**
   * @remarks
   * The collation.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the database.   
   * You cannot use reserved keywords, such as test and mysql.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      collation: 'Collation',
      databaseName: 'DatabaseName',
      description: 'Description',
      encoding: 'Encoding',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      collation: 'string',
      databaseName: 'string',
      description: 'string',
      encoding: 'string',
      instanceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

