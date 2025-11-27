// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgByLayerResponseBodyOrgs extends $dara.Model {
  /**
   * @remarks
   * The ID of the organization.
   * 
   * @example
   * org-1mox****
   */
  orgId?: string;
  /**
   * @remarks
   * The name of the organization.
   */
  orgName?: string;
  /**
   * @remarks
   * The ID of the parent organization.
   * 
   * @example
   * org-ezqr****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
      parentOrgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrgByLayerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The organizations.
   */
  orgs?: DescribeOrgByLayerResponseBodyOrgs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orgs: 'Orgs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgs: { 'type': 'array', 'itemType': DescribeOrgByLayerResponseBodyOrgs },
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

