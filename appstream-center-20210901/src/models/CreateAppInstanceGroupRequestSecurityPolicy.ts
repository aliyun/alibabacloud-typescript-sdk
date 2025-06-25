// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppInstanceGroupRequestSecurityPolicy extends $dara.Model {
  /**
   * @example
   * true
   */
  resetAfterUnbind?: boolean;
  /**
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

