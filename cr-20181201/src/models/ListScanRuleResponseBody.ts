// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanRuleResponseBodyScanRules extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * The regular expression used to match tags that trigger a scan.
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
   * The scan rule ID.
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
   * - `VUL`: artifact vulnerability scanning.
   * - `SBOM`: artifact content analysis.
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
   * The update time. The value is a UNIX timestamp in milliseconds.
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
   * The return code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
   * The page size.
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
   * The total number of entries.
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

