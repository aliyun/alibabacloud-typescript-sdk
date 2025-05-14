// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMeetingRoomGroupListShrinkRequest extends $dara.Model {
  requestShrink?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      requestShrink: 'Request',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestShrink: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

