// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClientRuleStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number for the paged query with paging. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The policy name for substring matching. If this parameter is not specified, policies are not filtered by name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page for the paged query with paging. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **0**: Software hardening.
   * - **1**: Firewall.
   * - **2**: Proactive defense.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  policyType?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

