// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePipelineResponseBodyDataStageList } from "./DescribePipelineResponseBodyDataStageList";


export class DescribePipelineResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The status of the change order for the batch.
   * 
   * @example
   * Successful
   */
  coStatus?: string;
  /**
   * @remarks
   * The ID of the batch processing stage.
   * 
   * @example
   * c3a55592-4c30-4d84-ac2d-e98c18ec****
   */
  currentStageId?: string;
  /**
   * @remarks
   * The ID of the next batch.
   * 
   * @example
   * b77b1c98-5772-4f05-95fc-c7bee5fa****
   */
  nextPipelineId?: string;
  /**
   * @remarks
   * The ID of the batch.
   * 
   * @example
   * 917660ba-5092-44ca-b8e0-80012c96****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The name of the batch.
   * 
   * @example
   * First batch
   */
  pipelineName?: string;
  /**
   * @remarks
   * The batch status. Valid values:
   * 
   * *   **0**: The batch is prepared for processing.
   * *   **1**: The task is being executed.
   * *   **2**: successful
   * *   **3**: The processing failed in this stage.
   * *   **6**: The batch processing was terminated.
   * *   **10**: The batch could not be processed due to a system exception.
   * 
   * @example
   * 2
   */
  pipelineStatus?: number;
  /**
   * @remarks
   * Indicates whether to start processing the next batch. Valid values:
   * 
   * *   **false**: indicates that the next batch cannot be processed yet.
   * *   **true**: indicates that the next batch can be processed now.
   * 
   * @example
   * false
   */
  showBatch?: boolean;
  /**
   * @remarks
   * The list of batch processing stages.
   */
  stageList?: DescribePipelineResponseBodyDataStageList[];
  static names(): { [key: string]: string } {
    return {
      coStatus: 'CoStatus',
      currentStageId: 'CurrentStageId',
      nextPipelineId: 'NextPipelineId',
      pipelineId: 'PipelineId',
      pipelineName: 'PipelineName',
      pipelineStatus: 'PipelineStatus',
      showBatch: 'ShowBatch',
      stageList: 'StageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coStatus: 'string',
      currentStageId: 'string',
      nextPipelineId: 'string',
      pipelineId: 'string',
      pipelineName: 'string',
      pipelineStatus: 'number',
      showBatch: 'boolean',
      stageList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageList },
    };
  }

  validate() {
    if(Array.isArray(this.stageList)) {
      $dara.Model.validateArray(this.stageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

