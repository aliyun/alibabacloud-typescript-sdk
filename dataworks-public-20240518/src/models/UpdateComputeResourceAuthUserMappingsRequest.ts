// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeResourceAuthUserMappingsRequestUpserts extends $dara.Model {
  /**
   * @remarks
   * The password of the target system for the mapping, such as an LDAP password.
   * 
   * @example
   * 123xx
   */
  password?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID.
   * 
   * @example
   * 12747300953xxx62
   */
  userId?: string;
  /**
   * @remarks
   * The username of the target system for the mapping, such as an LDAP username.
   * 
   * @example
   * lisa
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userId: 'UserId',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userId: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComputeResourceAuthUserMappingsRequest extends $dara.Model {
  /**
   * @remarks
   * The compute resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123455
   */
  computeResourceId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The list of user mappings to remove.
   */
  removeUserIds?: string[];
  /**
   * @remarks
   * The list of objects to update.
   */
  upserts?: UpdateComputeResourceAuthUserMappingsRequestUpserts[];
  static names(): { [key: string]: string } {
    return {
      computeResourceId: 'ComputeResourceId',
      projectId: 'ProjectId',
      removeUserIds: 'RemoveUserIds',
      upserts: 'Upserts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResourceId: 'number',
      projectId: 'number',
      removeUserIds: { 'type': 'array', 'itemType': 'string' },
      upserts: { 'type': 'array', 'itemType': UpdateComputeResourceAuthUserMappingsRequestUpserts },
    };
  }

  validate() {
    if(Array.isArray(this.removeUserIds)) {
      $dara.Model.validateArray(this.removeUserIds);
    }
    if(Array.isArray(this.upserts)) {
      $dara.Model.validateArray(this.upserts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

