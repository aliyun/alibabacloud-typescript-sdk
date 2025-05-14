// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRecordPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * minutes
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1dddwrqrq
   */
  conferenceId?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      conferenceId: 'ConferenceId',
      tenantContextShrink: 'TenantContext',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      conferenceId: 'string',
      tenantContextShrink: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

