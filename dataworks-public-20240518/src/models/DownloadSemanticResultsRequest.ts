// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadSemanticResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The job name. You can obtain this value from Data.Name in the CreateSemanticJob response, Name in the ListSemanticJobs response, or JobName in the ListSemanticJobRuns response.
   * 
   * This parameter is required.
   * 
   * @example
   * semantic-job-demo
   */
  jobName?: string;
  /**
   * @remarks
   * The optional run ID. If you specify the JobRunId from the RunSemanticJob response (Data.JobRunId) or the ListSemanticJobRuns response, only the artifacts of the specified run are returned. If you do not specify this parameter, the artifacts of the most recent run of the job are returned.
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

