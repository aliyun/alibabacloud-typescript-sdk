// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgByLayerResponseBodyOrgs extends $dara.Model {
  /**
   * @example
   * org-1mox****
   */
  orgId?: string;
  orgName?: string;
  /**
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

