// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulWhitelistResponseBodyVulWhitelists extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2017:3263: curl security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 1275
   */
  id?: string;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20173263
   */
  name?: string;
  /**
   * @remarks
   * The reason why the vulnerability is added to the whitelist.
   * 
   * @example
   * ignore
   */
  reason?: string;
  /**
   * @remarks
   * The application scope of the rule. The value is a JSON string that contains the following fields:
   * 
   * *   **type**: the type of the assets to which the rule is applied. Valid values:
   * 
   *     *   **Uuid**: server
   *     *   **GroupId**: server group
   * 
   * *   **groupIds**: the ID of the server group
   * 
   * *   **uuids**: the UUID of the server
   * 
   * > If this field is empty, the rule is applied to all assets.
   * 
   * @example
   * {"type":"GroupId","groupIds":[916****],"uuids":[]}
   */
  targetInfo?: string;
  /**
   * @remarks
   * The type of the vulnerability.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The information about the vulnerability. The value of this parameter is in the JSON format. Valid values:
   * 
   * *   **name**: the name of the vulnerability
   * *   **type**: the type of the vulnerability.
   * *   **aliasName**: the alias of the vulnerability
   * 
   * @example
   * [{
   * "name":"oval:com.redhat.rhsa:def:20173263",
   * "type":"cve",
   * "aliasName":"RHSA-2017:3263: curl security update"
   * }]
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      targetInfo: 'TargetInfo',
      type: 'Type',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      targetInfo: 'string',
      type: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 74F97EF7-B543-43FD-A4E9-18456731F9C5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * An array that consists of information about the whitelist of vulnerabilities.
   */
  vulWhitelists?: DescribeVulWhitelistResponseBodyVulWhitelists[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulWhitelists: 'VulWhitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vulWhitelists: { 'type': 'array', 'itemType': DescribeVulWhitelistResponseBodyVulWhitelists },
    };
  }

  validate() {
    if(Array.isArray(this.vulWhitelists)) {
      $dara.Model.validateArray(this.vulWhitelists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

