// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLangfuseUserRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user is allowed to create organizations. Default value: false.
   */
  allowOrgCreation?: boolean;
  /**
   * @remarks
   * The Langfuse instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lfs-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * john@company.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * john
   */
  name?: string;
  /**
   * @remarks
   * The role of the user in the organization.
   * 
   * @example
   * VIEWER
   */
  orgRole?: string;
  /**
   * @remarks
   * The ID of the Langfuse organization.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
  /**
   * @remarks
   * The password of the user account. The password must meet the following requirements:
   * 
   * - The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
   * 
   * - Special characters include !@#$%^&*()_+-=.
   * 
   * - The password must be 8 to 32 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 2F9e9@******
   */
  password?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      allowOrgCreation: 'AllowOrgCreation',
      DBInstanceId: 'DBInstanceId',
      email: 'Email',
      name: 'Name',
      orgRole: 'OrgRole',
      organizationId: 'OrganizationId',
      password: 'Password',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOrgCreation: 'boolean',
      DBInstanceId: 'string',
      email: 'string',
      name: 'string',
      orgRole: 'string',
      organizationId: 'string',
      password: 'string',
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

