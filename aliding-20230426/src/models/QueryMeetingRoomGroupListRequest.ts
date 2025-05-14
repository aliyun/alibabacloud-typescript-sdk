// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMeetingRoomGroupListRequestTenantContext } from "./QueryMeetingRoomGroupListRequestTenantContext";


export class QueryMeetingRoomGroupListRequest extends $dara.Model {
  request?: { [key: string]: any };
  tenantContext?: QueryMeetingRoomGroupListRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      request: 'Request',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      request: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tenantContext: QueryMeetingRoomGroupListRequestTenantContext,
    };
  }

  validate() {
    if(this.request) {
      $dara.Model.validateMap(this.request);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

