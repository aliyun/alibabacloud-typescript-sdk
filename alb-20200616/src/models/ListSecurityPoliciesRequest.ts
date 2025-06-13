// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSecurityPoliciesRequestTag } from "./ListSecurityPoliciesRequestTag";


export class ListSecurityPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security policy IDs. You can specify at most 20 security policies.
   */
  securityPolicyIds?: string[];
  /**
   * @remarks
   * The names of the security policies. You can specify up to 10 names.
   */
  securityPolicyNames?: string[];
  /**
   * @remarks
   * The tags.
   */
  tag?: ListSecurityPoliciesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyIds: 'SecurityPolicyIds',
      securityPolicyNames: 'SecurityPolicyNames',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
      securityPolicyNames: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListSecurityPoliciesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.securityPolicyIds)) {
      $dara.Model.validateArray(this.securityPolicyIds);
    }
    if(Array.isArray(this.securityPolicyNames)) {
      $dara.Model.validateArray(this.securityPolicyNames);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

