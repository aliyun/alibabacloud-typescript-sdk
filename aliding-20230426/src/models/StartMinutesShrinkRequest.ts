// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartMinutesShrinkRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  ownerUserId?: string;
  /**
   * @example
   * false
   */
  recordAudio?: boolean;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      conferenceId: 'conferenceId',
      ownerUserId: 'ownerUserId',
      recordAudio: 'recordAudio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      conferenceId: 'string',
      ownerUserId: 'string',
      recordAudio: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

