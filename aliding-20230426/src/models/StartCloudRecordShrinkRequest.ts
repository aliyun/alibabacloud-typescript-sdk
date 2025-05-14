// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartCloudRecordShrinkRequest extends $dara.Model {
  /**
   * @example
   * speech
   */
  mode?: string;
  /**
   * @example
   * relative_right
   */
  smallWindowPosition?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      smallWindowPosition: 'SmallWindowPosition',
      tenantContextShrink: 'TenantContext',
      conferenceId: 'conferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      smallWindowPosition: 'string',
      tenantContextShrink: 'string',
      conferenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

