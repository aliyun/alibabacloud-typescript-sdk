// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntegrationPoliciesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The add-on name.
   * 
   * @example
   * cs-default
   */
  addonName?: string;
  /**
   * @remarks
   * The ID of the attached resource.
   * 
   * @example
   * 622d27c2e87d49debceeebc7c642610e
   */
  bindResourceId?: string;
  /**
   * @remarks
   * The IDs of the entity groups to filter by. Separate multiple IDs with commas.
   * 
   * @example
   * eg-1,eg-2,eg-3
   */
  entityGroupIds?: string;
  /**
   * @remarks
   * The IDs of the regions to query. Separate multiple region IDs with commas.
   * 
   * @example
   * cn-beijing,cn-hangzhou
   */
  filterRegionIds?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. The default value is 30. The maximum value is 100.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. You do not need to specify this parameter for the first request. You can obtain the token from the response to the previous request.
   * 
   * @example
   * mvnX6zqg3P
   */
  nextToken?: string;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * policy-93817a401f78435596d745a97d2e85a1
   */
  policyId?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * prod-database
   */
  policyName?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * CS
   */
  policyType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cmee-622d27c2e87d49debceeebc7c642610e
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * A general-purpose query string.
   * 
   * @example
   * test
   */
  query?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The workspace.
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

