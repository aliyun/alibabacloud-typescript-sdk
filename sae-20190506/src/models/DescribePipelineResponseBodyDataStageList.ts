// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePipelineResponseBodyDataStageListTaskList } from "./DescribePipelineResponseBodyDataStageListTaskList";


export class DescribePipelineResponseBodyDataStageList extends $dara.Model {
  /**
   * @remarks
   * The execution type of the stage. Valid values:
   * 
   * *   **0**: in sequence.
   * *   **1**: in parallel.
   * 
   * @example
   * 0
   */
  executorType?: number;
  /**
   * @remarks
   * The ID of the stage.
   * 
   * @example
   * c3a55592-4c30-4d84-ac2d-e98c18ec****
   */
  stageId?: string;
  /**
   * @remarks
   * The name of the stage.
   * 
   * @example
   * Deploy an application
   */
  stageName?: string;
  /**
   * @remarks
   * The status of the batch processing stage. Valid values:
   * 
   * *   **0**: The batch is prepared for this processing stage.
   * *   **1**: The task is being executed.
   * *   **2**: successful
   * *   **3**: The processing failed in this stage.
   * *   **6**: The processing stage was terminated.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The list of task statuses.
   */
  taskList?: DescribePipelineResponseBodyDataStageListTaskList[];
  static names(): { [key: string]: string } {
    return {
      executorType: 'ExecutorType',
      stageId: 'StageId',
      stageName: 'StageName',
      status: 'Status',
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorType: 'number',
      stageId: 'string',
      stageName: 'string',
      status: 'number',
      taskList: { 'type': 'array', 'itemType': DescribePipelineResponseBodyDataStageListTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

