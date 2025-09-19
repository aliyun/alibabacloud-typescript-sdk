// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileProtectRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The handling method of the rule. Valid values:
   * 
   * 1.  pass: allow
   * 2.  alert
   * 
   * @example
   * pass
   */
  action?: string;
  /**
   * @remarks
   * The severity of alerts. Valid values:
   * 
   * *   0: does not generate alerts
   * *   1: sends notifications
   * *   2: suspicious
   * *   3: high-risk
   * 
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @remarks
   * The operations performed on the files.
   */
  fileOps?: string[];
  /**
   * @remarks
   * The paths to the monitored files.
   */
  filePaths?: string[];
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 44616
   */
  id?: number;
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The paths to the monitored processes.
   */
  procPaths?: string[];
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-000
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * 1.  0: disabled
   * 2.  1: enabled
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The switch ID of the rule.
   * 
   * @example
   * FILE_PROTECT_RULE_SWITCH_TYPE_0000
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      alertLevel: 'AlertLevel',
      fileOps: 'FileOps',
      filePaths: 'FilePaths',
      id: 'Id',
      platform: 'Platform',
      procPaths: 'ProcPaths',
      ruleName: 'RuleName',
      status: 'Status',
      switchId: 'SwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      alertLevel: 'number',
      fileOps: { 'type': 'array', 'itemType': 'string' },
      filePaths: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      platform: 'string',
      procPaths: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      status: 'number',
      switchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileOps)) {
      $dara.Model.validateArray(this.fileOps);
    }
    if(Array.isArray(this.filePaths)) {
      $dara.Model.validateArray(this.filePaths);
    }
    if(Array.isArray(this.procPaths)) {
      $dara.Model.validateArray(this.procPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileProtectRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetFileProtectRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0DF9057-67C5-574D-A2D2-0CA9AC74C4D3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetFileProtectRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

