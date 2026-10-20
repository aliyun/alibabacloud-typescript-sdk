// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExperimentPlanData extends $dara.Model {
  /**
   * @remarks
   * The creation time, in milliseconds.
   * 
   * @example
   * 1767225600000
   */
  createdAt?: number;
  /**
   * @remarks
   * The ID of the associated dataset.
   * 
   * @example
   * dataset-123456
   */
  datasetId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Customer service Q&A offline evaluation plan
   */
  description?: string;
  /**
   * @remarks
   * The number of experiment executions under this plan.
   * 
   * @example
   * 3
   */
  experimentCount?: number;
  /**
   * @remarks
   * The experiment type: offline (offline experiment) or online (online experiment).
   * 
   * @example
   * offline
   */
  experimentType?: string;
  /**
   * @remarks
   * The name of the associated data processing pipeline. This field is empty if no pipeline is associated. After a pipeline is associated, when an experiment under this plan completes and writes experiment results to the Logstore, the system filters by the traceId of the current experiment trace and calls PreviewPipeline to write the results processed by the pipeline.
   * 
   * @example
   * trace-process-pipeline
   */
  pipelineName?: string;
  /**
   * @remarks
   * The experiment plan ID.
   * 
   * @example
   * exp-plan-e95bff54685a4ae29ff3a834c1008a71
   */
  planId?: string;
  /**
   * @remarks
   * The experiment plan name.
   * 
   * @example
   * customer-service-eval
   */
  planName?: string;
  /**
   * @remarks
   * The custom query SQL clause in dataset-partial mode.
   * 
   * @example
   * level > 2
   */
  querySql?: string;
  /**
   * @remarks
   * The status: pending, running, or stopped.
   * 
   * @example
   * pending
   */
  status?: string;
  /**
   * @remarks
   * The update time, in milliseconds.
   * 
   * @example
   * 1767229200000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      datasetId: 'datasetId',
      description: 'description',
      experimentCount: 'experimentCount',
      experimentType: 'experimentType',
      pipelineName: 'pipelineName',
      planId: 'planId',
      planName: 'planName',
      querySql: 'querySql',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      datasetId: 'string',
      description: 'string',
      experimentCount: 'number',
      experimentType: 'string',
      pipelineName: 'string',
      planId: 'string',
      planName: 'string',
      querySql: 'string',
      status: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

