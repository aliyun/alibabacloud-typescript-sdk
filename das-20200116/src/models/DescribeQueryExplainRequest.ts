// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainRequest extends $dara.Model {
  /**
   * @example
   * dbtest01
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @example
   * pi-bp1v203xzzh0a****
   */
  nodeId?: string;
  schema?: string;
  /**
   * @remarks
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

