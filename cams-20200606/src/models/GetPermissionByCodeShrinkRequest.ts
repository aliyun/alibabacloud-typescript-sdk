// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPermissionByCodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Authorize code information.
   * 
   * This parameter is required.
   * 
   * @example
   * flow_001
   */
  code?: string;
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * @example
   * 393847477
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The permissions.
   */
  permissionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      custSpaceId: 'CustSpaceId',
      permissionsShrink: 'Permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      custSpaceId: 'string',
      permissionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

