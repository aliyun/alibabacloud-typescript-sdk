// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportJobsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoCreateApp?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
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

