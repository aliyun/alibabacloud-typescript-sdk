// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
  /**
   * @remarks
   * The parent organization ID.
   * 
   * @example
   * org-****
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

