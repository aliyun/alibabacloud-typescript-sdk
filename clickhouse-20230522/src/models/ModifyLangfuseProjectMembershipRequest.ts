// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLangfuseProjectMembershipRequest extends $dara.Model {
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
   * The Langfuse organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
  /**
   * @remarks
   * The Langfuse project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  projectId?: string;
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
  /**
   * @remarks
   * The role of the user in the project.
   * 
   * This parameter is required.
   * 
   * @example
   * VIEWER
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      email: 'Email',
      organizationId: 'OrganizationId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      email: 'string',
      organizationId: 'string',
      projectId: 'string',
      regionId: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

