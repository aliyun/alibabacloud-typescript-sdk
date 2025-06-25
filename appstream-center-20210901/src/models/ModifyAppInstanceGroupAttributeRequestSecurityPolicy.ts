// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupAttributeRequestSecurityPolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to reset after unbinding from a delivery group.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
   * @remarks
   * Specifies whether to skip user permission verification.
   * 
   * Valid values:
   * 
   * *   true
   * *   false: This is the default value.
   * 
   * @example
   * false
   */
  skipUserAuthCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      resetAfterUnbind: 'ResetAfterUnbind',
      skipUserAuthCheck: 'SkipUserAuthCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resetAfterUnbind: 'boolean',
      skipUserAuthCheck: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

