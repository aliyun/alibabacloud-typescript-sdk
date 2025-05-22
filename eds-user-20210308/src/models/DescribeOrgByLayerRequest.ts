// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgByLayerRequest extends $dara.Model {
  orgName?: string;
  /**
   * @example
   * org-11fs****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

