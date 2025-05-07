// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeChangeOrderResponseBodyDataPipelines extends $dara.Model {
  /**
   * @remarks
   * The batch type.
   * 
   * @example
   * 0
   */
  batchType?: number;
  /**
   * @remarks
   * The number of parallel tasks in a batch.
   * 
   * @example
   * 0
   */
  parallelCount?: number;
  /**
   * @remarks
   * The ID of the batch.
   * 
   * @example
   * 0e4acf82-c9b1-4c1e-ac28-55776338****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The name of the batch.
   * 
   * @example
   * Batch 1 Change
   */
  pipelineName?: string;
  /**
   * @remarks
   * The time when the batch processing started.
   * 
   * @example
   * 1562831689704
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the batch. Valid values:
   * 
   * *   **0**: The batch is being prepared.
   * *   **1**: The batch is being processed.
   * *   **2**: The batch was processed.
   * *   **3**: The batch failed to be processed.
   * *   **6**: The batch processing was terminated.
   * *   **8**: The execution process is pending. You must manually release the batch.
   * *   **9**: The execution process is pending. SAE will automatically release the batch.
   * *   **10**: The batch failed to be processed due to a system exception.
   * *   **11**: The batch is pending approval.
   * *   **12**: The batch is approved and is pending execution.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The time when the batch information was last modified.
   * 
   * @example
   * 1562847178007
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      batchType: 'BatchType',
      parallelCount: 'ParallelCount',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      startTime: 'StartTime',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchType: 'number',
      parallelCount: 'number',
      pipelineId: 'string',
      pipelineName: 'string',
      startTime: 'number',
      status: 'number',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

