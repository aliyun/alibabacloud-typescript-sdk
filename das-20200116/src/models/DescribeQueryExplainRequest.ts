// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * dbtest01
   */
  dbName?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * > For PolarDB for MySQL instances, if you specify a node ID, the system queries the execution plan on that node. Otherwise, it queries the execution plan on a secondary node.For high availability ApsaraDB RDS for MySQL instances, if you specify an instance ID, the system queries the execution plan on that node. Otherwise, it queries the execution plan on a secondary node.
   * 
   * @example
   * pi-bp1v203xzzh0a****
   */
  nodeId?: string;
  /**
   * @remarks
   * Schema information. This is a reserved parameter.
   * 
   * @example
   * 无
   */
  schema?: string;
  /**
   * @remarks
   * The SQL statement for which you want to get the execution plan.
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

