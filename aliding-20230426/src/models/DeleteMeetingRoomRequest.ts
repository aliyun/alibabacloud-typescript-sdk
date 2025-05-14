// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteMeetingRoomRequestTenantContext } from "./DeleteMeetingRoomRequestTenantContext";


export class DeleteMeetingRoomRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0ffb7xxxxx
   */
  roomId?: string;
  tenantContext?: DeleteMeetingRoomRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      tenantContext: DeleteMeetingRoomRequestTenantContext,
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

