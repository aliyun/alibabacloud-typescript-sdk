// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOutlineBindingRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * testdb
   */
  databaseName?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * - When the value is set to True, the throttling information in the database is queried based on the SQL ID.   
   * - When the value is set to False, the bound index or execution plan in the database is queried based on the SQL ID.
   * 
   * @example
   * false
   */
  isConcurrentLimit?: boolean;
  /**
   * @remarks
   * SQLID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
  /**
   * @remarks
   * The name of the tenant.    
   * It must start with a letter or an underscore (_), and contain 2 to 20 characters, which can be uppercase letters, lowercase letters, digits, and underscores (_). It cannot be set to SYS.
   * 
   * This parameter is required.
   * 
   * @example
   * pay_online
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * t2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      instanceId: 'InstanceId',
      isConcurrentLimit: 'IsConcurrentLimit',
      SQLId: 'SQLId',
      tableName: 'TableName',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      instanceId: 'string',
      isConcurrentLimit: 'boolean',
      SQLId: 'string',
      tableName: 'string',
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

