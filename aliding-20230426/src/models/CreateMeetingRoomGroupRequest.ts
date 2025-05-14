// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMeetingRoomGroupRequestTenantContext } from "./CreateMeetingRoomGroupRequestTenantContext";


export class CreateMeetingRoomGroupRequest extends $dara.Model {
  /**
   * @example
   * 测试分组
   */
  groupName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172L
   */
  parentGroupId?: number;
  tenantContext?: CreateMeetingRoomGroupRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      parentGroupId: 'ParentGroupId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      parentGroupId: 'number',
      tenantContext: CreateMeetingRoomGroupRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

