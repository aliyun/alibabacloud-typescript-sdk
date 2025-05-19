// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRulesRequest extends $dara.Model {
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceRuleId?: string;
  resourceRuleName?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceRuleId: 'ResourceRuleId',
      resourceRuleName: 'ResourceRuleName',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceRuleId: 'string',
      resourceRuleName: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

