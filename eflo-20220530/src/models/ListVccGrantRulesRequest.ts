// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVccGrantRulesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable paged query. Optional values:
   * 
   * *   **true**: Enable pagination query
   * *   **false**: Pagination query is disabled
   * 
   * @example
   * false
   */
  enablePage?: boolean;
  /**
   * @remarks
   * Lingjun HUB ID
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * Use the drop-down box
   * 
   * @example
   * true
   */
  forSelect?: boolean;
  /**
   * @remarks
   * Authorization Entry ID
   * 
   * @example
   * grant-rule-jaj33d1b804
   */
  grantRuleId?: string;
  /**
   * @remarks
   * Authorized Tenant ID
   * 
   * @example
   * 1620939556166277
   */
  grantTenantId?: string;
  /**
   * @remarks
   * Network Instance ID
   * 
   * @example
   * vcc-cn-jaj33d1b804
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name
   * 
   * @example
   * vcc-1
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-aekzb3n5lgk2ieq
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      enablePage: 'EnablePage',
      erId: 'ErId',
      forSelect: 'ForSelect',
      grantRuleId: 'GrantRuleId',
      grantTenantId: 'GrantTenantId',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePage: 'boolean',
      erId: 'string',
      forSelect: 'boolean',
      grantRuleId: 'string',
      grantTenantId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

