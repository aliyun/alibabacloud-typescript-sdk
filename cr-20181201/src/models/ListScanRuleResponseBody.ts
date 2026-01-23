// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanRuleResponseBodyScanRules extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1702361810000
   */
  createTime?: number;
  /**
   * @remarks
   * The list of namespaces.
   */
  namespaces?: string[];
  /**
   * @remarks
   * The repository name.
   */
  repoNames?: string[];
  /**
   * @remarks
   * The tag that triggers the scan matches the regular expression.
   * 
   * @example
   * .*
   */
  repoTagFilterPattern?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * cicd-prod
   */
  ruleName?: string;
  /**
   * @remarks
   * The scan rule id.
   * 
   * @example
   * crscnr-2sdveqjhpzd****
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
   * The scan type. Valid values:
   * 
   * *   `VUL`: Products Cloud Security Scanner
   * *   `SBOM`: Product Content Analysis
   * 
   * @example
   * SBOM
   */
  scanType?: string;
  /**
   * @remarks
   * The trigger type.
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
   * @remarks
   * The HTTP status code
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * True
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
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
  /**
   * @remarks
   * The list of scan rules.
   */
  scanRules?: ListScanRuleResponseBodyScanRules[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

