// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersResponseBodyUsersOrgs extends $dara.Model {
  /**
   * @remarks
   * The organization ID.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * Organization 1
   */
  orgName?: string;
  static names(): { [key: string]: string } {
    return {
      orgId: 'OrgId',
      orgName: 'OrgName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgId: 'string',
      orgName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

