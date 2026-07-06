// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanRuleResponseBodyScanRule extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2018-03-15T17:08Z
   */
  createTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-szw6f6bhrky0c8jk
   */
  instanceId?: string;
  /**
   * @remarks
   * The namespace names for which the event takes effect.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The repository names for which the event takes effect.
   */
  repoNames?: string[];
  /**
   * @remarks
   * The tag filtering rule that triggers the event.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * @example
   * protection
   */
  ruleName?: string;
  /**
   * @remarks
   * The scan rule ID.
   * 
   * @example
   * crscnr-aemytkwad2h7fyhb
   */
  scanRuleId?: string;
  /**
   * @remarks
   * The scan scope.
   * 
   * @example
   * REPO
   */
  scanScope?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * 
   * - `cve`: system vulnerability
   * 
   * - `sca`: application vulnerability
   * 
   * @example
   * SBOM
   */
  scanType?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * - `ALL`: all triggers
   * 
   * - `TAG_LISTTAG`: tag trigger
   * 
   * - `TAG_REG_EXP`: expression trigger
   * 
   * @example
   * AUTO
   */
  triggerType?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-08-28T20:07:33.164
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      namespaces: 'Namespaces',
      repoNames: 'RepoNames',
      repoTagFilterPattern: 'RepoTagFilterPattern',
      ruleName: 'RuleName',
      scanRuleId: 'ScanRuleId',
      scanScope: 'ScanScope',
      scanType: 'ScanType',
      triggerType: 'TriggerType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      instanceId: 'string',
      namespaces: { 'type': 'array', 'itemType': 'string' },
      repoNames: { 'type': 'array', 'itemType': 'string' },
      repoTagFilterPattern: 'string',
      ruleName: 'string',
      scanRuleId: 'string',
      scanScope: 'string',
      scanType: 'string',
      triggerType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.namespaces)) {
      $dara.Model.validateArray(this.namespaces);
    }
    if(Array.isArray(this.repoNames)) {
      $dara.Model.validateArray(this.repoNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScanRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - `true`: The API call is successful.
   * 
   * - `false`: The API call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C87993B5-7D61-5CAC-8D64-1AC732DD69FF
   */
  requestId?: string;
  /**
   * @remarks
   * The scan rule.
   */
  scanRule?: GetScanRuleResponseBodyScanRule;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      scanRule: 'ScanRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      scanRule: GetScanRuleResponseBodyScanRule,
    };
  }

  validate() {
    if(this.scanRule && typeof (this.scanRule as any).validate === 'function') {
      (this.scanRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

