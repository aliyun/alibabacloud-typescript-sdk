// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanRuleResponseBodyScanRules extends $dara.Model {
  /**
   * @example
   * 1702361810000
   */
  createTime?: number;
  namespaces?: string[];
  repoNames?: string[];
  /**
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @example
   * cicd-prod
   */
  ruleName?: string;
  /**
   * @example
   * crscnr-2sdveqjhpzd****
   */
  scanRuleId?: string;
  /**
   * @example
   * REPO
   */
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
   * 1764122725000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
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

export class ListScanRuleResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Request Id
   * 
   * @example
   * 2CB62B5E-605B-5A23-9110-728B8207A25C
   */
  requestId?: string;
  scanRules?: ListScanRuleResponseBodyScanRules[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scanRules: 'ScanRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      scanRules: { 'type': 'array', 'itemType': ListScanRuleResponseBodyScanRules },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scanRules)) {
      $dara.Model.validateArray(this.scanRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

