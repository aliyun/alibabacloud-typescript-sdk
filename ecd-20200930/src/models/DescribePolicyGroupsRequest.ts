// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsRequest extends $dara.Model {
  businessChannel?: string;
  /**
   * @remarks
   * The array of cloud computer policy IDs to be excluded.
   */
  externalPolicyGroupIds?: string[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Valid values: 1 to 100
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the cloud computer policies.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string[];
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
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
   * Valid values:
   * 
   * *   ALL
   * *   IP
   * *   GLOBAL
   * 
   * @example
   * ALL
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

