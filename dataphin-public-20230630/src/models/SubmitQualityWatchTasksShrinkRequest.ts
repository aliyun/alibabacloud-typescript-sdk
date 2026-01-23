// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQualityWatchTasksShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  submitCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      submitCommandShrink: 'SubmitCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      submitCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

