// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSemanticJobLogRequest extends $dara.Model {
  /**
   * @remarks
   * The executor job ID. Use the Data.ExecutorJobId from the RunSemanticJob response or the ExecutorJobId from a ListSemanticJobRuns record.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-job-demo
   */
  executorJobId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the job belongs. Use the ProjectId from the CreateSemanticJob response or a ListSemanticJobs list item.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      executorJobId: 'ExecutorJobId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorJobId: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

