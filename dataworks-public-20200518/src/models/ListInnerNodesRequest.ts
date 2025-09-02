// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInnerNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the node to which the inner nodes belong.
   * 
   * @example
   * liux_test_n****
   */
  nodeName?: string;
  /**
   * @remarks
   * The ID of the node group to which the inner nodes belong.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  outerNodeId?: number;
  /**
   * @remarks
   * The page number. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the node to which the inner nodes belong.
   * 
   * Valid values: 6 (Shell), 10 (ODPS SQL), 11 (ODPS MR), 23 (Data Integration), 24 (ODPS Script), 97 (PAI), 98 (node group), 99 (zero load), 221 (PyODPS 2), 225 (ODPS Spark), 227 (EMR Hive), 228 (EMR Spark), 229 (EMR Spark SQL), 230 (EMR MR), 239 (OSS object inspection), 257 (EMR Shell), 258 (EMR Spark Shell), 259 (EMR Presto), 260 (EMR Impala), 900 (real-time synchronization), 1002 (PAI inner node), 1089 (cross-tenant collaboration), 1091 (Hologres development), 1093 (Hologres SQL), 1100 (assignment), 1106 (for-each), and 1221 (PyODPS 3). You can call the ListNodes operation to query the type of the node.
   * 
   * @example
   * ODPS_SQL
   */
  programType?: string;
  /**
   * @remarks
   * The environment in which the node is run. Valid values: DEV and PROD. Default value: PROD.
   * 
   * @example
   * PROD
   */
  projectEnv?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      nodeName: 'NodeName',
      outerNodeId: 'OuterNodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      programType: 'ProgramType',
      projectEnv: 'ProjectEnv',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeName: 'string',
      outerNodeId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      programType: 'string',
      projectEnv: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

