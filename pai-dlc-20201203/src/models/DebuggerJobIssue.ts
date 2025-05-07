// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebuggerJobIssue extends $dara.Model {
  /**
   * @example
   * {"Name": "CPUBottleneck",  "Triggered": 10, "Violations": 2,  "Details": "{}"}
   */
  debuggerJobIssue?: string;
  /**
   * @example
   * 2021-01-12T14:35:00Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * de-826ca1bcfba30
   */
  jobDebuggerIssueId?: string;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @example
   * 1002300
   */
  reasonCode?: string;
  /**
   * @example
   * GPU利用率低
   */
  reasonMessage?: string;
  /**
   * @example
   * ProfileReport
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      debuggerJobIssue: 'DebuggerJobIssue',
      gmtCreateTime: 'GmtCreateTime',
      jobDebuggerIssueId: 'JobDebuggerIssueId',
      jobId: 'JobId',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuggerJobIssue: 'string',
      gmtCreateTime: 'string',
      jobDebuggerIssueId: 'string',
      jobId: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

