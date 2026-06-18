// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrgByLayerRequest extends $dara.Model {
  /**
   * @remarks
   * Channel
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * 产品部
   */
  orgName?: string;
  /**
   * @remarks
   * The ID of the parent organization.
   * 
   * @example
   * org-11fs****
   */
  parentOrgId?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
      orgName: 'OrgName',
      parentOrgId: 'ParentOrgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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

