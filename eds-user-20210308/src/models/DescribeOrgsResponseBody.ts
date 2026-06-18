// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgsResponseBodyOrgsResourcePolicyList extends $dara.Model {
  policyId?: string;
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgsResponseBodyOrgs extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org-1mox****
   */
  orgId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * 设计部****
   */
  orgName?: string;
  orgNamePath?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * org-ezqr****
   */
  parentOrgId?: string;
  resourcePolicyList?: DescribeOrgsResponseBodyOrgsResourcePolicyList[];
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      orgNamePath: 'OrgNamePath',
      parentOrgId: 'ParentOrgId',
      resourcePolicyList: 'ResourcePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      orgNamePath: 'string',
      parentOrgId: 'string',
      resourcePolicyList: { 'type': 'array', 'itemType': DescribeOrgsResponseBodyOrgsResourcePolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePolicyList)) {
      $dara.Model.validateArray(this.resourcePolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token used to retrieve the next page of results. If this parameter is not empty, more results are available. To retrieve the next page, pass this value in the `NextToken` parameter of a subsequent request.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The organization list.
   */
  orgs?: DescribeOrgsResponseBodyOrgs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0B4BB****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      orgs: 'Orgs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      orgs: { 'type': 'array', 'itemType': DescribeOrgsResponseBodyOrgs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

