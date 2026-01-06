// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingInfoShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  /**
   * @example
   * 21001
   */
  orgId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      conferenceId: 'conferenceId',
      orgId: 'orgId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      conferenceId: 'string',
      orgId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

