// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApprovalProcessesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page when paging is used. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page when paging is used. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the associated business policy.
   * 
   * @example
   * pid-6d6ad77d5b52****
   */
  policyId?: string;
  /**
   * @remarks
   * The type of the associated policy. Valid values:
   * - **DomainBlacklist**: domain name blacklist.
   * - **DomainWhitelist**: domain name whitelist.
   * - **SoftwareBlock**: software blocking.
   * - **AppUninstall**: agent uninstallation.
   * - **DlpSend**: file outgoing.
   * - **PeripheralBlock**: peripheral control.
   * 
   * @example
   * DlpSend
   */
  policyType?: string;
  /**
   * @remarks
   * The collection of approval process IDs.
   */
  processIds?: string[];
  /**
   * @remarks
   * The template name. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). Chinese characters are supported.
   * 
   * @example
   * test
   */
  processName?: string;
  /**
   * @remarks
   * The ID of the associated approver. You can call the following operation to obtain the ID:
   * - [ListUsers](~~ListUsers~~): lists users.
   * 
   * @example
   * su_e8f218fb171edd167c2ad917d21f53148bdefc510ca1f3c3cc0249d3643d****
   */
  saseUserId?: string;
  /**
   * @remarks
   * The username of the associated approver.
   * 
   * @example
   * 王先生
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

