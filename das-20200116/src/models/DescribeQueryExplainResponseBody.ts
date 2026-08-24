// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  argument?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  avgRowSize?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  definedValues?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  estimateCPU?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  estimateExecutions?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  estimateIO?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  estimateRows?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * 无
   */
  extra?: string;
  /**
   * @remarks
   * The ID of the query.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * A reserved field for the PostgreSQL engine.
   */
  indexList?: string[];
  /**
   * @remarks
   * The index actually used in the execution plan.
   * 
   * @example
   * PRIMARY
   */
  key?: string;
  /**
   * @remarks
   * The length of the index actually used.
   * 
   * @example
   * 3
   */
  keyLen?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  logicalOp?: string;
  /**
   * @remarks
   * A reserved field for the PolarDB X engine.
   */
  logicalPlanList?: string[];
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  nodeId?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  outputList?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  parallel?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  parent?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  physicalOp?: string;
  /**
   * @remarks
   * The indexes that might be used.
   * 
   * @example
   * test_idx
   */
  possibleKeys?: string;
  /**
   * @remarks
   * A reserved field for the PostgreSQL engine.
   * 
   * @example
   * 无
   */
  queryPlan?: string;
  /**
   * @remarks
   * The column used by the index.
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
   * The type of the query.
   * 
   * @example
   * SIMPLE
   */
  selectType?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  stmtId?: string;
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
   */
  stmtText?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  table?: string;
  /**
   * @remarks
   * A reserved field for the PostgreSQL engine.
   */
  tableList?: string[];
  /**
   * @remarks
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
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
   * A reserved field for the SQL Server engine.
   * 
   * @example
   * 无
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
   * The status code returned. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * List of execution plans.
   */
  data?: DescribeQueryExplainResponseBodyData[];
  /**
   * @remarks
   * The response message.
   * 
   * > If the request succeeds, this parameter returns Successful. If the request fails, this parameter returns error details such as an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded:
   * 
   * - **true**: The request succeeded.
   * 
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

