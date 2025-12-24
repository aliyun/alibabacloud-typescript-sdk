// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUsersRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 账号ID列表
   * 
   * This parameter is required.
   * 
   * @example
   * u_001
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

