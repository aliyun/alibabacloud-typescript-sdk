// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud account IDs.
   * 
   * @example
   * ["1182725234319446"]
   */
  accountIds?: string[];
  /**
   * @remarks
   * Specifies whether the account is activated. Valid values:
   * - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The keyword for product search. Fuzzy match is supported.
   * 
   * @example
   * Sample keyword
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * > The maximum number of entries per page is 30.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of new system role codes. This is a full replacement and must contain at least one role. Valid values: SUPER_ADMIN, SYSTEM_ADMIN, SEMANTIC_ADMIN, SKILL_ADMIN, KB_ADMIN, AGENT_ADMIN, and APPLICATION_USER.
   * 
   * @example
   * ["string_value"]
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The tenant ID. This is a common parameter. winnexo-cli explicitly passes this parameter by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'accountIds',
      isActive: 'isActive',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      roleCodes: 'roleCodes',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      isActive: 'boolean',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      roleCodes: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    if(Array.isArray(this.roleCodes)) {
      $dara.Model.validateArray(this.roleCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

