// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDataCheckConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform full-table validation. Valid values:
   * 
   * - 0: partition-level comparison.
   * - 1: full-table comparison.
   * 
   * @example
   * 0
   */
  isFullTableCount?: number;
  /**
   * @remarks
   * The columns of the source table. You can specify multiple columns separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  sourceColumns?: string;
  /**
   * @remarks
   * The GROUP condition of the source table.
   * 
   * @example
   * col_a,col_b
   */
  sourceGroupClause?: string;
  /**
   * @remarks
   * The hint for the source.
   */
  sourceHint?: string;
  /**
   * @remarks
   * The partition of the source table.
   * 
   * @example
   * ds=20260116
   */
  sourcePartition?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * table_demo
   */
  sourceTable?: string;
  /**
   * @remarks
   * The WHERE condition of the source table.
   * 
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  sourceWhereClause?: string;
  /**
   * @remarks
   * The columns of the target table. You can specify multiple columns separated by commas (,).
   * 
   * @example
   * col_a,col_b
   */
  targetColumns?: string;
  /**
   * @remarks
   * The GROUP condition of the target table.
   * 
   * @example
   * col_a,col_b
   */
  targetGroupClause?: string;
  /**
   * @remarks
   * The hint for the target.
   */
  targetHint?: string;
  /**
   * @remarks
   * The partition of the target table.
   * 
   * @example
   * ds=20260116
   */
  targetPartition?: string;
  /**
   * @remarks
   * The name of the target table.
   * 
   * @example
   * table_demo
   */
  targetTable?: string;
  /**
   * @remarks
   * The WHERE condition of the target table.
   * 
   * @example
   * col_a > 0 and col_b = \\"x\\"
   */
  targetWhereClause?: string;
  /**
   * @remarks
   * The batch table configurations for same-pattern creation (`taskMode=1`). Separate multiple configurations with a line break (`
   * `).
   * 
   * @example
   * lhm|lhm_dw|*
   */
  taskConfigInfo?: string;
  /**
   * @remarks
   * The ID of the validation task.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  /**
   * @remarks
   * The total data volume comparison threshold.
   * 
   * @example
   * 0.5
   */
  totalCountThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      isFullTableCount: 'isFullTableCount',
      sourceColumns: 'sourceColumns',
      sourceGroupClause: 'sourceGroupClause',
      sourceHint: 'sourceHint',
      sourcePartition: 'sourcePartition',
      sourceTable: 'sourceTable',
      sourceWhereClause: 'sourceWhereClause',
      targetColumns: 'targetColumns',
      targetGroupClause: 'targetGroupClause',
      targetHint: 'targetHint',
      targetPartition: 'targetPartition',
      targetTable: 'targetTable',
      targetWhereClause: 'targetWhereClause',
      taskConfigInfo: 'taskConfigInfo',
      taskId: 'taskId',
      totalCountThreshold: 'totalCountThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFullTableCount: 'number',
      sourceColumns: 'string',
      sourceGroupClause: 'string',
      sourceHint: 'string',
      sourcePartition: 'string',
      sourceTable: 'string',
      sourceWhereClause: 'string',
      targetColumns: 'string',
      targetGroupClause: 'string',
      targetHint: 'string',
      targetPartition: 'string',
      targetTable: 'string',
      targetWhereClause: 'string',
      taskConfigInfo: 'string',
      taskId: 'number',
      totalCountThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

