// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLangfuseUserAllowOrgCreationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the user is allowed to create organizations.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  allowOrgCreation?: boolean;
  /**
   * @remarks
   * The Langfuse instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lfs-2ze1n52*******
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * alice@company.com
   */
  email?: string;
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
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowOrgCreation: 'boolean',
      DBInstanceId: 'string',
      email: 'string',
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

