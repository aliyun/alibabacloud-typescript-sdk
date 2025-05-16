// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobsResponseBodyJobsJobSpecResources } from "./ListJobsResponseBodyJobsJobSpecResources";
import { ListJobsResponseBodyJobsJobSpecResourcesActualOccupied } from "./ListJobsResponseBodyJobsJobSpecResourcesActualOccupied";


export class ListJobsResponseBodyJobsJobSpec extends $dara.Model {
  /**
   * @remarks
   * The array job ID.
   * 
   * @example
   * 4
   */
  arrayJobId?: string;
  /**
   * @remarks
   * The ID of the job in the array.
   * 
   * @example
   * 1
   */
  arrayJobSubId?: string;
  /**
   * @remarks
   * The queue format of the job.
   * 
   * *   If the job is not in a queue, the output is empty.
   * *   The format is X-Y:Z. X indicates the first index, Y indicates the final index, and Z indicates the step size. For example, 2-7:2 indicates three sub-jobs numbered 2, 4, and 6.
   * 
   * @example
   * 1-5:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * jobDescription
   */
  comment?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 12
   */
  id?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * comp
   */
  jobQueue?: string;
  /**
   * @remarks
   * The time when the job was last updated.
   * 
   * @example
   * 1724123085
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The compute nodes that were used to run the job.
   * 
   * @example
   * compute[002,005,003]
   */
  nodeList?: string;
  /**
   * @remarks
   * The job priority. Valid values: 0 to 9. A larger value indicates a higher priority.
   * 
   * @example
   * 0
   */
  priority?: string;
  /**
   * @remarks
   * The information about the resources required to run the job.
   */
  resources?: ListJobsResponseBodyJobsJobSpecResources;
  /**
   * @remarks
   * Actual resource usage of the job program
   */
  resourcesActualOccupied?: ListJobsResponseBodyJobsJobSpecResourcesActualOccupied;
  /**
   * @remarks
   * The user that ran the job.
   * 
   * @example
   * testuser1
   */
  runasUser?: string;
  /**
   * @remarks
   * Job start time.
   * 
   * @example
   * 1724122486
   */
  startTime?: string;
  /**
   * @remarks
   * The job state. Valid values: (PBS cluster and Slurm cluster)
   * 
   * *   FINISHED/Completed
   * *   RUNNING/Running
   * *   QUEUED/Pending
   * *   FAILED/Failed
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The error output path.
   * 
   * @example
   * ./Temp
   */
  stderrPath?: string;
  /**
   * @remarks
   * The standard output path.
   * 
   * @example
   * ./Temp
   */
  stdoutPath?: string;
  /**
   * @remarks
   * The time when the job was submitted.
   * 
   * @example
   * 1724122486
   */
  submitTime?: string;
  /**
   * @remarks
   * The variables of the job.
   * 
   * @example
   * {"PBS_O_SHELL":"/bin/bash", 	"PBS_O_HOST":"manager", 	"PBS_O_SYSTEM":"Linux", 	"PBS_O_LANG":"en_US.UTF-8", 	"PBS_O_QUEUE":"workq"}
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayJobId: 'ArrayJobId',
      arrayJobSubId: 'ArrayJobSubId',
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      jobQueue: 'JobQueue',
      lastModifyTime: 'LastModifyTime',
      nodeList: 'NodeList',
      priority: 'Priority',
      resources: 'Resources',
      resourcesActualOccupied: 'ResourcesActualOccupied',
      runasUser: 'RunasUser',
      startTime: 'StartTime',
      state: 'State',
      stderrPath: 'StderrPath',
      stdoutPath: 'StdoutPath',
      submitTime: 'SubmitTime',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayJobId: 'string',
      arrayJobSubId: 'string',
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      jobQueue: 'string',
      lastModifyTime: 'string',
      nodeList: 'string',
      priority: 'string',
      resources: ListJobsResponseBodyJobsJobSpecResources,
      resourcesActualOccupied: ListJobsResponseBodyJobsJobSpecResourcesActualOccupied,
      runasUser: 'string',
      startTime: 'string',
      state: 'string',
      stderrPath: 'string',
      stdoutPath: 'string',
      submitTime: 'string',
      variables: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    if(this.resourcesActualOccupied && typeof (this.resourcesActualOccupied as any).validate === 'function') {
      (this.resourcesActualOccupied as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

