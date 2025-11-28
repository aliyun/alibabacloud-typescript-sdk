// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScanRuleResponseBodyScanRule extends $dara.Model {
  /**
   * @example
   * 2018-03-15T17:08Z
   */
  createTime?: number;
  /**
   * @example
   * cri-szw6f6bhrky0c8jk
   */
  instanceId?: string;
  namespaces?: string[];
  repoNames?: string[];
  /**
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @example
   * protection
   */
  ruleName?: string;
  /**
   * @example
   * crscnr-aemytkwad2h7fyhb
   */
  scanRuleId?: string;
  scanScope?: string;
  /**
   * @example
   * SBOM
   */
  scanType?: string;
  /**
   * @example
   * AUTO
   */
  triggerType?: string;
  /**
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
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @example
   * C87993B5-7D61-5CAC-8D64-1AC732DD69FF
   */
  requestId?: string;
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

