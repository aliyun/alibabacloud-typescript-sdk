// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebuggerResult extends $dara.Model {
  /**
   * @example
   * {\"description\":\"这是一个新的pytorchjob模板\"}
   */
  debuggerConfigContent?: string;
  /**
   * @example
   * { "ProfileReport": { "Name": "CPUBottleneck","Triggered": 10,"Violations": 2,"Details": "{}"}, "LowCPU": { "Name": "CPUBottleneck","Triggered": 10,"Violations": 2,"Details": "{}"}}
   */
  debuggerJobIssues?: string;
  /**
   * @example
   * {"Running": 1, "Failed": 1, "Succeeded": 2}
   */
  debuggerJobStatus?: string;
  /**
   * @example
   * http://xxx.com/debug/report/download/new_xxxx.html
   */
  debuggerReportURL?: string;
  /**
   * @example
   * dlc debugger test
   */
  jobDisplayName?: string;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @example
   * 12344556
   */
  jobUserId?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerConfigContent: 'DebuggerConfigContent',
      debuggerJobIssues: 'DebuggerJobIssues',
      debuggerJobStatus: 'DebuggerJobStatus',
      debuggerReportURL: 'DebuggerReportURL',
      jobDisplayName: 'JobDisplayName',
      jobId: 'JobId',
      jobUserId: 'JobUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerConfigContent: 'string',
      debuggerJobIssues: 'string',
      debuggerJobStatus: 'string',
      debuggerReportURL: 'string',
      jobDisplayName: 'string',
      jobId: 'string',
      jobUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

