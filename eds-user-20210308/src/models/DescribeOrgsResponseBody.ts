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
   * org-****
   */
  orgId?: string;
  /**
   * @remarks
   * The name of the organizational unit.
   * 
   * @example
   * org****
   */
  orgName?: string;
  orgNamePath?: string;
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * org-****
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
   * The token that determines the start point of the query. The return value is the value of the NextToken response parameter that was returned last time the DescribeOrgs operation was called.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The organizations.
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

