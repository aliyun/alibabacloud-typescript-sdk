// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeetingRoomGroupRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMeetingRoomGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172
   */
  groupId?: string;
  /**
   * @example
   * 测试分组
   */
  groupName?: string;
  tenantContext?: UpdateMeetingRoomGroupRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      tenantContext: UpdateMeetingRoomGroupRequestTenantContext,
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

