// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IDPermission } from "./Idpermission";


export class BaseGroupResponse extends $dara.Model {
  /**
   * @example
   * 111111
   */
  createdAt?: number;
  /**
   * @example
   * system
   */
  creator?: string;
  /**
   * @example
   * desc-111
   */
  description?: string;
  /**
   * @example
   * bj123
   */
  domainId?: string;
  /**
   * @example
   * b38b5681bd964950ad8bc0f8ea504793
   */
  groupId?: string;
  /**
   * @example
   * name-111
   */
  groupName?: string;
  isSync?: boolean;
  permission?: { [key: string]: IDPermission };
  /**
   * @example
   * 111111
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      creator: 'creator',
      description: 'description',
      domainId: 'domain_id',
      groupId: 'group_id',
      groupName: 'group_name',
      isSync: 'is_sync',
      permission: 'permission',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      creator: 'string',
      description: 'string',
      domainId: 'string',
      groupId: 'string',
      groupName: 'string',
      isSync: 'boolean',
      permission: { 'type': 'map', 'keyType': 'string', 'valueType': IDPermission },
      updatedAt: 'string',
    };
  }

  validate() {
    if(this.permission) {
      $dara.Model.validateMap(this.permission);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

