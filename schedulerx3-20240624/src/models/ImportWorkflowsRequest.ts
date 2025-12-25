// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportWorkflowsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoCreateApp?: boolean;
  /**
   * @remarks
   * A short description of struct
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-a1804a3226d
   */
  clusterId?: string;
  /**
   * @example
   * [{"kind":"SchedulerXWorkflows","type":"JSON","version":"2.0","workflowInfo":{"name":"myWorkflow","description":"","appName":"xuerentest","appType":1,"maxConcurrency":1,"currentExecuteStatus":0,"timeConfig":{"timeType":1,"timeExpression":"0 0 12 * * ?","dataOffset":0}},"nodes":[{"name":"Java1","startTime":-1,"coordinate":{"x":-222.0,"y":40.0,"width":220.0,"height":76.0},"appName":"xuerentest","description":"","jobType":"xxljob","executeMode":"standalone","contentType":1,"content":"{\\"jobHandler\\":\\"helloworld\\"}","xattrs":"{\\"executorBlockStrategy\\":1}","dependentStrategy":1,"routeStrategy":1,"parameters":"","maxConcurrency":1,"maxAttempt":0,"attemptInterval":30,"priority":5,"weight":1,"timeConfig":{"timeType":1,"calendar":"","dataOffset":0},"monitorConfigInfo":{"timeoutEnable":true,"failEnable":true,"failLimitTimes":1,"failRate":100,"missWorkerEnable":true,"timeout":300,"timeoutKillEnable":false,"daysOfDeadline":0,"sendChannel":"","alarmType":"CustomContacts","successNotice":false,"endEarlyEnable":false,"endEarly":30},"contactInfoList":[]},{"name":"shell1","startTime":-1,"coordinate":{"x":102.0,"y":-51.0,"width":220.0,"height":76.0},"appName":"xuerentest","description":"","jobType":"script_shell","executeMode":"standalone","contentType":2,"content":"echo \\"hello world\\"","xattrs":"{\\"executorBlockStrategy\\":1}","dependentStrategy":1,"routeStrategy":1,"parameters":"","maxConcurrency":1,"maxAttempt":0,"attemptInterval":30,"priority":5,"weight":1,"timeConfig":{"timeType":1,"calendar":"","dataOffset":0},"monitorConfigInfo":{"timeoutEnable":true,"failEnable":true,"failLimitTimes":1,"failRate":100,"missWorkerEnable":true,"timeout":300,"timeoutKillEnable":false,"daysOfDeadline":0,"sendChannel":"","alarmType":"CustomContacts","successNotice":false,"endEarlyEnable":false,"endEarly":30},"contactInfoList":[]},{"name":"Java2","startTime":-1,"coordinate":{"x":390.0,"y":55.0,"width":220.0,"height":76.0},"appName":"xuerentest","description":"","jobType":"xxljob","executeMode":"standalone","contentType":1,"content":"{\\"jobHandler\\":\\"helloworld2\\"}","xattrs":"{\\"executorBlockStrategy\\":1,\\"localParams\\":[]}","dependentStrategy":1,"routeStrategy":1,"parameters":"","maxConcurrency":1,"maxAttempt":0,"attemptInterval":30,"priority":5,"weight":1,"timeConfig":{"timeType":1,"calendar":"","dataOffset":0},"monitorConfigInfo":{"timeoutEnable":true,"failEnable":true,"failLimitTimes":1,"failRate":100,"missWorkerEnable":true,"timeout":300,"timeoutKillEnable":false,"daysOfDeadline":0,"sendChannel":"","alarmType":"CustomContacts","successNotice":false,"endEarlyEnable":false,"endEarly":30},"contactInfoList":[]},{"name":"shell2","startTime":-1,"coordinate":{"x":89.0,"y":161.0,"width":220.0,"height":76.0},"appName":"xuerentest","description":"","jobType":"script_shell","executeMode":"standalone","contentType":2,"content":"echo \\"hello world2\\"","xattrs":"{\\"executorBlockStrategy\\":1}","dependentStrategy":1,"routeStrategy":1,"parameters":"","maxConcurrency":1,"maxAttempt":0,"attemptInterval":30,"priority":5,"weight":1,"timeConfig":{"timeType":1,"calendar":"","dataOffset":0},"monitorConfigInfo":{"timeoutEnable":true,"failEnable":true,"failLimitTimes":1,"failRate":100,"missWorkerEnable":true,"timeout":300,"timeoutKillEnable":false,"daysOfDeadline":0,"sendChannel":"","alarmType":"CustomContacts","successNotice":false,"endEarlyEnable":false,"endEarly":30},"contactInfoList":[]}],"edges":[{"from":"Java1","to":"shell1"},{"from":"Java1","to":"shell2"},{"from":"Schedulerx-Root","to":"Java1"},{"from":"shell1","to":"Java2"},{"from":"shell2","to":"Java2"}]}]
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

