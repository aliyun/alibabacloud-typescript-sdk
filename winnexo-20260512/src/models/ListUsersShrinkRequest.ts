// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of cloud account IDs.
   * 
   * @example
   * ["1182725234319446"]
   */
  accountIdsShrink?: string;
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
  roleCodesShrink?: string;
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
      accountIdsShrink: 'accountIds',
      isActive: 'isActive',
      keyword: 'keyword',
      page: 'page',
      pageSize: 'pageSize',
      roleCodesShrink: 'roleCodes',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIdsShrink: 'string',
      isActive: 'boolean',
      keyword: 'string',
      page: 'number',
      pageSize: 'number',
      roleCodesShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

