// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppAccessStrategy extends $dara.Model {
  /**
   * @remarks
   * The global access policy of the application. Valid values:
   * 
   * *   allow: The domain allows access from all applications.
   * *   deny: The domain denies access from all apps. This is the default value.
   * 
   * Recommended settings:
   * 
   * 1.  Set effect to deny.
   * 2.  Specify except_app_id_list to allow specific applications to access the domain. Example: ["appid1", "appid2"].
   * 
   * @example
   * deny
   */
  effect?: string;
  /**
   * @remarks
   * The IDs of applications excluded from the global access policy.
   * 
   * *   If you set effect to allow, which indicates that the domain allows access from all applications, the applications specified by this parameter value cannot access the domain.
   * *   If you set effect to deny, which indicates that the domain denies access from all applications, the applications specified by this parameter value can access the domain.
   */
  exceptAppIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      exceptAppIdList: 'except_app_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      exceptAppIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exceptAppIdList)) {
      $dara.Model.validateArray(this.exceptAppIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

