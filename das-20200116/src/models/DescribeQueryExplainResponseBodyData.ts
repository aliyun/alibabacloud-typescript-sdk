// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQueryExplainResponseBodyData extends $dara.Model {
  argument?: string;
  avgRowSize?: string;
  definedValues?: string;
  estimateCPU?: string;
  estimateExecutions?: string;
  estimateIO?: string;
  estimateRows?: string;
  extra?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  indexList?: string[];
  /**
   * @example
   * PRIMARY
   */
  key?: string;
  /**
   * @example
   * 3
   */
  keyLen?: string;
  logicalOp?: string;
  logicalPlanList?: string[];
  nodeId?: string;
  outputList?: string;
  parallel?: string;
  parent?: string;
  physicalOp?: string;
  /**
   * @example
   * test_idx
   */
  possibleKeys?: string;
  queryPlan?: string;
  /**
   * @example
   * test_column
   */
  ref?: string;
  /**
   * @example
   * 1000
   */
  rows?: string;
  /**
   * @example
   * SIMPLE
   */
  selectType?: string;
  stmtId?: string;
  stmtText?: string;
  /**
   * @example
   * test
   */
  table?: string;
  tableList?: string[];
  totalSubtreeCost?: string;
  /**
   * @example
   * eq_ref
   */
  type?: string;
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

