// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbtest01
   */
  dbName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * > For a PolarDB for MySQL instance, if a instance ID is specified, the execution plan is queried on the specified node. Otherwise, the execution plan is queried on a secondary node.
   * > For an ApsaraDB RDS for MySQL High-availability Edition instance, if a instance ID is specified, the execution plan is queried on the specified node. Otherwise, the execution plan is queried on the secondary node.
   * 
   * @example
   * pi-bp1v203xzzh0a****
   */
  nodeId?: string;
  /**
   * @remarks
   * The schema information. This is a reserved parameter.
   * 
   * @example
   * None
   */
  schema?: string;
  /**
   * @remarks
   * The SQL statement for which to query the execution plan.
   * 
   * This parameter is required.
   * 
   * @example
   * select * from test where name = \\"mockUser\\"
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      schema: 'Schema',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      instanceId: 'string',
      nodeId: 'string',
      schema: 'string',
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

