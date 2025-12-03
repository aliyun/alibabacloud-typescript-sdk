// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project.admin
   */
  roleIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5e70xxxxxxcd000xxxxe96
   */
  targetIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Space
   */
  targetType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 19xx7043xxxxxxx914
   */
  userIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      roleIdentifier: 'roleIdentifier',
      targetIdentifier: 'targetIdentifier',
      targetType: 'targetType',
      userIdentifier: 'userIdentifier',
      userType: 'userType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleIdentifier: 'string',
      targetIdentifier: 'string',
      targetType: 'string',
      userIdentifier: 'string',
      userType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

