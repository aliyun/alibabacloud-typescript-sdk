// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * llm_train
   */
  algorithmName?: string;
  /**
   * @remarks
   * The algorithm provider.
   * 
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The end time of the job creation time range for the query. Default value: current time.
   * 
   * @example
   * 2023-12-27T02:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether the algorithm is a temporary algorithm.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  isTempAlgo?: boolean;
  /**
   * @remarks
   * The labels of the training job.
   * 
   * @example
   * {"project": "sd-s3"}
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number for paging.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field by which to sort the results.
   * 
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the job creation time range for the query. Default value: 7 days ago.
   * 
   * @example
   * 2024-06-22T01:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the training job.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The training job ID.
   * 
   * @example
   * trains930928remn
   */
  trainingJobId?: string;
  /**
   * @remarks
   * The name of the training job.
   * 
   * @example
   * large_language_model_training
   */
  trainingJobName?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      endTime: 'EndTime',
      isTempAlgo: 'IsTempAlgo',
      labelsShrink: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      endTime: 'string',
      isTempAlgo: 'boolean',
      labelsShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

