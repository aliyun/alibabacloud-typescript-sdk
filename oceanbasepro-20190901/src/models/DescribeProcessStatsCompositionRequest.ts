// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessStatsCompositionRequest extends $dara.Model {
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.*.*.*
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  mergeDynamicSql?: boolean;
  /**
   * @remarks
   * The IP address of the server.
   * 
   * @example
   * 127.*.*.*
   */
  serverIp?: string;
  /**
   * @remarks
   * The SQL statement, which can contain LIKE clauses. You can specify only part of the clauses in the SQL statement.
   * 
   * @example
   * SELECT  ****   FROM ****   WHERE **** = ? AND **** = ?   ORDER BY **** ASC
   */
  sqlText?: string;
  /**
   * @remarks
   * The status of the session.
   * 
   * @example
   * ACTIVE
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  /**
   * @remarks
   * The user identifier (UID) of the OceanBase database.
   * 
   * @example
   * 139*************
   */
  UId?: string;
  /**
   * @remarks
   * The username of the database.
   * 
   * @example
   * ["test_user"]
   */
  users?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      instanceId: 'InstanceId',
      mergeDynamicSql: 'MergeDynamicSql',
      serverIp: 'ServerIp',
      sqlText: 'SqlText',
      status: 'Status',
      tenantId: 'TenantId',
      UId: 'UId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      instanceId: 'string',
      mergeDynamicSql: 'boolean',
      serverIp: 'string',
      sqlText: 'string',
      status: 'string',
      tenantId: 'string',
      UId: 'string',
      users: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

