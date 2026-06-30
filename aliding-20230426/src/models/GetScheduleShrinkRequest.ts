// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduleShrinkRequest extends $dara.Model {
  endTime?: string;
  startTime?: string;
  tenantContextShrink?: string;
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      tenantContextShrink: 'TenantContext',
      userIdsShrink: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
      tenantContextShrink: 'string',
      userIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

