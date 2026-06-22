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
   * The rule ID.
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
   * The reason for adding the vulnerability to the whitelist.
   * 
   * @example
   * ignore
   */
  reason?: string;
  /**
   * @remarks
   * The scope of the rule. The value is a JSON string that contains the following fields:
   * 
   * - **type**: The applicable type. Valid values:
   * 
   *      - **Uuid**: host
   *      - **GroupId**: group
   * 
   * - **groupIds**: The IDs of the applicable asset groups.
   * - **uuids**: The UUIDs of the applicable assets.
   * 
   * > If this value is empty, the rule applies to all assets.
   * 
   * @example
   * {"type":"GroupId","groupIds":[916****],"uuids":[]}
   */
  targetInfo?: string;
  /**
   * @remarks
   * The vulnerability type.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The vulnerability information. The value is in JSON format.
   * 
   * - **name**: The name of the vulnerability.
   * - **type**: The type of the vulnerability.
   * - **aliasName**: The alias of the vulnerability.
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
   * The number of entries on the current page in paging.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in paging.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in paging.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 74F97EF7-B543-43FD-A4E9-18456731F9C5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of whitelisted vulnerabilities.
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

