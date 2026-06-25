// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportJobsRequest extends $dara.Model {
  /**
   * @remarks
   * Determines whether to automatically create the Application if it does not exist.
   * 
   * @example
   * true
   */
  autoCreateApp?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The jobs to import, formatted as a JSON string.
   * 
   * @example
   * {
   *   "kind": "SchedulerXJobs",
   *   "type": "JSON",
   *   "version": "2.0",
   *   "content": [
   *     {
   *       "appName": "xxl-job-executor-perf-test-xx",
   *       "groupId": "xxl-job-executor-perf-test-xx",
   *       "description": "xxl-job-executor-xx",
   *       "jobConfigInfo": [
   *         {
   *           "jobHandler": "testJobVoidHandler",
   *           "dataOffset": 0,
   *           "executeMode": "standalone",
   *           "monitorConfigInfo": {
   *             "alarmType": "CustomContacts",
   *             "failLimitTimes": 1,
   *             "failEnable": true,
   *             "failRate": 100,
   *             "timeoutKillEnable": false,
   *             "missWorkerEnable": false,
   *             "sendChannel": "webhook",
   *             "timeoutEnable": true,
   *             "timeout": 7200,
   *             "daysOfDeadline": 0,
   *             "successNotice": false
   *           },
   *           "attemptInterval": 30,
   *           "cleanMode": "{\\"cleanMode\\":\\"NUM_ONLY\\",\\"totalRemain\\":300}",
   *           "description": "",
   *           "routeStrategy": 1,
   *           "userName": "xx",
   *           "userId": "xx",
   *           "content": "{\\"jobHandler\\":\\"testJobVoidHandler\\"}",
   *           "maxConcurrency": 1,
   *           "maxAttempt": 0,
   *           "name": "perf_auto_test_0",
   *           "xattrs": "",
   *           "jobType": "xxljob",
   *           "contentType": 1,
   *           "parameters": "success-withMsg",
   *           "timeConfig": {
   *             "calendar": "",
   *             "dataOffset": 0,
   *             "timeType": 1,
   *             "paramMap": {},
   *             "timeExpression": "* * * * * ?"
   *           },
   *           "contactInfoList": [],
   *           "status": 0
   *         }
   *       ]
   *     }
   *   ]
   * }
   */
  content?: string;
  /**
   * @remarks
   * Determines whether to overwrite jobs if they already exist. The default is **true**.
   * 
   * - **true**: Overwrites existing jobs.
   * 
   * - **false**: Does not overwrite existing jobs.
   * 
   * @example
   * true
   */
  overwrite?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoCreateApp: 'AutoCreateApp',
      clusterId: 'ClusterId',
      content: 'Content',
      overwrite: 'Overwrite',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateApp: 'boolean',
      clusterId: 'string',
      content: 'string',
      overwrite: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

