// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsRequest extends $dara.Model {
  businessChannel?: string;
  /**
   * @remarks
   * The list of cloud computer policy IDs to exclude from the query results.
   */
  externalPolicyGroupIds?: string[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * - Maximum value: 100
   * 
   * - Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous response. Do not set this parameter for the first request.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * The list of cloud computer policy IDs.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string[];
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The effective scope of the cloud computer policy.
   * 
   * @example
   * GLOBAL
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      externalPolicyGroupIds: 'ExternalPolicyGroupIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyGroupId: 'PolicyGroupId',
      regionId: 'RegionId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
      externalPolicyGroupIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyGroupId: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      scope: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.externalPolicyGroupIds)) {
      $dara.Model.validateArray(this.externalPolicyGroupIds);
    }
    if(Array.isArray(this.policyGroupId)) {
      $dara.Model.validateArray(this.policyGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

