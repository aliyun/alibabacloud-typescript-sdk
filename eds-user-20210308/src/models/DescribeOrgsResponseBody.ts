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
   * The access type of the organization node. Valid values:
   * - MANAGEABLE: indicates a manageable node.
   * - PATH_ONLY: indicates a node used only to display the full path to the root organization.
   */
  accessType?: string;
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
   * DesignDepartment****
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
      accessType: 'AccessType',
      orgId: 'OrgId',
      orgName: 'OrgName',
      orgNamePath: 'OrgNamePath',
      parentOrgId: 'ParentOrgId',
      resourcePolicyList: 'ResourcePolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
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
   * The pagination token. Set this parameter to the value of NextToken that was returned in the previous API call.
   * 
   * @example
   * AAAAAV3MpHK****
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of organizations.
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

