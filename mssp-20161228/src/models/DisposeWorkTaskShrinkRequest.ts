// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisposeWorkTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Operator.
   * 
   * This parameter is required.
   * 
   * @example
   * WB01089929
   */
  operator?: string;
  /**
   * @remarks
   * Operation remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * 处理完成
   */
  optRemark?: string;
  /**
   * @remarks
   * Work order status.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  status?: number;
  /**
   * @remarks
   * Work order ID, multiple IDs separated by commas.
   * 
   * This parameter is required.
   * 
   * @example
   * 10310
   */
  taskIds?: string;
  workTaskAnalysisResultsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'Operator',
      optRemark: 'OptRemark',
      status: 'Status',
      taskIds: 'TaskIds',
      workTaskAnalysisResultsShrink: 'WorkTaskAnalysisResults',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      optRemark: 'string',
      status: 'number',
      taskIds: 'string',
      workTaskAnalysisResultsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

