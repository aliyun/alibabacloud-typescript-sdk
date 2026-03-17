// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAclAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * This parameter is required.
   * 
   * @example
   * acl-xhwhyuo43l0n*****
   */
  aclId?: string;
  /**
   * @remarks
   * The ID of the region where the ACL is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

