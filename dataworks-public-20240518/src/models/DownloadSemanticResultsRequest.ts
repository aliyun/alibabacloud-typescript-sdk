// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSemanticResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The node name. Use the Data.Name value from the CreateSemanticJob response, the Name value from a ListSemanticJobs list item, or the JobName value from a ListSemanticJobRuns record.
   * 
   * This parameter is required.
   * 
   * @example
   * semantic-job-demo
   */
  jobName?: string;
  /**
   * @remarks
   * The optional run ID. If you specify the Data.JobRunId value from the RunSemanticJob response or the JobRunId value from a ListSemanticJobRuns record, only the artifacts of that specific run are returned. If you do not specify this parameter, the artifacts of the latest run of the node are returned.
   * 
   * @example
   * 01H00000000000000000000000
   */
  jobRunId?: string;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      jobRunId: 'JobRunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      jobRunId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

