// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The list of Alibaba Cloud account IDs.
   * 
   * @example
   * string_value
   */
  accountIds?: string[];
  /**
   * @remarks
   * Specifies whether the account is activated.
   *  - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The keyword for searching products. Fuzzy match is supported.
   * 
   * @example
   * SampleKeyword
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
   * The number of entries per page.
   * 
   * > The maximum number of entries per page is 30.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of new system role codes (full replacement, at least one role must be included). Valid values: SUPER_ADMIN / SYSTEM_ADMIN / SEMANTIC_ADMIN / SKILL_ADMIN / KB_ADMIN / AGENT_ADMIN / APPLICATION_USER.
   * 
   * @example
   * string_value
   */
  roleCodes?: string[];
  /**
   * @remarks
   * The tenant ID. This is a common parameter. The winnexo-cli passes this parameter explicitly by using --tenant-id.
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

