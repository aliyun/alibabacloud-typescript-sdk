// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteMeetingRoomGroupRequestTenantContext } from "./DeleteMeetingRoomGroupRequestTenantContext";


export class DeleteMeetingRoomGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172
   */
  groupId?: string;
  tenantContext?: DeleteMeetingRoomGroupRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      tenantContext: DeleteMeetingRoomGroupRequestTenantContext,
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

