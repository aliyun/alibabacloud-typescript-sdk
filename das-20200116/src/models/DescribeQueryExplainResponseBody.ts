// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  argument?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  avgRowSize?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  definedValues?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  estimateCPU?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  estimateExecutions?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  estimateIO?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  estimateRows?: string;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * None
   */
  extra?: string;
  /**
   * @remarks
   * The query ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The reserved field for the PostgreSQL engine.
   */
  indexList?: string[];
  /**
   * @remarks
   * The index that is actually used in the execution plan.
   * 
   * @example
   * PRIMARY
   */
  key?: string;
  /**
   * @remarks
   * The length of the used index.
   * 
   * @example
   * 3
   */
  keyLen?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  logicalOp?: string;
  /**
   * @remarks
   * The reserved field for the PolarDB-X engine.
   */
  logicalPlanList?: string[];
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  nodeId?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  outputList?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  parallel?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  parent?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  physicalOp?: string;
  /**
   * @remarks
   * The possible indexes.
   * 
   * @example
   * test_idx
   */
  possibleKeys?: string;
  /**
   * @remarks
   * The reserved field for the PostgreSQL engine.
   * 
   * @example
   * None
   */
  queryPlan?: string;
  /**
   * @remarks
   * The columns used with the index.
   * 
   * @example
   * test_column
   */
  ref?: string;
  /**
   * @remarks
   * The number of rows to scan.
   * 
   * @example
   * 1000
   */
  rows?: string;
  /**
   * @remarks
   * The select type.
   * 
   * @example
   * SIMPLE
   */
  selectType?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  stmtId?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  stmtText?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test
   */
  table?: string;
  /**
   * @remarks
   * The reserved field for the PostgreSQL engine.
   */
  tableList?: string[];
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  totalSubtreeCost?: string;
  /**
   * @remarks
   * The join type.
   * 
   * @example
   * eq_ref
   */
  type?: string;
  /**
   * @remarks
   * The reserved field for the SQL Server engine.
   * 
   * @example
   * None
   */
  warnings?: string;
  static names(): { [key: string]: string } {
    return {
      argument: 'Argument',
      avgRowSize: 'AvgRowSize',
      definedValues: 'DefinedValues',
      estimateCPU: 'EstimateCPU',
      estimateExecutions: 'EstimateExecutions',
      estimateIO: 'EstimateIO',
      estimateRows: 'EstimateRows',
      extra: 'Extra',
      id: 'Id',
      indexList: 'IndexList',
      key: 'Key',
      keyLen: 'KeyLen',
      logicalOp: 'LogicalOp',
      logicalPlanList: 'LogicalPlanList',
      nodeId: 'NodeId',
      outputList: 'OutputList',
      parallel: 'Parallel',
      parent: 'Parent',
      physicalOp: 'PhysicalOp',
      possibleKeys: 'PossibleKeys',
      queryPlan: 'QueryPlan',
      ref: 'Ref',
      rows: 'Rows',
      selectType: 'SelectType',
      stmtId: 'StmtId',
      stmtText: 'StmtText',
      table: 'Table',
      tableList: 'TableList',
      totalSubtreeCost: 'TotalSubtreeCost',
      type: 'Type',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argument: 'string',
      avgRowSize: 'string',
      definedValues: 'string',
      estimateCPU: 'string',
      estimateExecutions: 'string',
      estimateIO: 'string',
      estimateRows: 'string',
      extra: 'string',
      id: 'string',
      indexList: { 'type': 'array', 'itemType': 'string' },
      key: 'string',
      keyLen: 'string',
      logicalOp: 'string',
      logicalPlanList: { 'type': 'array', 'itemType': 'string' },
      nodeId: 'string',
      outputList: 'string',
      parallel: 'string',
      parent: 'string',
      physicalOp: 'string',
      possibleKeys: 'string',
      queryPlan: 'string',
      ref: 'string',
      rows: 'string',
      selectType: 'string',
      stmtId: 'string',
      stmtText: 'string',
      table: 'string',
      tableList: { 'type': 'array', 'itemType': 'string' },
      totalSubtreeCost: 'string',
      type: 'string',
      warnings: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.indexList)) {
      $dara.Model.validateArray(this.indexList);
    }
    if(Array.isArray(this.logicalPlanList)) {
      $dara.Model.validateArray(this.logicalPlanList);
    }
    if(Array.isArray(this.tableList)) {
      $dara.Model.validateArray(this.tableList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQueryExplainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List<ExplainedSqlDO>
   */
  data?: DescribeQueryExplainResponseBodyData[];
  /**
   * @remarks
   * The message returned for the request.
   * > If the request is successful, Successful is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeQueryExplainResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

