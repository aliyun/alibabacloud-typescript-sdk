// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPoliciesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Addon Name.
   * 
   * @example
   * cs-default
   */
  addonName?: string;
  /**
   * @remarks
   * Bound Resource ID.
   * 
   * @example
   * 622d27c2e87d49debceeebc7c642610e
   */
  bindResourceId?: string;
  /**
   * @remarks
   * Filter for entity IDs, separated by commas.
   * 
   * @example
   * eg-1,eg-2,eg-3
   */
  entityGroupIds?: string;
  /**
   * @remarks
   * Used for Region query, separated by commas.
   * 
   * @example
   * cn-beijing,cn-hangzhou
   */
  filterRegionIds?: string;
  /**
   * @remarks
   * Maximum number of results to return, default is 30, with a maximum of 100.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * Used to return more results. This parameter is not required for the first query; for subsequent queries, use the Token obtained from the previous response.
   * 
   * @example
   * mvnX6zqg3P
   */
  nextToken?: string;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * policy-93817a401f78435596d745a97d2e85a1
   */
  policyId?: string;
  /**
   * @remarks
   * Rule Name.
   * 
   * @example
   * prod-database
   */
  policyName?: string;
  /**
   * @remarks
   * Policy Type
   * 
   * @example
   * CS
   */
  policyType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * cmee-622d27c2e87d49debceeebc7c642610e
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * Used for general queries.
   * 
   * @example
   * test
   */
  query?: string;
  /**
   * @remarks
   * Resource Group ID.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Tag list.
   */
  tagShrink?: string;
  /**
   * @remarks
   * Workspace.
   * 
   * @example
   * demo
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'addonName',
      bindResourceId: 'bindResourceId',
      entityGroupIds: 'entityGroupIds',
      filterRegionIds: 'filterRegionIds',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      policyId: 'policyId',
      policyName: 'policyName',
      policyType: 'policyType',
      prometheusInstanceId: 'prometheusInstanceId',
      query: 'query',
      resourceGroupId: 'resourceGroupId',
      tagShrink: 'tag',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      bindResourceId: 'string',
      entityGroupIds: 'string',
      filterRegionIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      policyId: 'string',
      policyName: 'string',
      policyType: 'string',
      prometheusInstanceId: 'string',
      query: 'string',
      resourceGroupId: 'string',
      tagShrink: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

