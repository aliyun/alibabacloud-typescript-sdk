// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRequestDiagnosisRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * das
   */
  database?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-0iwhhl8gx0ld6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * >  This parameter must be specified for PolarDB for MySQL, PolarDB for PostgreSQL (Compatible with Oracle), and ApsaraDB for MongoDB instances.
   * 
   * @example
   * 202****
   */
  nodeId?: string;
  /**
   * @remarks
   * The SQL statement that you want to diagnose.
   * 
   * This parameter is required.
   * 
   * @example
   * select * from test where name = \\"mockUser\\"
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      instanceId: 'string',
      nodeId: 'string',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

