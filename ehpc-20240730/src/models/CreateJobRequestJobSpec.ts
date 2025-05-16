// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateJobRequestJobSpecResources } from "./CreateJobRequestJobSpecResources";


export class CreateJobRequestJobSpec extends $dara.Model {
  /**
   * @remarks
   * The jobs in the queue.
   * 
   * Format: X-Y:Z. X is the minimum index value. Y is the maximum index value. Z is the step size. For example, 2-7:2 indicates that three jobs need to be run and their index values are 2, 4, and 6.
   * 
   * @example
   * 1-5:2
   */
  arrayRequest?: string;
  /**
   * @remarks
   * The command or script that is used to run the job. If you want to use a command, you must specify the full path of the command, for example, /bin/ping.
   * 
   * If you want to use a script, you must make sure that you have the execution permissions on it. By default, the user root directory ~/ is used as the default script path on the cluster side. If your script is not in that directory, you must specify the full path in this parameter, such as /home/xxx/job.sh Note that in this mode, if requirements on resources such as CPU and memory are specified in the script, the job will be run based on the resource requirements specified in the script. In this case, do not specify resource requirements in the Resource parameter. Otherwise, the job may fail to run.
   * 
   * If you want to run the job directly by using the CLI, you must specify the absolute path of the command and add two hyphens and a space (-- ) before the path, such as -- /bin/ping -c 10 localhost.
   * 
   * This parameter is required.
   * 
   * @example
   * /home/xxx/test.job
   */
  commandLine?: string;
  /**
   * @remarks
   * The queue to which the job belongs.
   * 
   * @example
   * comp
   */
  jobQueue?: string;
  /**
   * @remarks
   * The post-processing command of the job.
   * 
   * @example
   * /bin/sleep 10
   */
  postCmdLine?: string;
  /**
   * @remarks
   * The job priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The resource configurations of the job.
   */
  resources?: CreateJobRequestJobSpecResources;
  /**
   * @remarks
   * The cluster-side user as which you want to submit the job.
   * 
   * @example
   * testuser
   */
  runasUser?: string;
  /**
   * @remarks
   * The password of the user specified by the RunasUser parameter.
   * 
   * @example
   * xxx
   */
  runasUserPassword?: string;
  /**
   * @remarks
   * The path of the standard error output file of the job. You need to specify the full path.
   * 
   * @example
   * /home/xxx/job.err
   */
  stderrPath?: string;
  /**
   * @remarks
   * The path of the standard output file of the job. You need to specify the full path.
   * 
   * @example
   * /home/xxx/job.out
   */
  stdoutPath?: string;
  /**
   * @remarks
   * The environment variables of the job. The value is a string in the JSON array format. Each array member is a JSON object that contains two members: Name and Value. Name indicates the name of the environment variable, and Value indicates the value of the environment variable.
   * 
   * @example
   * [{"Name":"x", "Value":"y"}]
   */
  variables?: string;
  /**
   * @remarks
   * The maximum duration for which the job can be run. Format: `hour: minute: second`. For example, `01:00:00` indicates 1 hour.
   * 
   * @example
   * 360:48:50
   */
  wallTime?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      commandLine: 'CommandLine',
      jobQueue: 'JobQueue',
      postCmdLine: 'PostCmdLine',
      priority: 'Priority',
      resources: 'Resources',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      stderrPath: 'StderrPath',
      stdoutPath: 'StdoutPath',
      variables: 'Variables',
      wallTime: 'WallTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      commandLine: 'string',
      jobQueue: 'string',
      postCmdLine: 'string',
      priority: 'string',
      resources: CreateJobRequestJobSpecResources,
      runasUser: 'string',
      runasUserPassword: 'string',
      stderrPath: 'string',
      stdoutPath: 'string',
      variables: 'string',
      wallTime: 'string',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

