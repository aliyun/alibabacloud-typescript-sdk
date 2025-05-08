// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * An array of security group rules. You can specify up to 200 IDs of security group rules.
   */
  permissionsShrink?: string;
  /**
   * @remarks
   * The name of the security group. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter but cannot start with http:// or https://. It can contain letters, digits, colons (:), underscores (_), and hyphens (-). By default, this parameter is empty.
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

