// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the security group. The description must be 2 to 256 characters in length. It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The rules of the security group. Valid values of N: 0 to 200.
   */
  permissionsShrink?: string;
  /**
   * @remarks
   * The name of the security group. The name must be 2 to 128 characters in length, and can contain digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`. By default, this parameter is empty.
   * 
   * @example
   * Dcdn1:2_3-4
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      permissionsShrink: 'Permissions',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      permissionsShrink: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

