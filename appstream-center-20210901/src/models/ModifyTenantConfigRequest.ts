// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the resource expiration reminder feature.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  appInstanceGroupExpireRemind?: boolean;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupExpireRemind: 'AppInstanceGroupExpireRemind',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupExpireRemind: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

