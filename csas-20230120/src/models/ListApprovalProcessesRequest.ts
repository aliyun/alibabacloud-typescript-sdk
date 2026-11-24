// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page in a paging query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the associated business policy. If you use this parameter, you must also specify PolicyType.
   * 
   * @example
   * pid-6d6ad77d5b52****
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the business policy. Valid values:
   * - **DomainBlacklist**: domain name blacklist.
   * - **DomainWhitelist**: domain name whitelist.
   * - **SoftwareBlock**: software block.
   * - **AppUninstall**: endpoint uninstallation.
   * - **DlpSend**: file sending.
   * - **PeripheralBlock**: peripheral control.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * The IDs of the approval processes. A maximum of 100 approval process IDs are supported.
   */
  processIds?: string[];
  /**
   * @remarks
   * The name of the approval process. The name must be 1 to 128 characters in length and can contain Chinese characters, letters, digits, periods (.), underscores (_), and hyphens (-). Fuzzy match is supported.
   * 
   * @example
   * File sending approval
   */
  processName?: string;
  /**
   * @remarks
   * The ID of the approver, which starts with su_. Only approval processes that include this approver in the approval nodes are returned. Value source:
   * - [ListUsers](~~ListUsers~~): Lists users.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The username of the approver. Fuzzy match is supported. Only approval processes that include this approver in the approval nodes are returned.
   * 
   * @example
   * Mr. Wang
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      policyId: 'PolicyId',
      policyType: 'PolicyType',
      processIds: 'ProcessIds',
      processName: 'ProcessName',
      saseUserId: 'SaseUserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      policyId: 'string',
      policyType: 'string',
      processIds: { 'type': 'array', 'itemType': 'string' },
      processName: 'string',
      saseUserId: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processIds)) {
      $dara.Model.validateArray(this.processIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

