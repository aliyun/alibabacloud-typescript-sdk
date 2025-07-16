// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMeetingRoomRequestTenantContext extends $dara.Model {
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

export class QueryMeetingRoomRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0ffb7xxxxx
   */
  roomId?: string;
  tenantContext?: QueryMeetingRoomRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      roomId: 'RoomId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roomId: 'string',
      tenantContext: QueryMeetingRoomRequestTenantContext,
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

