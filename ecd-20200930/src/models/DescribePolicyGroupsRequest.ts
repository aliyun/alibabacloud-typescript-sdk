// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The business channel. Valid values:
   * - Enterprise: Enterprise Edition.
   * - Business: Business Edition.
   * 
   * @example
   * Enterprise
   */
  businessChannel?: string;
  /**
   * @remarks
   * The IDs of the cloud desktop policies to exclude from the query results.
   */
  externalPolicyGroupIds?: string[];
  /**
   * @remarks
   * The number of entries to return per page when paging in a paged query.
   * 
   * - Maximum value: 100.
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the last call to this operation. You do not need to specify this parameter for the first call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number when paging in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return per page when paging in a paged query.    
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the cloud desktop policies.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions supported by Wuying Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The effective scope of the cloud desktop policies.
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

