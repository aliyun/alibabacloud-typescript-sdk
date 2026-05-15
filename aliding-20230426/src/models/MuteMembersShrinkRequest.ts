// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MuteMembersShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ["012345"]
   */
  userIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 607452e01401526ee39609e1
   */
  conferenceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mute
   */
  muteAction?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      userIdsShrink: 'UserIds',
      conferenceId: 'conferenceId',
      muteAction: 'muteAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      userIdsShrink: 'string',
      conferenceId: 'string',
      muteAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

