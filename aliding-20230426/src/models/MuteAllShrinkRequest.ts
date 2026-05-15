// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MuteAllShrinkRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  forceMute?: boolean;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
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
      forceMute: 'ForceMute',
      tenantContextShrink: 'TenantContext',
      conferenceId: 'conferenceId',
      muteAction: 'muteAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceMute: 'boolean',
      tenantContextShrink: 'string',
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

